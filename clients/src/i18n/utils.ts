/* eslint-disable @typescript-eslint/no-explicit-any */
import { defaultLang, routes, showDefaultLang, ui } from './ui';

type Primitive = string | number | boolean | null | undefined;

type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;

type NestedKeys<T> = T extends Primitive
  ? ""
  : {
    [K in Extract<keyof T, string>]: T[K] extends Primitive
    ? K
    : `${K}${DotPrefix<NestedKeys<T[K]>>}`;
  }[Extract<keyof T, string>];

// Example: keys for one language object
type UI = typeof ui[typeof defaultLang];
export type TranslationKey = NestedKeys<UI>;

// --- Runtime: safely read nested value by dot path ---
function deepGet(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}


export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;

  return defaultLang;
}

export function useTranslations(lang: 'en' | 'vi-VN') {
  return function t(key: TranslationKey): string {
    const value = deepGet(ui[lang], key);
    if (typeof value !== "string") {
      // Fallback: show key to make missing translations obvious
      return key;
    }

    return value;
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: keyof typeof routes = lang) {
    const pathName = path.replaceAll('/', '') as keyof typeof routes[typeof defaultLang];
    const hasTranslation = defaultLang !== l && routes[l]?.[pathName] !== undefined
    const translatedPath = hasTranslation ? '/' + routes[l][pathName] : path

    return !showDefaultLang && l === defaultLang ? translatedPath : `/${l}${translatedPath}`
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = (parts.pop() || parts.at(-1)) as keyof typeof routes[typeof defaultLang];

  if (path === undefined) {
    return undefined;
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0];

    return route[path] ?? undefined;
  }

  const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value);
  }

  const reversedKey = getKeyByValue(routes[currentLang], path);

  if (reversedKey !== undefined) {
    return reversedKey;
  }

  return undefined;
}