import React, { useContext } from "react";
import Head from "next/head";
import { Project } from "../components";
import { AppContext } from "../context/AppContext";
import CowdyIMG from "../public/cowdy.png";
import CatloafIMG from "../public/catloaf.png";
import { StaticImageData } from "next/image";
import { StackColors } from "../utils/parseColor";
import useLocale from "../utils/useLocale";
import { useRouter, NextRouter } from "next/router";

type Project = {
  imgPath: StaticImageData;
  stack: StackColors[];
  urls: {
    liveURL: string | null;
    sourceURL: string;
  };
};

function work() {
  const { dispatch } = useContext(AppContext);
  const router: NextRouter = useRouter();
  const { locale } = router;
  const lang = useLocale(locale);

  const [projects, setProjects] = React.useState<Array<Project>>([
    {
      imgPath: CowdyIMG,
      stack: ["Typescript", "React", "Expressjs", "SocketIO"],
      urls: {
        liveURL: "https://glacial-savannah-45468.herokuapp.com/register",
        sourceURL: "https://github.com/hellonathapon",
      },
    },
    {
      imgPath: CatloafIMG,
      stack: ["Flutter", "Golang", "Firebase"],
      urls: {
        liveURL: null,
        sourceURL: "https://github.com/hellonathapon",
      },
    },
  ]);

  function closeAllPanels(): void {
    dispatch({ type: "CLOSE_LANG" });
    dispatch({ type: "CLOSE_SIDEBAR" });
  }

  return (
    <div
      onClick={closeAllPanels}
      className="max-w-screen-sm mx-auto w-full h-full pt-20"
    >
      <Head>
        <title>Nathapon | Works</title>
        <meta name="description" content="Nathapon works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full px-5 md:px-0">
        <h1 className="text-2xl">{lang.worksPage.header.title}</h1>
        <p>{lang.worksPage.header.desc}</p>
        <div className="flex flex-wrap mt-10">
          {projects.map((item: Project, i: number) => (
            <Project
              key={i}
              title={lang.worksPage.projects[i].title}
              desc={lang.worksPage.projects[i].desc}
              imgPath={item.imgPath}
              stack={item.stack}
              urls={item.urls}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default work;
