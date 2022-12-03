import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

import mnmalPic from "../../assets/images/mnmal.jpg";
import img1 from "../../assets/images/mnmal/1.webp";
import img2_1 from "../../assets/images/mnmal/2_1.webp";
import img2_2 from "../../assets/images/mnmal/2_2.webp";
import img2_3 from "../../assets/images/mnmal/2_3.webp";
import img3_1 from "../../assets/images/mnmal/3_1.webp";
import img3_2 from "../../assets/images/mnmal/3_2.webp";
import img3_3 from "../../assets/images/mnmal/3_3.webp";
import img3_4 from "../../assets/images/mnmal/3_4.webp";

import send from "../../assets/images/send.svg";

const projectInfo = {
  name: "mnmal",
  category: "Website",
  focus: "Brand Design | UI Design | Development",
  client: "Personal Project",
  year: "2020",
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

function Mnmal() {
  return (
    <Layout>
      <div className="col-span-8 min-h-[100vh]">
        <div className="absolute z-10 left-0 top-0 right-0 h-[520px] mt-[-2.5rem] mb-0 xs-max:h-[320px]">
          {/* image overlay from top to bottom black */}
          <div className="absolute top-0 left-0 w-full h-full z-10 gradientProject "></div>
          <Image
            src={mnmalPic}
            layout="fill"
            objectFit="cover"
            sizes="(min-height: 500px)"
            priority
          />
          <h1 className=" text-secondary relative text-center mt-[260px] big-glow-2 items-center text-2xl grand font-bold ease-out z-10 xxs-max:mt-32 xs-max:mt-28 xs-max:text-[15vw]">
            MNMAL
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
        <main className="mt-24 xs-max:mt-12 col-span-8 grid grid-flow-row auto-rows-max grid-cols-8 gap-5">
          <div className="grid grid-flow-row auto-rows-max grid-cols-6 gap-5 col-start-2 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Challenge
            </h3>
            <p className="xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              Create a bike brand that focuses entirely on minimalist fixies
              (singlespeed bikes). The bikes should look good, be well built and
              easy to maintain. Since the bikes have only one gear, the
              challenge is to convince the visitors of the website that a bike
              with one gear can also be very appealing and is enough for most
              people that live in the city.
            </p>
          </div>
          <div className="grid grid-flow-row auto-rows-max grid-cols-6 gap-5 xs-max:mt-12 col-start-2 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Goal
            </h3>
            <p className=" xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              Create a corporate design that visually represents the values of
              the fictitious company and expresses the advantages of a fixie.
              This includes the logo, web design, color scheme and shapes.
              Developing the final result in HTML and CSS
            </p>
          </div>
          <div className="my-12 col-span-full ">
            <Image
              src={img1}
              className="rounded-xl border-2 border-secondary"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="grid grid-flow-row auto-rows-max grid-cols-6 gap-5 col-start-2 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Process
            </h3>
            <p className=" xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              This was my first full personal project. Before that I had many
              small projects where something was always missing, be it the logo,
              website, development. This was the first time I had set out to do
              everything since I taught myself to program and there were nothing
              left I could’n&quot;t do. Only the 3D bike is not my work. I put
              it in Blender and rendered it in mutliple perspectives.
            </p>
          </div>
          <div className="mt-12 grid grid-flow-row auto-rows-max grid-cols-4 gap-5 col-span-full ">
            <div className=" col-span-2 xs-max:col-span-full">
              <Image
                className="rounded-xl border-2 border-secondary"
                src={img2_1}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className=" col-span-2 xs-max:col-span-full">
              <Image
                src={img2_2}
                className="rounded-xl border-2 border-secondary"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-span-full ">
            <Image
              src={img2_3}
              className="rounded-xl border-2 border-secondary"
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="mt-12 grid grid-flow-row auto-rows-max grid-cols-4 gap-5 col-span-full ">
            <div className=" col-span-2 xs-max:col-span-full">
              <Image
                className="rounded-xl border-2 border-secondary"
                src={img3_1}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className=" col-span-2 xs-max:col-span-full">
              <Image
                src={img3_2}
                className="rounded-xl border-2 border-secondary"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="grid grid-flow-row auto-rows-max grid-cols-4 gap-5 col-span-full ">
            <div className=" col-span-2 xs-max:col-span-full">
              <Image
                className="rounded-xl border-2 border-secondary"
                src={img3_3}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className=" col-span-2 xs-max:col-span-full">
              <Image
                src={img3_4}
                className="rounded-xl border-2 border-secondary"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="mt-12 grid grid-flow-row auto-rows-max grid-cols-6 gap-5 col-start-2 col-end-8 xs-max:grid-cols-8 xs-max:col-start-1 xs-max:col-end-9">
            <h3 className="col-span-2 xs-max:col-span-full uppercase text-lg condensed">
              The Conclusion
            </h3>
            <p className=" xs-max:col-span-full opacity-70 col-end-7 col-span-4 leading-6">
              As with all personal projects, I have enjoyed learning and
              developing myself. I learned how to develop a memorable brand. How
              to transfer the values and the vision of the company to the
              appearance. Last but not least, I learned a lot of programming
              while developing this website.
            </p>
            <div className="col-span-full flex justify-center mt-6">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://mnmal.superhi.com"
                className=" w-fit uppercase text-[20px] font-semibold bg-secondary
                leading-none text-primary rounded-default tracking-wider px-6
                py-3 pt-4"
              >
                {" "}
                mnmal.superhi.com
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
                <Image src={send} />
                <h3 className="font-semi-bold text-lg text-accent ml-2">
                  Send a Message
                </h3>
              </a>
            </div>
          </div>
        </main>
        <p className="uppercase mt-24 text-lg text-center">Next</p>
        <Link href="/projects/needanime">
          <h1
            className="flex flex-col text-secondary hover:text-accent justify-center relative big-glow items-center transition-all duration-300 text-2xl font-thin hover:big-glow grand hover:font-bold hover-text ease-out cursor-pointer mb-24"
            onMouseMove={(e: any) => moveText(e)}
            onMouseLeave={(e: any) => {
              resetText(e);
            }}
          >
            NEEDANIME
          </h1>
        </Link>
      </div>
    </Layout>
  );
}

export default Mnmal;
