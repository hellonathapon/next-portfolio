export { default as EN } from "./en";
export { default as TH } from "./th";

export interface Locale {
  header: {
    navLinks: {
      works: string,
      blogs: string,
      source: string
    }
  },
  homePage: {
    creator: {
      name: string;
      title: string;
    };
    bio: {
      labels: Array<string>,
      1996: string;
      2020: string;
      ktt: string;
      bss: string;
    };
    about: {
      labels: Array<string>,
      text: string;
    };
    contacts: {
      labels: Array<string>
    }
  },
  worksPage: {
    header: {
      labels: Array<string>,
      title: string,
      desc: string,
    }
    projects: [
      {
        title: string,
        desc: string,
        available: string | null
      },
      {
        title: string,
        desc: string,
        available: string | null
      }
    ]
  }
}
