import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/userProfile(.*)',
    '/movies/[id]/(.*)',
    '/movies/genre/(.*)',
    '/movies/collection/(.*)',
    '/tv/[id]/(.*)',
    '/tv/genre/(.*)',
  ]);

  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};