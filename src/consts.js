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
    icon: <ImHtmlFive opacity={"80%"} size={18}/>,
    value: "94%"
  },
  {
    name: "CSS",
    icon: <ImCss3 opacity={"80%"} size={18}/>,
    value: "80%"
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript opacity={"80%"} size={18}/>,
    value: "70%"
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript opacity={"80%"} size={18}/>,
    value: "70%"
  },
  {
    name: "React JS",
    icon: <GrReactjs opacity={"80%"} size={18}/>,
    value: "80%"
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative opacity={"80%"} size={18}/>,
    value: "70%"
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs opacity={"80%"} size={18}/>,
    value: "65%"
  },
  {
    name: "TailwindCss",
    icon: <BiLogoTailwindCss opacity={"80%"} size={18}/>,
    value: "50%"
  },
  {
    name: "Python",
    icon: <BiLogoPython opacity={"80%"} size={18}/>,
    value: "94%"
  },
  {
    name: "Flask",
    icon: <BiLogoFlask opacity={"80%"} size={18}/>,
    value: "94%"
  },
  {
    name: "Java",
    icon: <FaJava opacity={"80%"} size={18}/>,
    value: "84%"
  },
  {
    name: "Spring Boot",
    icon: <BiLogoSpringBoot opacity={"80%"} size={18}/>,
    value: "75%"
  },
  {
    name: "MySQL",
    icon: <SiMysql opacity={"80%"} size={18}/>,
    value: "70%"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql opacity={"80%"} size={18}/>,
    value: "70%"
  },
  {
    name: "MongoDb",
    icon: <BiLogoMongodb opacity={"80%"} size={18}/>,
    value: "45%"
  },
  {
    name: "PHP",
    icon: <BiLogoPhp opacity={"80%"} size={18}/>,
    value: "50%"
  },
  {
    name: "Express.js",
    icon: <SiExpress opacity={"80%"} size={18}/>,
    value: "60%"
  },
  {
    name: "SocketIo",
    icon: <SiSocketdotio opacity={"60%"} size={18}/>,
    value: "60%"
  }
]

const projectsLanguages = [
  {
    name: "HTML",
    icon: <ImHtmlFive size={21} color='#939393' />
  },
  {
    name: "CSS",
    icon: <ImCss3 size={21} color='#939393' />
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript size={21} color='#939393' />
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript size={21} color='#939393' />
  },
  {
    name: "React JS",
    icon: <GrReactjs size={21} color='#939393' />
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative size={21} color='#939393' />
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs size={21} color='#939393' />
  }, 
  {
    name: "TailwindCss",
    icon: <BiLogoTailwindCss size={21} color='#939393' />
  },
  {
    name: "Python",
    icon: <BiLogoPython size={21} color='#939393' />
  },
  {
    name: "Flask",
    icon: <BiLogoFlask size={21} color='#939393' />
  },
  {
    name: "Java",
    icon: <FaJava size={21} color='#939393' />
  },
  {
    name: "Spring Boot",
    icon: <BiLogoSpringBoot size={21} color='#939393' />
  },
  {
    name: "MySQL",
    icon: <SiMysql size={21} color='#939393' />
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={21} color='#939393' />
  },
  {
    name: "MongoDb",
    icon: <BiLogoMongodb size={21} color='#939393' />
  },
  {
    name: "PHP",
    icon: <BiLogoPhp size={21} color='#939393' />
  },
  {
    name: "Express.js",
    icon: <SiExpress size={21} color='#939393' />
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
      image: "uteka.jpg"
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
      image: "daker.jpg"
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
      image: "judjen.jpg"
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
      image: "unboring.jpg"
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
      image: "codymio.jpg"
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
      image: "deleafly.jpg"
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
      image: "cryllet.jpg"
    }
  ]
}