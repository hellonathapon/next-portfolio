import React from "react";
import Head from "next/head";
import { Project } from "../components";

type Project = {
  title: string;
  desc: string;
  url: string;
  imgPath: string;
  stack: Array<string>;
};

const img =
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

function work() {
  const [projects, setProjects] = React.useState<Array<Project>>([
    {
      title: "Cowdy",
      desc: "Real time Chat Web Services Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum....",
      url: "#",
      imgPath: img,
      stack: ["Typescript", "Expressjs", "socketio", "Reactjs", "Tailwindcss"],
    },
    {
      title: "Todie",
      desc: "Mobile Todo List Application Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum....",
      url: "#",
      imgPath: "https://gtechbooster.com/media/Flutter-takes-flight.jpg",
      stack: ["Flutter", "Firebase", "Mobile App"],
    },
    {
      title: "Weathering with Me API",
      desc: "Simple blazing fast API server, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum....",
      url: "#",
      imgPath:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--Qth_yXk1--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/9amcr9hg112df5ckybbh.png",
      stack: ["Go", "gin-gonic/gin", "API server"],
    },
  ]);

  return (
    <div className="max-w-screen-sm mx-auto w-full h-full">
      <Head>
        <title>Nathapon | works</title>
        <meta name="description" content="Nathapon works" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full px-5 md:px-0 mt-20">
        <h1 className="text-2xl">My Works</h1>
        <p>Select from my proudest works 3 projects</p>
        <div className="flex flex-wrap mt-10">
          {projects.map((item: Project) => (
            <Project
              title={item.title}
              desc={item.desc}
              url={item.url}
              imgPath={item.imgPath}
              stack={item.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default work;
