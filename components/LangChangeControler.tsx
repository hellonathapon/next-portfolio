import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Image from "next/image";

function LangChangeControler() {
  const { dispatch, state } = useContext(AppContext);

  function HandleToggleLang() {
    dispatch({ type: "TOGGLE_LANG" });
  }

  return (
    <button
      onClick={HandleToggleLang}
      className="rounded-md p-2 cursor-pointer mr-3"
      tabIndex={1}
    >
      <figure className="relative w-7 h-7 overflow-hidden border-2 rounded-full">
        {state.appMechanics.lang.selected === "en" ? (
          <Image src="/en.png" alt="UK flag" layout="fill" />
        ) : (
          <Image src="/th.png" alt="Thailand flag" layout="fill" />
        )}
      </figure>
    </button>
  );
}

export default LangChangeControler;
