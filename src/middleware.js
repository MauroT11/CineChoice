import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/userProfile(.*)',
    '/movies/(.*)',
    '/movies/topRated/(.*)',
    '/movies/genre/(.*)',
    '/movies/collection/(.*)',
    '/movies/[id]/(.*)',
    '/tv/(.*)',
  ]);

  export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};