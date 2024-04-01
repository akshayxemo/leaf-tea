import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const AdminAllowedPaths = ["/dashboard/a/", "/admin"];

export default withAuth(
  async function middleware(req: any) {
    console.log("path:", req.nextUrl.pathname);
    console.log("role:", req.nextauth.token.role);

    // Check if req.nextUrl.pathname starts with any string in allowedPaths
    const isAdminAllowedPath = AdminAllowedPaths.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    );

    console.log(isAdminAllowedPath);

    if (isAdminAllowedPath && req.nextauth.token.role != "Admin") {
      const redirect_url = "/denied";
      //   console.log(req.nextUrl.origin + redirect_url);
      return NextResponse.rewrite(req.nextUrl.origin + redirect_url);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/admin/:path*", "/dashboard/:path*"] };
