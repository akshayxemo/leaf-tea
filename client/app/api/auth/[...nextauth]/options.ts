import {
  createOauthUser,
  getUserByEmail,
  loginUser,
} from "@/lib/actions/user.action";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions, User, Account, Profile } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface ExtendedUser extends User {
  role?: string;
}

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        let userRole = "User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
          image: profile.picture,
        };
      },
      clientId: process.env.GOOGLE_ID as any,
      clientSecret: process.env.GOOGLE_SECRET as any,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const user = credentials as {
          email: string;
          password: string;
        };

        const response = await loginUser(user.email, user.password);
        const loggedInUser = response.data;
        console.log("logged:", loggedInUser);

        if (loggedInUser && response.error === null) {
          // if everything is fine
          return {
            id: loggedInUser._id,
            name: loggedInUser.name,
            email: loggedInUser.email,
            role: loggedInUser.role,
          };
        } else {
          throw new Error(response.error);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Check if the sign-in method is OAuth Google
      if (account?.type === "oauth" && account?.provider === "google") {
        // console.log("signIn:account", account);
        // console.log("signIn:profile", profile);
        // console.log("signIn:user", user);
        // Check if the user already exists in your database
        const existingUser = await getUserByEmail(user.email as string);

        if (!existingUser) {
          // If the user doesn't exist, create a new user record in your database
          const res = await createOauthUser({
            name: profile?.name as string,
            email: user.email as string,
          });
        }
      }

      return true; // Continue the sign-in process
    },
    async jwt({ token, user }) {
      const Exteduser: ExtendedUser = user;
      if (Exteduser) token.role = Exteduser.role;
      console.log("token : ", token);
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.sub;
      }
      console.log("session:", session);
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    // signOut: "/api/auth/signout",
    error: "/signinError", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};
