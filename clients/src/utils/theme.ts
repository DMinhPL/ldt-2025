import type { ThemeBackground } from "../stores";

export function getThemeBackgroundFromPath(
  pathname: string,
  defaultLocale: string
): ThemeBackground {
  if (pathname === `/${defaultLocale}` || pathname === `/${defaultLocale}/`) {
    return "primary";
  }

  const secondaryRoutes = ["/about", "/agentic-ai", "/case-studies", "/contact"];

  return secondaryRoutes.some((p) => pathname.includes(p)) ? "secondary" : "primary";
}
