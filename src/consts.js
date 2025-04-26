import logo from './logo.svg';
import { TfiMenu } from 'react-icons/tfi'
import { TbUnlink } from 'react-icons/tb'
import { BiLogoSpringBoot, BiLogoFlask, BiLogoPython, BiLogoTailwindCss, BiLogoPhp, BiLogoMongodb, BiLogoTypescript, BiSolidEdit, BiSolidSchool } from 'react-icons/bi'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTwitter } from 'react-icons/si'
import { FaJava, FaLaptopCode, FaSchool } from 'react-icons/fa'
import { IoLogoJavascript, IoMdClose, IoMdSchool } from 'react-icons/io'
import { TbBrandReactNative } from 'react-icons/tb'
import { SiNextdotjs, SiSocketdotio } from 'react-icons/si'
import { GrClose, GrReactjs } from 'react-icons/gr'
import { ImHtmlFive, ImCss3 } from 'react-icons/im'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


export const skills = [
  {
    name: "HTML",
    icon: <ImHtmlFive/>,
    value: "94%"
  },
  {
    name: "CSS",
    icon: <ImCss3/>,
    value: "80%"
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript/>,
    value: "70%"
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript/>,
    value: "70%"
  },
  {
    name: "React JS",
    icon: <GrReactjs/>,
    value: "80%"
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative/>,
    value: "70%"
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs/>,
    value: "65%"
  },
  {
    name: "TailwindCss",
    icon: <BiLogoTailwindCss/>,
    value: "50%"
  },
  {
    name: "Python",
    icon: <BiLogoPython/>,
    value: "94%"
  },
  {
    name: "Flask",
    icon: <BiLogoFlask/>,
    value: "94%"
  },
  {
    name: "Java",
    icon: <FaJava/>,
    value: "84%"
  },
  {
    name: "Spring Boot",
    icon: <BiLogoSpringBoot/>,
    value: "75%"
  },
  {
    name: "MySQL",
    icon: <SiMysql/>,
    value: "70%"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql/>,
    value: "70%"
  },
  {
    name: "MongoDb",
    icon: <BiLogoMongodb/>,
    value: "45%"
  },
  {
    name: "PHP",
    icon: <BiLogoPhp/>,
    value: "50%"
  },
  {
    name: "Express.js",
    icon: <SiExpress/>,
    value: "60%"
  },
  {
    name: "SocketIo",
    icon: <SiSocketdotio/>,
    value: "60%"
  }
]

export const EDUCATION = [
  {
    title: {
      label: "Università Federico II",
      url: "https://www.international.unina.it/",
    },
    icon: <IoMdSchool/>,
    description: "Bachelor of Engineering - BS, Computer Engineering",
    date: "09/2024 - Current",
    grade: null,
    skills: {
      label: "Project Management, Engineering and +13 skills",
      url: "https://www.linkedin.com/in/alberto-di-maio-520531285/overlay/urn:li:fsd_profileEducation:(ACoAAEVPyKgBu5ANhvj-zcPp2AQ_UKQE9SGzE6o,996902719)/skill-associations-details/"
    }
  },
  {
    title: {
      label: "ITIS Francesco Giordani Striano",
      url: "https://ittfrancesogiordaninapoli.it",
    },
    grade: "100/100",
    icon: <BiSolidSchool/>,
    description: "High School Diploma in Computer Science and Technology, Computer Programming, Specific Applications.",
    date: "09/2019 - 07/2024",
    skills: {
      label: "Python, OOP and +6 skills",
      url: "https://www.linkedin.com/in/alberto-di-maio-520531285/overlay/urn:li:fsd_profileEducation:(ACoAAEVPyKgBu5ANhvj-zcPp2AQ_UKQE9SGzE6o,905008944)/skill-associations-details/"
    }
  },
]


export const projects = [
    {
      name: "Bliddo",
      right: false,
      skills: ["React JS", "TailwindCss", "Typescript", "Flask", "Python", "MySQL"],
      description: "Bliddo empowers businesses and individuals to generate custom QR codes and gain real-time insights for every scan.",
      links: {
        overview: true,
        code: false,
        link_overview: "https://bliddofe.pages.dev",
        link_github: ""
      },
      image: "bliddo.png"
    },
    {
      name: "Uteka",
      right: false,
      skills: ["React JS", "TailwindCss", "Typescript", "Flask", "Python", "MySQL"],
      description: "Sell your digital guides, articles, small e-books or recipes and share your digital library to the world using your link.",
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
      skills: ["Python", "Flask"],
      description: "A REST API able to generate more than 10 Millions fake but realistic users for testing and development.",
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
      skills: ["React JS", "TailwindCss", "Typescript", "Flask", "Python", "MySQL", "MongoDb"],
      description: "Share your cringe stories with an anonymous community, read cringe stories and have fun with your friends!",
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
      skills: ["React JS", "TailwindCss", "Typescript", "Flask", "Python", "MySQL"],
      description: "Bored And Tired of procrastinating? Create and complete some tasks and meet new people.",
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
      skills: ["React JS", "TailwindCss", "Typescript", "Flask", "Python", "PostgreSQL"],
      description: "Codymio is helping 500+ developers find the perfect open source projects to contribute to",
      links: {
        overview: true,
        code: false,
        link_overview: "https://codymio.pages.dev",
        link_github: ""
      },
      image: "codymio.jpg"
    },
    {
      name: "Cryllet",
      right: true,
      skills: ["React JS", "TailwindCss", "Javascript", "Flask", "Python", "MySQL"],
      description: "Create your payment links with Cryllet. Pay and get paid by others using cryptocurrencies",
      links: {
        overview: true,
        code: false,
        link_overview: "https://cryllet-fe.pages.dev",
        link_github: ""
      },
      image: "cryllet.jpg"
    }
  ]