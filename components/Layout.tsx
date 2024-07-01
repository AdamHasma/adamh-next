import React, { ReactNode } from "react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import logo from "../assets/images/Logo.svg";
import ah from "../assets/images/ah.svg";
import about from "../assets/images/about.svg";
import EyeOpenClose from "../assets/images/eye-open-close.jsx";
import eye from "../assets/images/eye-open-close.svg";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  const projectsListRef = useRef<HTMLDivElement>(null);

  const [openEye, setOpenEye] = useState(false);

  return (
    <div className="bg-primary w-full min-h-screen flex justify-center xxs-max:p-5 p-10 pb-5">
      <div className="layout"></div>

      <div className="text-secondary  font-agrandir  grid grid-flow-row auto-rows-max max-w-[1400px] grid-cols-8 gap-5 content-between w-full">
        <Head>
          <title>{"Adam H. | " + title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header className="col-span-8 grid grid-flow-row auto-rows-max grid-cols-8 gap-5 sticky xs-max:bottom-10 xs-max:top-[unset] top-10 right-0 left-0 z-20 max-w-[1400px] w-auto mobile-nav">
          <nav className="col-span-8 grid auto-rows-max grid-cols-8 gap-5 items-center ">
            <Link href="/">
              <div className="w-fit t leading-[0] p-4 shadow-nav-glow bg-primary rounded-xl border-opacity-25 border border-secondary logo cursor-pointer before:content-none">
                <Image
                  className="block"
                  width={144}
                  layout="fixed"
                  src={logo}
                  alt="Logo"
                />
              </div>
            </Link>
            <div
              className={
                "projects-mobile justify-center items-center flex-col relative z-10 " +
                (openEye ? " flex" : " hidden")
              }
            >
              <Link href="/projects/mnmal">MNMAL</Link>
              <Link href="/projects/needanime">NEEDANI.ME</Link>
              <Link href="/projects/selvportrait">SELVPORTRAIT</Link>
            </div>
            <div className="flex bar text-lg condensed justify-between sm:col-end-[-1] sm-max:col-end-[-1] s-max:col-end-[-1] sm:col-span-3 sm-max:col-span-4 s-max:col-span-5 bg-primary border border-secondary border-opacity-25 rounded-xl px-5 pt-4 pb-3 xs-max:p-2 xs-max:justify-around shadow-primary shadow-nav-glow">
              <div
                onMouseEnter={() => {
                  // if window is bigger than 768px
                  if (window.innerWidth > 768) {
                    projectsListRef.current?.classList.remove("hidden");
                    projectsListRef.current?.classList.add("flex");
                  }
                }}
                onMouseLeave={() => {
                  // if window is bigger than 768px
                  if (window.innerWidth > 768) {
                    projectsListRef.current?.classList.remove("flex");
                    projectsListRef.current?.classList.add("hidden");
                  }
                }}
                className="relative cursor-default"
              >
                <span className="pb-8 xs-max:hidden">Projects ↓</span>
                <span className="xs-max:flex cursor-pointer hidden">
                  <Link href="https://adamh.de">
                    <Image alt="Logo" className="" src={ah}></Image>
                  </Link>
                </span>

                <div
                  ref={projectsListRef}
                  className="hidden flex-col absolute top-14 left-0 z-10 projectlist "
                >
                  <Link href="/projects/mnmal">MNMAL</Link>
                  <Link href="/projects/needanime">NEEDANI.ME</Link>
                  <Link href="/projects/selvportrait">SELVPORTRAIT</Link>
                </div>
              </div>
              {/* hidden Links that appear from top to bottom when hovered over projects. if mouse is outside of the parent div of projects, then hide them again */}
              <span className="flex xs-max:hidden">
                <Link href="/about">About Me →</Link>
              </span>
              <span
                onClick={() => setOpenEye(!openEye)}
                className={
                  "xs-max:flex cursor-pointer justify-center items-center bg-secondary svg-eye transition-colors rounded-lg duration-300 ease-in-out w-[60px] hidden " +
                  (openEye ? " bg-primary " : "")
                }
              >
                <EyeOpenClose
                  fill={openEye ? "#edf5fa" : "#191d20"}
                  width={60}
                  height={60}
                />
              </span>
              <span className="flex xs-max:hidden">
                <Link href="mailto:kontakt@adamh.de">Contact ↗</Link>
              </span>
              <span className="xs-max:flex hidden cursor-pointer">
                <Link href="/about">
                  <Image alt="About me" className="" src={about}></Image>
                </Link>
              </span>
            </div>
          </nav>
        </header>
        {children}
        <footer className="text-sm opacity-50 xs-max:mb-[-12px] flex justify-between col-span-8 max-w-[1400px]">
          <span className="xs-max:hidden">
            Design and Dev <br className="hidden xxs-max:block" /> by Me
          </span>
          <div className="flex xs-max:justify-between xs-max:w-full">
            <Link className="mr-4 xxs-max:mr-0" href="/legalNotice">
              legal notice
            </Link>
            <Link href="/privacyPolicy">privacy policy</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
