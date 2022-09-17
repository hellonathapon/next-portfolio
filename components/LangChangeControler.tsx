import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Image from "next/image";

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
          <Image src="/en.png" alt="UK flag" layout="fill" />
        ) : (
          <Image src="/th.png" alt="Thailand flag" layout="fill" />
        )}
      </figure>
    </div>
  );
}

export default LangChangeControler;
