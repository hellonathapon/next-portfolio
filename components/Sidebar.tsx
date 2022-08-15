import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

function Sidebar() {
  const { state } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`fixed h-full w-56 bg-teal-700 ${
        state.appMechanism.sidebar ? "ml-0" : "-ml-56"
      } transition-all`}
    >
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ul>
    </div>
  );
}

export default Sidebar;
