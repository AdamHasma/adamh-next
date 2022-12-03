import Link from "next/link";
import React, { useState } from "react";

function SocialsAbout({ icon, link }: { icon: React.FC; link: string }) {
  // make variable "icon" a React component
  const Icon = icon;

  // hover state
  const [hover, setHover] = useState(false);

  return (
    <a
      href={link}
      className={
        "p-4 about-icons border border-[#555] w-fit cursor-pointer rounded-lg xxs-max:mr-auto mt-4 first:mt-0 " +
        (hover ? " hover:bg-accent big-glow-icon" : "bg-primary")
      }
      // on hover, change the state
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <span>
        {
          // @ts-ignore
          <Icon fill={hover ? "#191d20" : "#6dfc3f"} />
        }
      </span>
      <style>
        {`
          .about-icons, .about-icons svg {
            transition: all 0.2s ease-in-out;
          }
        `}
      </style>
    </a>
  );
}

export default SocialsAbout;
