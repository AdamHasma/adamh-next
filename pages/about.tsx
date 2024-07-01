import Link from "next/link";
import Layout from "../components/Layout";
import SocialsAbout from "../components/SocialsAbout";
import CvItem from "../components/CvItem";
import Image from "next/image";

import { useState, useRef, useEffect } from "react";

import portrait from "../assets/images/portrait.webp";
import Cv from "../assets/images/cv.jsx";
import Linkedin from "../assets/images/in.jsx";
import Insta from "../assets/images/insta.jsx";
import Mail from "../assets/images/mail.jsx";
import download from "../assets/images/download.svg";
import german from "../assets/images/german.png";
import english from "../assets/images/english.png";

import Be from "../assets/images/be.jsx";

import experience from "../assets/images/experiencedesign.svg";
import webdev from "../assets/images/webdev.svg";
import { on } from "events";

const socials = [
  { icon: Insta, link: "https://www.instagram.com/adamh_webdesign/" },
  { icon: Be, link: "https://www.behance.net/adamhasma/" },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/adam-hasmagomadov-785752191/",
  },
  { icon: Mail, link: "mailto:kontakt@adamh.de" },
  {
    icon: Cv,
    link: "https://drive.google.com/file/d/1wTSq8ACQmEAE3C-L26YkyJKnRBLHpoaH/view?usp=sharing",
  },
];

const webdevInfo = [
  ["HTML", "CSS", "JavaScript", "TypeScript", "Webflow"],
  ["React", "Svelte", "Next.js"],
  ["CMS", "API Integration", "REST API", "GraphQL", "GitHub"],
];

// CV data with key value pairs of company, position, date
const cvData = [
  {
    company: "Montary Agency",
    position: "Graphic Designer & Frontend Developer",
    date: "2021 - Present",
  },
  {
    company: "Freelance",
    position: "Experience Designer & Frontend Developer",
    date: "2019 - Present",
  },
  {
    company: "HAWK Hildesheim",
    position: "Bachelor Design (discontinued)",
    date: "2020 - 2020",
  },
  {
    company: "bib international college",
    position: "apprenticeship as a media designer",
    date: "2016 - 2019",
  },
];

function About() {
  const [language, setLanguage] = useState<boolean>(true);

  // handle change of the input field, increase the width of the input field based on the value with "ch" unit
  const handleChange = (e: any) => {
    const input = e.target;
    input.style.width = input.value.length + "ch";
  };

  const nameInputRef = useRef<HTMLInputElement>(null);

  const subjectInputRef = useRef<HTMLTextAreaElement>(null);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (
        event.key === "Tab" &&
        nameInputRef.current !== document.activeElement &&
        subjectInputRef.current !== document.activeElement &&
        emailInputRef.current !== document.activeElement
      ) {
        event.preventDefault();
        nameInputRef.current?.focus();
      }
    });
    setWindowWidth(window.innerWidth);
  });

  return (
    <Layout title="About">
      <div className="col-span-8 min-h-[90vh] grid grid-flow-row auto-rows-max grid-cols-8 gap-5 xs-max:mt-8 x my-24">
        <div className="sm-max:col-span-4 sm:col-span-3 sm-max:col-start-1 sm:col-start-2 s-max:col-span-full">
          <h2 className="text-xl font-bold grand">Peace be upon you</h2>
          <p>
            My name is Adam Hasmagomadov and I currently live in Hanover,
            Germany. I&apos;m 25 years old, and I&apos;m designing since 6 years
            and coding since 3 years now. In the bib college Hannover I have
            completed my apprenticeship as a media designer specialized in print
            and web. Besides Design and Coding, I also like cats, even when they
            always sit on my keyboard.
          </p>
          <h3 className="text-lg font-medium mt-6 semi-condensed uppercase">
            <span className="mr-2">
              <Image alt="Experience" src={experience} width="24" height="24" />
            </span>
            Experience Design
          </h3>
          <p>
            User Experiecne Design is one of the two main focuses of my work. In
            my opinion, UX is the most important part of a product. It
            doesn&apos;t matter how pretty the design is, if the user
            doesn&apos;t understand how to use it. I always try to make my
            designs as intuitive as possible.
          </p>
          <h3 className="text-lg font-medium mt-6 semi-condensed uppercase">
            <span className="mr-2">
              <Image alt="Experience" src={webdev} width="24" height="24" />
            </span>
            Web Development
          </h3>
          <p>
            It started by telling myself &quot;I need to know the basics of web
            development&quot;. I never wanted to be a web developer. I hated it.
            But I realized that the code influences the user experience by a
            lot. That&apos;s why I&apos;m doing both, design and coding.
            <span className=" italic block mt-2">
              To create the best possible user experience.
            </span>
          </p>
          {/* map through webdevInfo as tags with border and padding */}
          <div className="flex flex-col gap-4 mt-3">
            {webdevInfo.map((item, i) => {
              return (
                <div key={i} className="flex flex-wrap gap-2">
                  {item.map((tag, i) => {
                    return (
                      <span
                        key={i}
                        className="border border-[#555] tracking-wider p-2 opacity-50 leading-none text-sm pb-1 uppercase"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="sm:col-span-3 sm-max:col-span-4 col-start-5 grid grid-flow-col auto-rows-max grid-cols-3 gap-5 xxs-max:col-start-1 s-max:col-span-6 xxs-max:grid-cols-5 xxs-max:col-span-full s-max:mt-24">
          <div className="col-span-2 xxs-max:col-span-4 leading-[0px] overflow-auto rounded-xl col-start-2 border-2 border-secondary">
            <Image src={portrait} alt="Picture of the author" />
          </div>
          <div className="flex-col col-span-1 col-start-1 items-end flex justify-center">
            {/* map through socials, use component SocialsAbout*/}
            {socials.map((social, i) => (
              <SocialsAbout key={i} icon={social.icon} link={social.link} />
            ))}
          </div>
        </div>
        <div className="col-span-8 mt-24 s-max:mt-4 grid grid-flow-row auto-rows-max grid-cols-8 gap-5">
          <div className="grid grid-flow-col auto-rows-max grid-cols-3 col-span-full">
            <div className="col-span-8">
              <h2 className="text-xl mb-4 font-semibold grand">Experience</h2>
              {/* map through cvData, use component CvItem */}
              {cvData.map((item, i) => (
                <CvItem
                  key={i}
                  company={item.company}
                  position={item.position}
                  date={item.date}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-8 mt-4 grid grid-flow-row auto-rows-max grid-cols-8 gap-5">
          <div className="flex flex-col items-center justify-center grid-flow-col auto-rows-max xs-max:col-start-1 xs-max:col-end-9 grid-cols-3 col-start-2 col-end-8">
            <h3 className="font-light text-lg">Not enough information?</h3>
            <a
              href="https://drive.google.com/file/d/1wTSq8ACQmEAE3C-L26YkyJKnRBLHpoaH/view?usp=sharing"
              className="flex xxs-max:ml-0 ml-4"
            >
              <Image alt="download cv" src={download} />
              <h3 className="font-semi-bold  xxs-max:mt-2 text-lg ml-2">
                download full CV
              </h3>
            </a>
          </div>
        </div>
        <div className="col-span-8 mt-24 grid grid-flow-row auto-rows-max grid-cols-8 gap-5">
          <div className="grid grid-flow-col auto-rows-max grid-cols-3 sm-max:col-start-1 col-start-2 col-span-full">
            <div className="flex col-span-full items-center">
              <h2 className="text-xl grand font-semibold">Contact me</h2>
              <div className="flex ml-4 bg-[#233039] rounded-default items-center px-4 p-4 relative">
                <div
                  className={
                    "rounded-sm transition-all duration-300 bg-secondary absolute left-2 w-12 h-[36px] " +
                    (language ? "" : " left-[55px]")
                  }
                ></div>
                <div
                  onClick={() => setLanguage(true)}
                  className="cursor-pointer h-fit leading-[0]"
                >
                  <Image
                    alt="english"
                    layout="fixed"
                    width={32}
                    height={18}
                    src={english}
                  />
                </div>
                <div
                  onClick={() => setLanguage(false)}
                  className="cursor-pointer h-fit leading-[0] ml-4"
                >
                  <Image
                    alt="deutsch"
                    src={german}
                    layout="fixed"
                    width={32}
                    height={18}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* form with input fields as bottom lines implemented in text */}
        <div className="col-span-8 mt-4 grid grid-flow-row auto-rows-max grid-cols-8 gap-5">
          <div className="grid col-end-8 col-start-2 sm-max:col-end-9 sm-max:col-start-1 grid-flow-col auto-rows-max grid-cols-6 col-span-full">
            <div className="col-span-8">
              <form
                action="https://formspree.io/f/mbjbvnwj"
                method="POST"
                className="flex flex-col gap-4"
              >
                <div className="flex xxs-max:flex-col gap-2">
                  <label className="text-lg">
                    {language ? "Hi, Adam. My name is" : "Hi Adam, ich bin"}
                  </label>
                  {/* input field that grows while typing */}
                  <input
                    name="Name"
                    ref={nameInputRef}
                    onChange={(e) => {
                      handleChange(e);
                      // if lenth of input is higher than 0, add class "border-b-0" to input
                      if (e.target.value.length > 0) {
                        e.target.classList.add("border-b-0");
                        e.target.classList.remove("border-b");
                      }
                      // if length of input is 0, remove class "border-b-0" from input
                      if (e.target.value.length === 0) {
                        e.target.classList.remove("border-b-0");
                        e.target.classList.add("border-b");
                      }
                    }}
                    className={
                      "text-accent border-b border-secondary focus:outline-none bg-transparent text-lg min-w-[320px] xxs-max:min-w-[200px] placeholder:text-base"
                    }
                    type="text"
                    // expand the conditional placeholder statement above by adding an extra condition
                    // if max-width is 768px make it "Your name" and "Dein Name"
                    placeholder={
                      language && windowWidth > 768
                        ? "Press TAB to focus"
                        : windowWidth > 768
                        ? "Drücke TAB"
                        : language
                        ? "John Doe"
                        : "Max Mustermann"
                    }
                  />
                </div>
                <div className="flex xxs-max:mt-4 flex-col">
                  <label className="text-lg">
                    {language
                      ? "I want to talk to you about"
                      : "Über folgendes Thema wollte ich mit dir reden:"}
                  </label>
                  {/* input field that grows while typing */}
                  <textarea
                    name="Nachricht"
                    onChange={(e) => {
                      // if lenth of input is higher than 0, add class "border-b-0" to input
                      if (e.target.value.length > 0) {
                        e.target.classList.add("border-b-0");
                        e.target.classList.remove("border-b");
                      }
                      // if length of input is 0, remove class "border-b-0" from input
                      if (e.target.value.length === 0) {
                        e.target.classList.remove("border-b-0");
                        e.target.classList.add("border-b");
                      }
                    }}
                    ref={subjectInputRef}
                    className={
                      "text-accent border-b border-secondary focus:outline-none bg-transparent text-lg w-full placeholder:text-base h-[42px]"
                    }
                    placeholder={language ? "Subject" : "Betreff"}
                  />
                </div>
                <div className="flex xxs-max:flex-col xxs-max:mt-4">
                  <label className="text-lg">
                    {language
                      ? "You can contact me at:"
                      : "Über diese Email bin ich zu erreichen:"}
                  </label>
                  {/* input field that grows while typing */}
                  <input
                    name="Email"
                    onChange={(e) => {
                      handleChange(e);
                      // if lenth of input is higher than 0, add class "border-b-0" to input
                      if (e.target.value.length > 0) {
                        e.target.classList.add("border-b-0");
                        e.target.classList.remove("border-b");
                      }
                      // if length of input is 0, remove class "border-b-0" from input
                      if (e.target.value.length === 0) {
                        e.target.classList.remove("border-b-0");
                        e.target.classList.add("border-b");
                      }
                    }}
                    ref={emailInputRef}
                    type="email"
                    className={
                      "text-accent border-b xxs-max:ml-0 ml-2 border-secondary focus:outline-none bg-transparent text-lg min-w-[320px] xxs-max:min-w-[200px] placeholder:text-base"
                    }
                    placeholder={language ? "Email" : "Email Adresse"}
                  />
                </div>
                {/* submit rounded button with background accent color and uppercase text. to the right there is a helper text that says to submit the form with the enter button */}

                <div className="flex sm:items-baseline mt-2 xxs-max:mt-4 xxs-max:flex-col">
                  <button className="uppercase text-[20px] font-semibold bg-accent leading-none text-primary rounded-default tracking-wider px-6 py-3 pt-4">
                    {language ? "Send Message" : "Nachricht Senden"}
                  </button>
                  <p className="ml-4 xxs-max:ml-0 xs-max:hidden font-light text-secondary opacity-70">
                    {language
                      ? "Press ENTER to submit"
                      : "ENTER drücken zum Absenden"}
                  </p>
                </div>
                <i className="opacity-50 mt-2">
                  {" "}
                  By submitting the contact form, you agree that your data will
                  be used to process your request. (for further information and
                  revocation you will find in the{" "}
                  <Link
                    className="underline cursor-pointer"
                    href="/privacyPolicy"
                  >
                    privacy policy
                  </Link>
                  ).
                </i>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
