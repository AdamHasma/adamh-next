import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import { useState, useRef, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper";

import needanime from "../assets/images/needanime.jpg";
import needanimeMobile from "../assets/images/needanime/needanimeMobile.webp";
import mnmal from "../assets/images/mnmal.jpg";
import mnmalPic from "../assets/images/mnmal/mnmalMobile.webp";
import selvportrait from "../assets/images/selvportrait.jpg";
import selvportraitPic from "../assets/images/selv/selvPic.webp";
import defaultPic from "../assets/images/default.png";
import swipe from "../assets/images/swipe.webp";

const projectData = [
  {
    name: "mnmal",
    category: "Website",
    focus: "Brand Design | UI Design | Development",
    client: "Personal Project",
    year: "2020",
  },
  {
    name: "needani.me",
    category: "Web App",
    focus: "UI Design | UX | Development",
    client: "Personal Project",
    year: "2022",
  },
  {
    name: "selvportrait",
    category: "Website",
    focus: "UI Design | Development",
    client: "Ertugrul Selvi",
    year: "2021",
  },
  {
    name: "default",
    category: "Human",
    focus: "Happiness | Success | Cats",
    client: "World",
    year: "1997",
  },
];

type Props = {
  title?: string;
  logo?: string;
  needanime?: string;
  projectInfo?: any[];
  bottomPic?: any;
  handleProjectInfo?: any;
};

const IndexPage = () => {
  const [bottomPic, setBottomPic] = useState(defaultPic);

  // state of the projectInfo
  const [projectInfo, setProjectInfo] = useState(projectData[3]);

  // ref on ".shadow-big-glow video"
  const swipeVideo = useRef<HTMLVideoElement | null>(null);

  // set projectInfo handler
  const handleProjectInfo = (name: string) => {
    // find index of the project
    const index = projectData.findIndex((data) => data.name === name);
    setProjectInfo(projectData[index]);
  };

  // create a simple handler that moves the element from the center with cursor
  const moveText = (e: any) => {
    // create x and y variables that are the center of the element
    const x = e.target.offsetLeft + e.target.offsetWidth / 2;
    const y = e.target.offsetTop + e.target.offsetHeight / 2;
    // animate the element with the cursor
    e.target.style.transform = `translate(${(x - e.clientX) / 30}px, ${
      (y - e.clientY) / 30
    }px)`;
  };

  // reset the text position
  const resetText = (e: any) => {
    e.target.style.transform = `translate(0px, 0px)`;
  };

  useEffect(() => {
    if (swipeVideo.current) {
      swipeVideo.current.play();
    }
  }, []);

  return (
    <Layout title="Home">
      <div className="mobile-image-container mx-[-1.25rem] sm:mx-[-2.5rem] h-[82vh] relative top-[-8vh] col-span-full hidden xs-max:flex">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-125%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["125%", 0, -500],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <Image
              className="flex leading-[0]"
              layout="fill"
              objectFit="cover"
              src={mnmalPic}
              alt="needani.me"
              priority
            />
            {/* title that is in the center with absolute */}
            <div className="absolute flex-col pointer-events-none top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              <h1 className="text-lg bg-primary shadow-primary shadow-big-glow p-6 pb-4 px-7 rounded-xl uppercase slide-text grand font-light text-white text-center">
                <span className="text-accent">Good</span> Experience <br />
                needs...
                <div className="mt-4">
                  {/*   <video
                    ref={swipeVideo}
                    className="m-auto relative right-2"
                    controls={false}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    preload="auto"
                    typeof="video/mp4"
                    src={require("../public/swipe.mp4").default}
                  />
*/}
                  <Image
                    className="m-auto relative right-2"
                    objectFit="cover"
                    src={swipe}
                    alt="swipe"
                    priority
                  />
                </div>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="flex leading-[0] filter brightness-125"
              layout="fill"
              objectFit="cover"
              src={needanimeMobile}
              alt="needani.me"
              priority
            />
            {/* title that is in the center with absolute */}
            <div className="absolute pointer-events-none top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              <h1 className="text-xl bg-primary shadow-primary shadow-big-glow p-6 pb-5 px-7 rounded-xl uppercase slide-text grand font-bold text-white text-center">
                <span className="text-accent">Good</span> Design <br />
                and...
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="flex leading-[0] filter brightness-125"
              layout="fill"
              objectFit="cover"
              src={selvportraitPic}
              alt="needani.me"
              priority
            />
            {/* title that is in the center with absolute */}
            <div className="absolute pointer-events-none top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              <h1 className="text-xl bg-primary shadow-primary shadow-big-glow p-6 pb-5 px-7 rounded-xl uppercase slide-text grand font-bold text-white text-center">
                <span className="text-accent">Good</span> Coding <br />
                <p className="text-base mt-4 normal-case font-light opacity-75 text leading-5 mx-2">
                  Click on the eye below <br /> so I can prove it to you
                </p>
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="overflow-visible xxs-max:hidden flex flex-col col-span-8 tracking-[.5em] group transition-all duration-300">
        <Link href="projects/mnmal" legacyBehavior>
          <a
            href="projects/mnmal"
            onMouseEnter={(e: any) => {
              setBottomPic(mnmal);
              handleProjectInfo("mnmal");
            }}
            onMouseMove={(e: any) => moveText(e)}
            onMouseLeave={(e: any) => {
              setBottomPic(defaultPic);
              handleProjectInfo("default");
              resetText(e);
            }}
            className="flex flex-col text-secondary hover:text-accent justify-center relative big-glow items-center group-hover:opacity-20 transition-all duration-300 text-2xl font-thin hover:big-glow grand hover:font-bold hover-text ease-out origin-center landing-title"
          >
            MNMAL
          </a>
        </Link>
        <Link href="projects/needanime" legacyBehavior>
          <a
            onMouseEnter={() => {
              setBottomPic(needanime);
              handleProjectInfo("needani.me");
            }}
            onMouseMove={(e: any) => moveText(e)}
            onMouseLeave={(e: any) => {
              resetText(e);
              setBottomPic(defaultPic);
              handleProjectInfo("default");
            }}
            href="#"
            className="flex flex-col text-secondary hover:text-accent justify-center relative big-glow items-center group-hover:opacity-20 transition-all duration-300 text-2xl font-thin hover:big-glow grand hover:font-bold hover-text ease-out landing-title"
          >
            NEEDANI.ME
          </a>
        </Link>
        <Link href="projects/selvportrait" legacyBehavior>
          <a
            onMouseEnter={() => {
              setBottomPic(selvportrait);
              handleProjectInfo("selvportrait");
            }}
            onMouseMove={(e: any) => moveText(e)}
            onMouseLeave={(e: any) => {
              setBottomPic(defaultPic);
              handleProjectInfo("default");
              resetText(e);
            }}
            href="#"
            className="flex flex-col text-secondary hover:text-accent justify-center relative big-glow items-center group-hover:opacity-20 transition-all duration-300 text-2xl font-thin hover:big-glow grand hover:font-bold hover-text ease-out landing-title"
          >
            SELVPORTRAIT
          </a>
        </Link>
      </div>
      <div className="col-span-8 xxs-max:hidden">
        <div className="w-full p-4 flex justify-between">
          <div>
            <h5 className="text-sm opacity-50 uppercase">Category</h5>
            <h4 className="">{projectInfo.category}</h4>
          </div>
          <div>
            <h5 className="text-sm opacity-50 uppercase">Focus</h5>
            <h4 className="">{projectInfo.focus}</h4>
          </div>
          <div>
            <h5 className="text-sm opacity-50 uppercase">Client</h5>
            <h4 className="">{projectInfo.client}</h4>
          </div>
          <div>
            <h5 className="text-sm opacity-50 uppercase">Year</h5>
            <h4 className="">{projectInfo.year}</h4>
          </div>
        </div>
        <div className="relative h-[380px] rounded-xl bg-secondary border-secondary border-2 landing-image">
          <Image
            className=" rounded-xl object-cover"
            src={bottomPic}
            layout="fill"
            objectFit="cover"
            priority
            alt="cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
