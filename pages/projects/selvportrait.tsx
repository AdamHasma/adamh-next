import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import selvPic from "../../assets/images/selv/selvPic.webp";
import img1 from "../../assets/images/needanime/1.webp";
import img2 from "../../assets/images/needanime/2.webp";

import send from "../../assets/images/send.svg";

const projectInfo = {
  name: "selvportrait",
  category: "Website",
  focus: "UI Design | Development",
  client: "Ertugrul Selvi",
  year: "2021",
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

function Selvportrait() {
  return (
    <Layout>
      <div className="col-span-8 min-h-[100vh]">
        <div className="absolute z-10 left-0 top-0 right-0 md:h-[520px] mt-[-2.5rem] mb-0 xs-max:h-[320px]">
          {/* image overlay from top to bottom black */}
          <div className="absolute top-0 left-0 w-full h-full z-10 gradientProject "></div>
          <Image
            src={selvPic}
            className=" grayscale"
            layout="fill"
            objectFit="cover"
            priority
          />
          <h1 className=" text-secondary relative text-center md:mt-[260px] xxs-max:mt-40 xs-max:mt-36 big-glow-2  items-center md:text-2xl xs-max:text-[8vw] grand font-bold ease-out z-10">
            SELVPORTRAIT
          </h1>
        </div>
        <div className="w-full p-4 px-0 xs-max:grid xs-max:grid-cols-2 xs-max:grid-rows-2 xs-max:gap-y-2 flex justify-between mt-[360px] xs-max:mt-[260px]">
          <div>
            <h5 className="text-sm opacity-50 uppercase">Category</h5>
            <h4 className="">{projectInfo.category}</h4>
          </div>
          <div>
            <h5 className="text-sm opacity-50 xs-max:text-right uppercase">
              Focus
            </h5>
            <h4 className="xs-max:text-right">{projectInfo.focus}</h4>
          </div>
          <div>
            <h5 className="text-sm opacity-50 uppercase">Client</h5>
            <h4 className="">{projectInfo.client}</h4>
          </div>
          <div>
            <h5 className="text-sm opacity-50 xs-max:text-right uppercase">
              Year
            </h5>
            <h4 className="xs-max:text-right">{projectInfo.year}</h4>
          </div>
        </div>
        <main className="mt-24 xs-max:mt-12 col-span-8 grid grid-flow-row auto-rows-max grid-cols-8 gap-5">
          <div className="grid grid-flow-row auto-rows-max grid-cols-6 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9 gap-5 col-start-2 col-end-8">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Challenge
            </h3>
            <p className="xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              The challenge was to create a website which emphasizes the very
              first self shooting studio in Hanover, Lowe Saxony. The website
              should be able to explain what the studio is and how it works in
              an easy to understand way. It should also be able to convince
              people to come and try it out.
            </p>
          </div>
          <div className="grid grid-flow-row auto-rows-max grid-cols-6 gap-5 col-start-2 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9 xs-max:mt-12">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Goal
            </h3>
            <p className="xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              The goal of the company is to expand throughout Germany and to
              continue to grow in popularity. The self-shooting trend is already
              present in South-Korea. The CEO of Selvportrait believes Germany
              could also like it as much as the trend setter.
            </p>
          </div>
          <div className="my-12 col-span-full border-2 border-secondary rounded-xl">
            <video
              controls={true}
              className="rounded-xl border-2 xs-max:border border-secondary"
              autoPlay={true}
              loop={true}
              muted={true}
              src={require("../../assets/images/selv/1.mp4").default}
            />
          </div>
          <div className="grid grid-flow-row auto-rows-max grid-cols-6 gap-5 col-start-2 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Process
            </h3>
            <p className=" xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              The landing page was quite easy except the infinite slider on the
              hero section. This took a while to create smoothy with CSS and JS.
              Despite that a simple static HTML page. Different was the case
              with the gift voucher page. I had to implement a shopping feature
              with snipcart. Quite a hussle but still the best case for a very
              small webhop
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
                src={require("../../assets/images/selv/2.mp4").default}
              />
            </div>
          </div>

          <div className="mt-12 grid grid-flow-row auto-rows-max grid-cols-6 gap-5 col-start-2 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Conclusion
            </h3>
            <p className=" xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              An experience-rich commission from a customer who once again
              trained and developed me in designing and programming. I have
              worked with this customer before and he were always supportive and
              friendly. I know that I can always rely on him to help me improve
              my skills with his projects.
            </p>
            <div className="col-span-full flex justify-center mt-6">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://selvportrait.de"
                className=" w-fit uppercase text-[20px] font-semibold bg-secondary
                leading-none text-primary rounded-default tracking-wider px-6
                py-3 pt-4"
              >
                {" "}
                Selvportrait.de
              </a>
            </div>
          </div>
          <div className="col-span-8 mt-12 grid grid-flow-row auto-rows-max grid-cols-8 gap-5 ">
            <div className="flex xs-max:flex-col items-center justify-center grid-flow-col auto-rows-max grid-cols-3 col-start-2 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
              <h3 className="font-light text-lg">
                Got a similar project in mind?
              </h3>
              <a
                href="mailto:kontakt@adamh.de"
                className="flex xs-max:ml-0 xs-max:mt-2 ml-4"
              >
                <Image src={send} />
                <h3 className="font-semi-bold text-lg text-accent ml-2">
                  Send a Message
                </h3>
              </a>
            </div>
          </div>
        </main>
        <p className="uppercase mt-24 text-lg text-center">Next</p>
        <Link href="/projects/mnmal">
          <h1
            className="flex flex-col text-secondary hover:text-accent justify-center relative big-glow items-center transition-all duration-300 text-2xl font-thin hover:big-glow grand hover:font-bold hover-text ease-out cursor-pointer mb-24"
            onMouseMove={(e: any) => moveText(e)}
            onMouseLeave={(e: any) => {
              resetText(e);
            }}
          >
            MNMAL
          </h1>
        </Link>
      </div>
    </Layout>
  );
}

export default Selvportrait;
