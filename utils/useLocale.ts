import { EN, TH, Locale } from "../locales";

const useLocale = (locale: string | undefined): Locale => {
  let lang: Locale;
  switch (locale) {
    case "th":
      lang = TH;
      break;
    default:
      lang = EN;
  }
  return lang;
};

export default useLocale;
