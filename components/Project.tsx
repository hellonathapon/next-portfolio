import React from "react";

interface Props {
  title: string;
  desc: string;
  url: string;
  imgPath: string;
  stack: Array<string>;
}
function Project({ title, desc, url, imgPath, stack }: Props) {
  console.log("DEBUG stack", stack);
  return (
    <a href={url} className="mb-10">
      <figure className="">
        <img className="w-full" src={imgPath} alt="project image" />
      </figure>
      <article className="p-5">
        <div className="flex gap-2">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
        <p>{desc}</p>
        <div className="flex gap-2 flex-wrap mt-3">
          {stack.map((item: string) => (
            <p className="bg-sky-600 text-white p-1 rounded-md">{item}</p>
          ))}
        </div>
      </article>
    </a>
  );
}

export default Project;
