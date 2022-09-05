import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function LangChangeControler() {
  const { dispatch, state } = useContext(AppContext);

  function HandleToggleLang() {
    dispatch({ type: "TOGGLE_LANG" });
  }

  return (
    <div onClick={HandleToggleLang} className="rounded-md p-2 cursor-pointer">
      {state.appMechanics.lang.selected}
    </div>
  );
}

export default LangChangeControler;
