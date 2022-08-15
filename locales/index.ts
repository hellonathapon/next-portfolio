export { default as EN } from "./en";
export { default as TH } from "./th";

export interface Locale {
  creator: {
    name: string;
    title: string;
  };
  bio: {
    1996: string;
    2020: string;
    present: string;
  };
  works: {
    text: string;
  };
  skills: {
    programming: string;
    fields: string;
  };
}
