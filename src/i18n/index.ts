import { en } from "./en";
import { es } from "./es";

export type Language = "en" | "es";
export type Messages = typeof en | typeof es;

export const messages: Record<Language, Messages> = { en, es };
