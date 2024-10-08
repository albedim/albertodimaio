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
    icon: <ImHtmlFive size={54}/>,
    value: "94%"
  },
  {
    name: "CSS",
    icon: <ImCss3 size={54}/>,
    value: "80%"
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript size={54}/>,
    value: "70%"
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript size={54}/>,
    value: "70%"
  },
  {
    name: "React JS",
    icon: <GrReactjs size={54}/>,
    value: "80%"
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative size={54}/>,
    value: "70%"
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs size={54}/>,
    value: "65%"
  },
  {
    name: "TailwindCss",
    icon: <BiLogoTailwindCss size={54}/>,
    value: "50%"
  },
  {
    name: "Python",
    icon: <BiLogoPython size={54}/>,
    value: "94%"
  },
  {
    name: "Flask",
    icon: <BiLogoFlask size={54}/>,
    value: "94%"
  },
  {
    name: "Java",
    icon: <FaJava size={54}/>,
    value: "84%"
  },
  {
    name: "Spring Boot",
    icon: <BiLogoSpringBoot size={54}/>,
    value: "75%"
  },
  {
    name: "MySQL",
    icon: <SiMysql size={54}/>,
    value: "70%"
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={54}/>,
    value: "70%"
  },
  {
    name: "MongoDb",
    icon: <BiLogoMongodb size={54}/>,
    value: "45%"
  },
  {
    name: "PHP",
    icon: <BiLogoPhp size={54}/>,
    value: "50%"
  },
  {
    name: "Express.js",
    icon: <SiExpress size={54}/>,
    value: "60%"
  },
  {
    name: "SocketIo",
    icon: <SiSocketdotio size={54}/>,
    value: "60%"
  }
]

const projectsLanguages = [
  {
    name: "HTML",
    icon: <ImHtmlFive size={21} color='black' opacity="60%" />
  },
  {
    name: "CSS",
    icon: <ImCss3 size={21} color='black' opacity="60%" />
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript size={21} color='black' opacity="60%" />
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript size={21} color='black' opacity="60%" />
  },
  {
    name: "React JS",
    icon: <GrReactjs size={21} color='black' opacity="60%" />
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative size={21} color='black' opacity="60%" />
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs size={21} color='black' opacity="60%" />
  }, 
  {
    name: "TailwindCss",
    icon: <BiLogoTailwindCss size={21} color='black' opacity="60%" />
  },
  {
    name: "Python",
    icon: <BiLogoPython size={21} color='black' opacity="60%" />
  },
  {
    name: "Flask",
    icon: <BiLogoFlask size={21} color='black' opacity="60%" />
  },
  {
    name: "Java",
    icon: <FaJava size={21} color='black' opacity="60%" />
  },
  {
    name: "Spring Boot",
    icon: <BiLogoSpringBoot size={21} color='black' opacity="60%" />
  },
  {
    name: "MySQL",
    icon: <SiMysql size={21} color='black' opacity="60%" />
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={21} color='black' opacity="60%" />
  },
  {
    name: "MongoDb",
    icon: <BiLogoMongodb size={21} color='black' opacity="60%" />
  },
  {
    name: "PHP",
    icon: <BiLogoPhp size={21} color='black' opacity="60%" />
  },
  {
    name: "Express.js",
    icon: <SiExpress size={21} color='black' opacity="60%" />
  }
]

export const EDUCATION = [
  {
    title: {
      label: "Università Federico II",
      url: "https://www.international.unina.it/",
    },
    image: <img className='w-full h-full' src={require('./images/sec.png')} alt="" />,
    description: "Bachelor of Engineering - BS, Computer Engineering",
    date: "09/2024 - 04/2027",
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
    image: <img className='w-full h-full' src={require('./images/gs.png')} alt="" />,
    description: "High School Diploma in Computer Science and Technology, Computer Programming, Specific Applications.",
    date: "09/2019 - 07/2024",
    skills: {
      label: "Python, OOP and +6 skills",
      url: "https://www.linkedin.com/in/alberto-di-maio-520531285/overlay/urn:li:fsd_profileEducation:(ACoAAEVPyKgBu5ANhvj-zcPp2AQ_UKQE9SGzE6o,905008944)/skill-associations-details/"
    }
  },
]


export const projects = (language) => {
  return [
    {
      name: "Bliddo",
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
        link_overview: "https://bliddo.com",
        link_github: ""
      },
      image: "bliddo.png"
    },
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
      description: data[language].projects.content[1],
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
      description: data[language].projects.content[2],
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
      description: data[language].projects.content[3],
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
      description: data[language].projects.content[4],
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
      description: data[language].projects.content[5],
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
      icons: [
        projectsLanguages[4],
        projectsLanguages[7],
        projectsLanguages[2],
        projectsLanguages[9],
        projectsLanguages[8],
        projectsLanguages[12],
      ],
      description: data[language].projects.content[6],
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
