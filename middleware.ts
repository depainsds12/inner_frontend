import { withAuth } from "next-auth/middleware";

// Basic auth middleware, more logic will be added based on further requirements
export default withAuth;

export const config = {
  matcher: [
    // Add protected routes here
    "/profile/:path*",
  ],
};
