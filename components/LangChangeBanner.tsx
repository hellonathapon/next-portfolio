import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/router";

function LangChangeBanner() {
  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();

  function handleChangeLang(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as Element;
    const value = target.getAttribute("data-value");
    //* change language in App context
    dispatch({ type: "CHANGE_LANG", payload: value });
    //* handle router path for language changed
    router.push(`${value}${router.asPath}`, `${value}${router.asPath}`, {
      locale: false,
    });
    //* close the panel
    dispatch({ type: "CLOSE_LANG" });
  }

  return (
    <div className="lang-banner-position flex justify-end">
      <div
        className={`top-20 ${
          state.appMechanics.lang.isOpen ? "flex" : "hidden"
        } bg-white dark:bg-[#202023] w-28 rounded-md border border-1`}
      >
        <div className="h-full w-full">
          <button
            data-value="en"
            onClick={handleChangeLang}
            className="p-2 w-full pointer-events-auto cursor-pointer hover:bg-slate-200 hover:dark:bg-[#37373a]"
            tabIndex={1}
          >
            English
          </button>
          <button
            data-value="th"
            onClick={handleChangeLang}
            className="p-2 w-full pointer-events-auto cursor-pointer hover:bg-slate-200 hover:dark:bg-[#37373a]"
            tabIndex={1}
          >
            Thai
          </button>
        </div>
      </div>
    </div>
  );
}

export default LangChangeBanner;
