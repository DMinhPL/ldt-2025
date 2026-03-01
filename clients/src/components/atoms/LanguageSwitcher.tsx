import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import enFlag from "../../assets/images/en-flag.png";
import vnFlag from "../../assets/images/vn-flag.png";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: enFlag.src },
  { code: "vi-VN", name: "Tiếng Việt", flag: vnFlag.src },
];

type Props = {
  lang: string; // e.g. "en" | "vi-VN"
};

const LOCALE_PREFIX_RE = /^\/(en|vi-VN)(?=\/|$)/;

function replaceLocaleInPath(pathname: string, nextLocale: string) {
  if (nextLocale === "en") {
    // Special case: if switching to English from root, just return "/"
    return "/";
  }
  if (LOCALE_PREFIX_RE.test(pathname)) {
    if (nextLocale === "en") {
      // If switching to English, remove the locale prefix
      return pathname.replace(LOCALE_PREFIX_RE, "");
    }

    return pathname.replace(LOCALE_PREFIX_RE, `/${nextLocale}`);

  }

  // if no locale prefix exists, prepend it
  return `/${nextLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
}

const LanguageSwitcher: React.FC<Props> = ({ lang }) => {
  const initial = languages.find((l) => l.code === lang) ?? languages[0];

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(initial);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownUp, setIsDropdownUp] = useState(false);

  const languageRef = useRef<HTMLDivElement>(null);

  useClickOutside(languageRef as React.RefObject<HTMLDivElement>, () =>
    setIsOpen(false),
  );

  useEffect(() => {
    // keep in sync if parent changes lang prop
    const found = languages.find((l) => l.code === lang) ?? languages[0];
    setSelectedLanguage(found);
  }, [lang]);

  useEffect(() => {
    if (isOpen && languageRef.current) {
      const rect = languageRef.current.getBoundingClientRect();
      const spaceBelow = globalThis.window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setIsDropdownUp(spaceBelow < 200 && spaceAbove > spaceBelow);
    }
  }, [isOpen]);

  const toggleDropdown = () => setIsOpen((v) => !v);

  const selectLanguage = (lng: Language) => {
    setSelectedLanguage(lng);
    setIsOpen(false);

    const pathname = globalThis.window.location.pathname;
    const nextPathname = replaceLocaleInPath(pathname, lng.code);

    // Keep your original special-case logic
    if (nextPathname.includes("/case-studies/")) {
      globalThis.window.location.assign(`/${lng.code}`);

      return;
    }

    // Preserve query/hash
    const nextUrl =
      nextPathname + globalThis.window.location.search + globalThis.window.location.hash;
    globalThis.window.location.assign(nextUrl);
  };

  return (
    <div className="relative" ref={languageRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex items-center gap-2 pl-4 pr-6 py-2 border border-battleship-grey rounded-[5px] bg-white hover:bg-gray-100 w-full"
      >
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.code}
          width={24}
          height={16}
        />
        <span className="text-gray-700">{selectedLanguage.name}</span>

        <svg
          className="w-3 h-3 text-gunmetal absolute right-3 top-1/2 transform -translate-y-1/2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute w-40 bg-white border rounded-md shadow-md ${isDropdownUp ? "bottom-full mb-2" : "top-full mt-2"
            }`}
        >
          {languages.map((lng) => (
            <button
              type="button"
              key={lng.code}
              onClick={() => selectLanguage(lng)}
              className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
            >
              <img src={lng.flag} alt={lng.code} width={24} height={16} />
              <span className="text-gray-700">{lng.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;