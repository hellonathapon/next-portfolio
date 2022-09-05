import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function LangChangeControler() {
  const { dispatch, state } = useContext(AppContext);

  function HandleToggleLang() {
    dispatch({ type: "TOGGLE_LANG" });
  }

  return (
    <div
      onClick={HandleToggleLang}
      className="rounded-md p-2 cursor-pointer mr-3"
    >
      <figure className="relative w-7 h-7 overflow-hidden border-2 rounded-full">
        {state.appMechanics.lang.selected === "en" ? (
          <img className="w-full" src="en.png" alt="UK flag icon" />
        ) : (
          <img className="w-full" src="th.png" alt="Thailand flag icon" />
        )}
      </figure>
    </div>
  );
}

export default LangChangeControler;
