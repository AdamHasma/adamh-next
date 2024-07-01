import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import needanimePic from "../../assets/images/needanime/needanimePic.webp";
import img1 from "../../assets/images/needanime/1.webp";
import img2 from "../../assets/images/needanime/2.webp";

import send from "../../assets/images/send.svg";

const projectInfo = {
  name: "needani.me",
  category: "Web App",
  focus: "UI Design | UX | Development",
  client: "Personal Project",
  year: "2022",
};

const moveText = (e: any) => {
  // create x and y variables that are the center of the element
  const x = e.target.offsetLeft + e.target.offsetWidth / 2;
  const y = e.target.offsetTop + e.target.offsetHeight / 2;
  // animate the element with the cursor
  e.target.style.transform = `translate(${(x - e.clientX) / 30}px, ${
    (y - e.clientY) / 150
  }px)`;
};

// reset the text position
const resetText = (e: any) => {
  e.target.style.transform = `translate(0px, 0px)`;
};

function Needanime() {
  return (
    <Layout title="Needani.me">
      <div className="col-span-8 min-h-[100vh]">
        <div className="absolute z-10 left-0 top-0 right-0 h-[520px] mt-[-2.5rem] mb-0 xs-max:h-[320px]">
          {/* image overlay from top to bottom black */}
          <div className="absolute top-0 left-0 w-full h-full z-10 gradientProject "></div>
          <Image
            alt=""
            src={needanimePic}
            className=" grayscale"
            layout="fill"
            objectFit="cover"
            sizes="(min-height: 500px)"
            priority
          />
          <h1 className=" text-secondary relative text-center mt-[260px] big-glow-2  items-center text-2xl grand font-bold ease-out z-10 xxs-max:mt-40 xs-max:mt-32 xs-max:text-[10vw]">
            NEEDANI.ME
          </h1>
        </div>
        <div className="w-full p-4 px-0 flex justify-between mt-[360px] xs-max:gap-y-2 xs-max:grid-cols-2 xs-max:grid-rows-2 xs-max:grid xs-max:mt-[260px]">
          <div>
            <h5 className="text-sm opacity-50 uppercase">Category</h5>
            <h4 className="">{projectInfo.category}</h4>
          </div>
          <div>
            <h5 className="text-sm opacity-50 uppercase xs-max:text-right">
              Focus
            </h5>
            <h4 className=" xs-max:text-right">{projectInfo.focus}</h4>
          </div>
          <div>
            <h5 className="text-sm opacity-50 uppercase">Client</h5>
            <h4 className="">{projectInfo.client}</h4>
          </div>
          <div>
            <h5 className="text-sm opacity-50 uppercase xs-max:text-right">
              Year
            </h5>
            <h4 className=" xs-max:text-right">{projectInfo.year}</h4>
          </div>
        </div>
        <main className="mt-24 col-span-8 grid grid-flow-row auto-rows-max grid-cols-8 gap-5 xs-max:mt-12">
          <div className="grid grid-flow-row auto-rows-max grid-cols-6 gap-5 col-start-2 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
            <h3 className="col-span-2 uppercase text-lg condensed xs-max:col-span-full">
              The Challenge
            </h3>
            <p className=" xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              Finding the right anime can be hard, especially if there are
              thousands of them. There are sites like MyAnimeList (MAL) where
              you can search for them by certain filters but it’s not user
              friendly at all. The challenge here is to use an API for getting
              the data from MAL and build a user friendly interface with a new
              programming language (Svelte).
            </p>
          </div>
          <div className="grid grid-flow-row auto-rows-max grid-cols-6 gap-5 col-start-2 xs-max:mt-12 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Goal
            </h3>
            <p className=" xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              The goal was to create a well known website with a user friendly
              interface that makes the life of anime watchers easier by letting
              them search anime with setted filters and only getting the results
              they are looking for.
            </p>
          </div>
          <div className="my-12 col-span-full border-2 border-secondary rounded-xl">
            <Image
              alt=""
              src={img1}
              height={700}
              className="rounded-xl border-2 border-secondary"
              layout="responsive"
              objectFit="cover"
              priority
            />
          </div>
          <div className="grid grid-flow-row auto-rows-max grid-cols-6 gap-5 col-start-2 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Process
            </h3>
            <p className=" xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              Since this was my first time trying the new language “Svelte” I
              had thought it could be a bit difficult to use it. But suprisingly
              enough, it was really easy to use since it’s very simple
              stuctured. The only difficult part was to focus on the UX. I had
              multiple designs and approaches to solve certain issues. I’ve
              tested them and realized they were not so good as expected so I
              reconstructed them many times. I had my friends as testers and
              they helped me on this project with their reviews
            </p>
          </div>
          <div className="mt-12 grid grid-flow-row auto-rows-max grid-cols-4 gap-5 col-span-full ">
            <div className="  col-span-4">
              <video
                controls={true}
                className="rounded-xl border-2 border-secondary"
                autoPlay={true}
                loop={true}
                muted={true}
                src={require("../../public/3.mp4").default}
              />
            </div>
          </div>
          <div className="col-span-full rounded-xl border-2 border-secondary">
            <Image
              alt=""
              src={img2}
              className="rounded-xl border-2 border-secondary"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="mt-12 grid grid-flow-row auto-rows-max grid-cols-6 gap-5 col-start-2 col-end-8 xs-max:mt-12 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Conclusion
            </h3>
            <p className=" xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              This was probably my most UX based project I’ve had. It really was
              entertaining. But since my resources and time is very limited on
              personal projects I was a bit disappointed at the end. There
              could’ve been so much more to this project like extra functions as
              Watchlist, personal account with rating system, or direct search
              feature and so on. UX could also be improved, as UX is not a
              one-time thing. It’s a continues work over months, years.
            </p>
            <div className="col-span-full flex justify-center mt-6">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://needani.me"
                className=" w-fit uppercase text-[20px] font-semibold bg-secondary
                leading-none text-primary rounded-default tracking-wider px-6
                py-3 pt-4"
              >
                {" "}
                needani.me
              </a>
            </div>
          </div>
          <div className="col-span-8 mt-12 grid grid-flow-row auto-rows-max grid-cols-8 gap-5">
            <div className="flex items-center justify-center grid-flow-col auto-rows-max grid-cols-3 col-start-2 col-end-8 xs-max:flex-col xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
              <h3 className="font-light text-lg">
                Got a similar project in mind?
              </h3>
              <a
                href="mailto:kontakt@adamh.de"
                className="flex xs-max:ml-0 xs-max:mt-2 ml-4"
              >
                <Image alt="send" src={send} />
                <h3 className="font-semi-bold text-lg text-accent ml-2">
                  Send a Message
                </h3>
              </a>
            </div>
          </div>
        </main>
        <p className="uppercase mt-24 text-lg text-center">Next</p>
        <Link href="/projects/selvportrait">
          <h1
            className="flex flex-col text-secondary hover:text-accent justify-center relative big-glow items-center transition-all duration-300 text-2xl font-thin hover:big-glow grand hover:font-bold hover-text ease-out cursor-pointer mb-24"
            onMouseMove={(e: any) => moveText(e)}
            onMouseLeave={(e: any) => {
              resetText(e);
            }}
          >
            SELVPORTRAIT
          </h1>
        </Link>
      </div>
    </Layout>
  );
}

export default Needanime;
