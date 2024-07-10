import logo from './logo.svg';
import { TfiMenu } from 'react-icons/tfi'
import { TbUnlink } from 'react-icons/tb'
import { BiLogoSpringBoot, BiLogoFlask, BiLogoPython, BiLogoTailwindCss, BiLogoPhp, BiLogoMongodb, BiLogoTypescript, BiSolidEdit } from 'react-icons/bi'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTwitter } from 'react-icons/si'
import { FaJava, FaLaptopCode } from 'react-icons/fa'
import { IoLogoJavascript, IoMdClose } from 'react-icons/io'
import { TbBrandReactNative } from 'react-icons/tb'
import { SiNextdotjs, SiSocketdotio } from 'react-icons/si'
import { GrClose, GrReactjs } from 'react-icons/gr'
import { ImHtmlFive, ImCss3 } from 'react-icons/im'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub } from 'react-icons/ai'
import { data } from './config/config';


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
    name: "React Native",
    icon: <TbBrandReactNative opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "70%"
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs opacity={"80%"} size={54} color='#b0b0b0' />,
    value: "65%"
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
  },
  {
    name: "SocketIo",
    icon: <SiSocketdotio opacity={"60%"} size={54} color={"#b0b0b0"}/>,
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
    name: "React Native",
    icon: <TbBrandReactNative opacity={"80%"} size={28} color='#b0b0b0' />
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs opacity={"80%"} size={28} color='#b0b0b0' />
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

export const projects = (language) => {
  return [
    {
      name: "Uteka",
      right: false,
      icons: [
        projectsLanguages[4],
        projectsLanguages[7],
        projectsLanguages[3],
        projectsLanguages[9],
        projectsLanguages[8],
        projectsLanguages[12],
      ],
      description: data[language].projects.content[0],
      links: {
        overview: true,
        code: false,
        link_overview: "https://utekafe.pages.dev",
        link_github: ""
      },
      image: "uteka.png"
    },
    {
      name: "Daker",
      right: true,
      icons: [
        projectsLanguages[8],
        projectsLanguages[9]
      ],
      description: data[language].projects.content[1],
      links: {
        overview: true,
        code: true,
        link_overview: "https://daker-web.pages.dev",
        link_github: "https://github.com/albedim/daker"
      },
      image: "daker.png"
    },
    {
      name: "JudJen",
      right: false,
      icons: [
        projectsLanguages[4],
        projectsLanguages[7],
        projectsLanguages[3],
        projectsLanguages[9],
        projectsLanguages[8],
        projectsLanguages[12],
        projectsLanguages[14]
      ],
      description: data[language].projects.content[2],
      links: {
        overview: true,
        code: false,
        link_overview: "https://judjen.pages.dev",
        link_github: ""
      },
      image: "judjen.png"
    },
    {
      name: "UnBoring",
      right: true,
      icons: [
        projectsLanguages[4],
        projectsLanguages[7],
        projectsLanguages[3],
        projectsLanguages[9],
        projectsLanguages[8],
        projectsLanguages[12],
      ],
      description: data[language].projects.content[3],
      links: {
        overview: true,
        code: false,
        link_overview: "https://unboring.pages.dev",
        link_github: ""
      },
      image: "unboring.png"
    },
    {
      name: "Codymio",
      right: false,
      icons: [
        projectsLanguages[4],
        projectsLanguages[7],
        projectsLanguages[3],
        projectsLanguages[9],
        projectsLanguages[8],
        projectsLanguages[13],
      ],
      description: data[language].projects.content[4],
      links: {
        overview: true,
        code: false,
        link_overview: "https://codymio.pages.dev",
        link_github: ""
      },
      image: "codymio.png"
    },
    {
      name: "Deleafly",
      right: true,
      icons: [
        projectsLanguages[4],
        projectsLanguages[7],
        projectsLanguages[3],
        projectsLanguages[9],
        projectsLanguages[8],
        projectsLanguages[12],
      ],
      description: data[language].projects.content[5],
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
        projectsLanguages[8],
        projectsLanguages[12],
      ],
      description: data[language].projects.content[6],
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
        projectsLanguages[7],
        projectsLanguages[2],
        projectsLanguages[9],
        projectsLanguages[8],
        projectsLanguages[12],
      ],
      description: data[language].projects.content[7],
      links: {
        overview: true,
        code: false,
        link_overview: "https://cryllet-fe.pages.dev",
        link_github: ""
      },
      image: "cryllet.png"
    }
  ]
}