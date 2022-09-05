import React, { useContext } from "react";
import Head from "next/head";
import { Project } from "../components";
import { AppContext } from "../context/AppContext";
import CowdyIMG from "../public/cowdy.png";
import CatloafIMG from "../public/catloaf.png";
import { StaticImageData } from "next/image";
import { StackColors } from "../utils/parseColor";

type Project = {
  title: string;
  desc: string;
  imgPath: StaticImageData;
  stack: StackColors[];
  urls: {
    liveURL: string | null;
    sourceURL: string;
  };
};

function work() {
  const { dispatch } = useContext(AppContext);

  const [projects, setProjects] = React.useState<Array<Project>>([
    {
      title: "Cowdy",
      desc: "Real time Chat Web Services Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      imgPath: CowdyIMG,
      stack: ["Typescript", "React", "Expressjs", "SocketIO"],
      urls: {
        liveURL: "https://glacial-savannah-45468.herokuapp.com/register",
        sourceURL: "https://github.com/hellonathapon",
      },
    },
    {
      title: "Catloaf",
      desc: "Mobile Todo List Application to manage your daily life tasks",
      imgPath: CatloafIMG,
      stack: ["Flutter", "Golang", "Firebase"],
      urls: {
        liveURL: null,
        sourceURL: "https://github.com/hellonathapon",
      },
    },
    {
      title: "Weathering with Me API",
      desc: "Simple weather API built with Golang to daily serving based on your selected location",
      imgPath: CowdyIMG,
      stack: ["Golang"],
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
        <title>Nathapon | works</title>
        <meta name="description" content="Nathapon works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full px-5 md:px-0">
        <h1 className="text-2xl">My Works</h1>
        <p>Select from my proudest works 3 projects</p>
        <div className="flex flex-wrap mt-10">
          {projects.map((item: Project, i: number) => (
            <Project
              key={i}
              title={item.title}
              desc={item.desc}
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
