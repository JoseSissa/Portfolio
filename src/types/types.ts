import { ui, routes } from "../i18n/ui";

export type Language = keyof typeof ui;
export type RouteKey<T extends Language> = keyof typeof ui[T];
export type RouteKeyUi = keyof (typeof ui)["es"];
export type LanguageKeyRoutes = keyof typeof ui;
export type Routes = typeof routes;
