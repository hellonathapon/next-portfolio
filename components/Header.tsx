import { useState, useEffect, useContext } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppContext } from "../context/AppContext";

function header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { dispatch } = useContext(AppContext);
  const router = useRouter();

  function handleTestClick() {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * A handler is generally the name given to a function that handles an event
   * - it's a callback, not the event itself.
   * The event is a parameter to the handler function,
   * but the handler function is not the event parameter.
   * @param e does not implicitly set type but function itself.
   */
  const handleLightKeyPress: React.KeyboardEventHandler<HTMLButtonElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      setTheme("light");
    } else {
      return;
    }
  };
  const handleDarkKeyPress: React.KeyboardEventHandler<HTMLButtonElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      setTheme("dark");
    } else {
      return;
    }
  };

  function renderThemeChanger() {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onKeyDown={() => setTheme("light")}
          onClick={() => setTheme("light")}
          onKeyPress={handleLightKeyPress}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2"></path>
              <path d="M12 21v2"></path>
              <path d="M4.22 4.22l1.42 1.42"></path>
              <path d="M18.36 18.36l1.42 1.42"></path>
              <path d="M1 12h2"></path>
              <path d="M21 12h2"></path>
              <path d="M4.22 19.78l1.42-1.42"></path>
              <path d="M18.36 5.64l1.42-1.42"></path>
            </g>
          </svg>
        </button>
      );
    } else {
      return (
        <button
          onKeyDown={() => setTheme("dark")}
          onClick={() => setTheme("dark")}
          onKeyPress={handleDarkKeyPress}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
              fill="currentColor"
              d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
            ></path>
          </svg>
        </button>
      );
    }
  }

  function handleChangeLang(e: React.ChangeEvent<HTMLSelectElement>) {
    const locale = e.target.value;
    /**
     * * update locale sub path without navigate back to homepage
     */
    router.push(`${locale}${router.asPath}`, `${locale}${router.asPath}`, {
      locale: false,
    });
  }

  return (
    <header className="fixed top-0 w-full flex">
      <div className="max-w-screen-md backdrop-blur-md bg-white/30 dark:bg-[#202023]/75 dark:bg-highlight w-full py-3 mx-auto flex flex-row justify-center px-5 md:px-0">
        <Link href="/">
          <div className="flex justify-center items-center cursor-pointer">
            <figure className="relative">
              <img className="w-8 h-8" src="/icon.png" alt="nathapon" />
            </figure>
            <p className="font-bold ml-1">NATHAPON</p>
          </div>
        </Link>

        <ul className="hidden h-full ml-3 gap-3 self-end md:flex md:flex-row md:justify-center md:items-center">
          <li className="hover:underline hover:cursor-pointer">
            <Link href="/work">
              <a>works</a>
            </Link>
          </li>
          <a
            href="https://github.com/hellonathapon"
            target="_blank"
            rel="noopener"
          >
            <li className="flex flex-row justify-center items:center gap-1 hover:underline hover:cursor-pointer">
              <figure className="flex justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                </svg>
              </figure>
              <p>Source</p>
            </li>
          </a>
        </ul>

        <div className="self-end ml-auto flex">
          {/* locales */}
          <select
            className="appearance-none mr-3 px-3 dark:bg-white bg-white dark:text-gray-900 text-gray-900 rounded-md"
            onChange={handleChangeLang}
          >
            <option value="en">English</option>
            <option value="th">ไทย</option>
          </select>

          {/* dark mode toggles */}
          {renderThemeChanger()}

          {/* Hamburger menu toggle */}
          <button onClick={handleTestClick} className="ml-3">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 dark:text-white text-gray-700 md:hidden"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default header;
