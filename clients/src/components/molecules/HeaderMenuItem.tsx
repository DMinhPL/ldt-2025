import React, { useMemo } from "react";
import { openMenu } from "../../stores";

type Props = {
  url: string;        // "/about"
  title: string;      // "About"
  pathname: string;   // "/en/about" (passed from Astro)
};

const HeaderMenuItem: React.FC<Props> = ({ url, title, pathname }) => {
  const languagePrefix = useMemo(() => {
    const seg = pathname.split("/")[1];
    return seg ? `/${seg}` : "";
  }, [pathname]);

  // Build localized href like your Next version: /{langPrefix}{url}
  const href = useMemo(() => {
    // If url is already absolute with lang (rare), keep it
    if (url.startsWith("/en/") || url.startsWith("/vi/")) return url;

    // Home: allow "/"
    if (url === "/") return languagePrefix || "/";

    return `${languagePrefix}${url}`;
  }, [url, languagePrefix]);

  const isActive = useMemo(() => {
    // Active if exact match or nested route
    if (href === "/") return pathname === "/" || pathname === "/";

    return pathname === href || pathname.startsWith(`${href}/`);
  }, [pathname, href]);

  const className = `font-medium ${isActive ? "text-green-ryb" : "text-licorice"
    } hover:text-green-ryb text-xl lg:text-base transition-base-style lg:px-2 py-2.5`;

  return (
    <a href={href} onClick={() => openMenu(false)} className={className}>
      {title}
    </a>
  );
};

export default HeaderMenuItem;
