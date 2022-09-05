import { useContext } from "react";
import type { NextPage } from "next";
import { useRouter, NextRouter } from "next/router";
import Head from "next/head";
import useLocale from "../utils/useLocale";
import { AppContext } from "../context/AppContext";

const Home: NextPage = () => {
  const { dispatch } = useContext(AppContext);
  const router: NextRouter = useRouter();
  const { locale } = router;
  const lang = useLocale(locale);

  function closeAllPanels() {
    dispatch({ type: "CLOSE_LANG" });
    dispatch({ type: "CLOSE_SIDEBAR" });
  }

  return (
    <div onClick={closeAllPanels} className="h-full">
      <Head>
        <title>Nathapon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full pb-10 px-7 md:px-0 dark:readable-white-text">
        <div className="max-w-screen-sm mx-auto w-full">
          <div>
            <figure>
              <img src="bg.jpg" alt="" />
            </figure>
          </div>
          {/* <h1 className="text-6xl text-center mt-20">Nathapon</h1>
          <pre className="text-center">{`string greeting() => hello world;`}</pre> */}

          <div className="tracking-wider mt-10">
            <div className="px-5 flex flex-col justify-between items-center md:flex-row">
              <article className="flex-1">
                <h1 className="text-3xl dark:col-title font-bold font-MPLUSRounded1c">
                  {lang.creator.name}
                </h1>
                <p className="text-lg font-MPLUSRounded1c">
                  {lang.creator.title}
                </p>
              </article>
              <figure className="w-28 h-28 rounded-full overflow-hidden">
                <img
                  className="w-full"
                  src="https://mymodernmet.com/wp/wp-content/uploads/2017/10/highland-cattle-calves-12.jpg"
                  alt=""
                />
              </figure>
            </div>

            <div className="mt-5">
              <div className="flex">
                <p className="font-bold underline text-lg mb-3">Work</p>
              </div>
              <p className="dark:readable-white-text">{lang.works.text}</p>
            </div>

            <div className="mt-5">
              <p className="font-bold underline text-lg mb-3">Bio</p>

              <div className="flex gap-3">
                <p>
                  <b>1996</b>
                </p>
                <p className="dark:readable-white-text">{lang.bio[1996]}</p>
              </div>

              <div className="flex gap-3">
                <p>
                  <b>2020</b>{" "}
                </p>
                <p className="dark:readable-white-text">{lang.bio[2020]}</p>
                {/* <a
                  className="underline dark:text-sky-500"
                  href="https://www.mcu.ac.th/"
                >
                  MCU Buddhist University
                </a>
                , Ayutthaya */}
              </div>

              <div className="flex gap-3">
                <p>
                  <b className="">2022-Present</b>
                </p>
                <p className="dark:readable-white-text">{lang.bio.present}</p>
              </div>

              {/* <p>
                I am a kind of person who found coding is fun not just a career
                to earning, Everything related to Computer Sciences, technology,
                Space i love it
              </p> */}
            </div>

            <div className="mt-7">
              <p className="font-bold underline text-lg mb-3">Skills</p>
              <p>Programming Languages: Typescript, Go, Dart, Python</p>
              <p>Fields: Web development, Mobile development, Data analysis,</p>
            </div>

            <div className="mt-5">
              <p className="font-bold underline text-lg mb-3">Contact</p>

              <div className="flex items-center mb-3">
                <figure className="w-7 h-7">
                  <img className="w-full" src="line-icon.png" alt="" />
                </figure>
                {/* <p>Line:</p> */}
                <pre className="ml-3">Line ID: hellonathapon</pre>
              </div>
              <div className="flex items-center">
                <figure className="w-7 h-7">
                  <img className="w-full" src="gmail-icon.png" alt="" />
                </figure>
                <pre className="ml-3">hellonathapon@gmail.com</pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
