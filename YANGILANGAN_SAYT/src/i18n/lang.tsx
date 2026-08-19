import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { uz, type Dict } from "./uz";
import { ru } from "./ru";
import { en } from "./en";

export type Lang = "uz" | "ru" | "en";

export const DICTS: Record<Lang, Dict> = { uz, ru, en };

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const LangContext = createContext<LangContextType>({
  lang: "uz",
  setLang: () => {},
  t: uz,
});

const STORAGE_KEY = "app_lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("uz");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && (saved === "uz" || saved === "ru" || saved === "en")) {
        setLangState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
  };

  const t = DICTS[lang] || uz;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  return useContext(LangContext).t;
}