import { loginUser } from "@/lib/actions/user.action";
import type { NextAuthOptions, User, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface ExtendedUser extends User {
  role?: string;
}

interface ExtendedSession extends Session {
  user?: ExtendedUser & { id?: string };
}

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        // const user = {
        //   id: "42",
        //   email: "dave@gmail.com",
        //   password: "nextauth",
        // };

        // if (
        //   credentials?.email === user.email &&
        //   credentials?.password === user.password
        // ) {
        //   return user;
        // } else {
        //   return null;
        // }
        const user = credentials as {
          email: string;
          password: string;
        };

        console.log(user);
        // perform you login logic

        // find out user from db
        // if (user.email !== "john@gmail.com" || user.password !== "1234") {
        //   throw new Error("invalid credentials");
        // }

        const loggedInUser = await loginUser(user.email, user.password);
        console.log(loggedInUser);

        // if everything is fine
        return {
          id: loggedInUser._id,
          name: loggedInUser.name,
          email: loggedInUser.email,
          role: loggedInUser.role,
        };
      },
    }),
  ],
  callbacks: {
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
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    // signOut: "/api/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};
