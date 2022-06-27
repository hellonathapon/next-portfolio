import React from "react";

function header() {
  return (
    <header className="bg-teal-500 fixed w-full flex">
      <div className="max-w-screen-md w-full mx-auto flex flex-row">
        <div className="">Nathapon</div>

        <ul className="flex flex-row ml-3 gap-3 self-end">
          <li>Work</li>
          <li>Source</li>
        </ul>

        <div className="self-end ml-auto">
          <h1>ICONS</h1>
        </div>
      </div>
    </header>
  );
}

export default header;
