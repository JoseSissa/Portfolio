import { ui, routes, defaultLang } from './ui';
import type { Language, RouteKeyUi, Routes } from '../types/types';

type RouteKey<T extends Language> = keyof Routes[T];

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function translateRoute(
    key: Language,
    idiom: Language,
    route: RouteKey<Language>
) {
  const r = routes[idiom][route]; 
  
  if (key == "es") {
      const href = `/${ui[key][r as keyof typeof ui[typeof key]]}`;
      return href;
  } else {
      const href = `/${key}/${ui[key][r as keyof typeof ui[typeof key]]}`;
      return href;
  }
}

export function getRouteOfLanguage(lang: Language, route: RouteKeyUi) {
    return ui[lang][route];
}