import logo from './logo.svg';
import { TfiMenu } from 'react-icons/tfi'
import { TbUnlink } from 'react-icons/tb'
import { BiLogoSpringBoot, BiLogoFlask, BiLogoPython, BiLogoTailwindCss, BiLogoPhp, BiLogoMongodb, BiLogoTypescript, BiSolidEdit } from 'react-icons/bi'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTwitter } from 'react-icons/si'
import { FaJava, FaLaptopCode } from 'react-icons/fa'
import { IoLogoJavascript, IoMdClose } from 'react-icons/io'
import { GrClose, GrReactjs } from 'react-icons/gr'
import { ImHtmlFive, ImCss3 } from 'react-icons/im'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub } from 'react-icons/ai'


export const skills = [
  {
    name: "HTML",
    icon: <ImHtmlFive opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "94%"
  },
  {
    name: "CSS",
    icon: <ImCss3 opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "80%"
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "70%"
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "70%"
  },
  {
    name: "React JS",
    icon: <GrReactjs opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "80%"
  },
  {
    name: "TailwindCss",
    icon: <BiLogoTailwindCss opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "50%"
  },
  {
    name: "Python",
    icon: <BiLogoPython opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "94%"
  },
  {
    name: "Flask",
    icon: <BiLogoFlask opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "94%"
  },
  {
    name: "Java",
    icon: <FaJava opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "84%"
  },
  {
    name: "Spring Boot",
    icon: <BiLogoSpringBoot opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "75%"
  },
  {
    name: "MySQL",
    icon: <SiMysql opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "70%"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "70%"
  },
  {
    name: "MongoDb",
    icon: <BiLogoMongodb opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "45%"
  },
  {
    name: "PHP",
    icon: <BiLogoPhp opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "50%"
  },
  {
    name: "Express.js",
    icon: <SiExpress opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "60%"
  }
]

const projectsLanguages = [
  {
    name: "HTML",
    icon: <ImHtmlFive opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "CSS",
    icon: <ImCss3 opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "React JS",
    icon: <GrReactjs opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "TailwindCss",
    icon: <BiLogoTailwindCss opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "Python",
    icon: <BiLogoPython opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "Flask",
    icon: <BiLogoFlask opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "Java",
    icon: <FaJava opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "Spring Boot",
    icon: <BiLogoSpringBoot opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "MySQL",
    icon: <SiMysql opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "MongoDb",
    icon: <BiLogoMongodb opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "PHP",
    icon: <BiLogoPhp opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "Express.js",
    icon: <SiExpress opacity={"80%"} size={28} color='#b0b0b0' />
  }
]

export const projects = [
  {
    name: "Contrycode",
    right: false,
    icons: [
      projectsLanguages[4],
      projectsLanguages[5],
      projectsLanguages[3],
      projectsLanguages[7],
      projectsLanguages[6],
      projectsLanguages[11],
    ],
    description: "Contrycode is helping 5000+ developers find the right open source projects to contribute to",
    links: {
      overview: true,
      code: false,
      link_overview: "https://contrycode.pages.dev",
      link_github: ""
    },
    image: "contrycode.png"
  },
  {
    name: "Deleafly",
    right: true,
    icons: [
      projectsLanguages[4],
      projectsLanguages[5],
      projectsLanguages[3],
      projectsLanguages[7],
      projectsLanguages[6],
      projectsLanguages[10],
    ],
    description: "The first Web tracker that let you track the traffic on your urls easy and fast with a clean dashboard.",
    links: {
      overview: true,
      code: false,
      link_overview: "https://deleafly.pages.dev",
      link_github: ""
    },
    image: "deleafly.png"
  },
  {
    name: "Skilly",
    right: false,
    icons: [
      projectsLanguages[6],
      projectsLanguages[11],
    ],
    description: "Python web framework. Build organized and fast rest api's with Skilly.",
    links: {
      overview: false,
      code: true,
      link_overview: "",
      link_github: "https://github.com/albedim/skilly"
    },
    image: "skilly.png"
  },
  {
    name: "Cryllet",
    right: true,
    icons: [
      projectsLanguages[4],
      projectsLanguages[5],
      projectsLanguages[2],
      projectsLanguages[7],
      projectsLanguages[6],
      projectsLanguages[10],
    ],
    description: "Create your payment links with Cryllet. Pay and get paid by others using cryptocurrencies",
    links: {
      overview: true,
      code: false,
      link_overview: "https://cryllet-fe.pages.dev",
      link_github: ""
    },
    image: "cryllet.png"
  }
]