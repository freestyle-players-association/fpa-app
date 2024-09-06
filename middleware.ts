import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "./utils/supabase/middleware";
import { routing } from "@/i18n/routing";
import { cookies } from "next/headers";

const handleI18nRouting = createMiddleware(routing);

const protectedRoutes = ["/user-profile", "/tournaments/create"];

export async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);

  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((protectedRoute) =>
    path.includes(protectedRoute),
  );

  // I don't know if I find this fishy yet. Did not want to sign the session cookie my self.
  // If we need to look into authorization for redirection as well,
  // then we need to sign auth cookie our self
  const hasSessionCookie = Boolean(
    cookies()
      .getAll()
      .find((cookie) => cookie.name.includes("auth-token")),
  );

  if (isProtectedRoute && !hasSessionCookie) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return await updateSession(request, response);
}

export const config = {
  matcher: [
    "/",
    "/(de|en)/:path*",
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
