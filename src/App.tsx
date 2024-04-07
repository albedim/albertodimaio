import { TfiMenu } from 'react-icons/tfi'
import { TbUnlink } from 'react-icons/tb'
import { BiLogoSpringBoot, BiLogoFlask, BiLogoPython, BiLogoTailwindCss, BiLogoPhp, BiLogoMongodb, BiLogoTypescript, BiSolidEdit } from 'react-icons/bi'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTwitter } from 'react-icons/si'
import { FaCode, FaLaptopCode } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { IoLogoJavascript, IoMdClose } from 'react-icons/io'
import { GrClose, GrReactjs } from 'react-icons/gr'
import { ImHtmlFive, ImCss3 } from 'react-icons/im'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { projects, skills } from './consts';
import axios from 'axios';
import { data } from './config/config';
import Flag from 'react-world-flags';
import { LanguagesType } from './types';
import Header from './components/header';
import MobileMenu from './components/mobile_menu'


function App() {

  const [menu, setMenu] = useState(false)

  const [language, setLanguage] = useState<LanguagesType>("en_US")

  const homeRef = useRef<HTMLInputElement>(null)

  const aboutRef = useRef<HTMLInputElement>(null)

  const skillsRef = useRef<HTMLInputElement>(null)

  const projectsRef = useRef<HTMLInputElement>(null)

  const [hoverable, setHoverable] = useState(true)

  const [hover, setHover] = useState("")

  const [selectedPage, setSelectedPage] = useState("home")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleLanguage()
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0 && window.scrollY < 734) {
      setSelectedPage("home")
    } else if (window.scrollY > 735 && window.scrollY < 1534) {
      setSelectedPage("about")
    } else if (window.scrollY > 1535 && window.scrollY < 2154) {
      setSelectedPage("skills")
    } else if (window.scrollY > 2154)
      setSelectedPage("projects")
  }

  const handleLanguage = async () => {
    await axios.get("https://ipapi.co/json")
    .then(res => {
      if (data.hasOwnProperty(res.data.languages.split(",")[0].replace("-", "_"))) {
        setLanguage(res.data.languages.split(",")[0].replace("-", "_"))
      } else {
        setLanguage("en_US")
      }
    })
    .catch(err => {
      setLanguage("en_US")
    })
  }

  return (
    <div className='bg-[#fafafd] dark:bg-[#1c1c1c] h-screen w-screen'>
      {/*<img className="fixed opacity-20 top-0 left-0 right-0" src="data:image/svg+xml,%3csvg 
      xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' 
      xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='1080' preserveAspectRatio='none' 
      viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath 
      d='M871.12 1236.55C1100.46 1136.07 1140.14 420.19 1443.15 414.44 1746.16 408.69 1838.94 813.74 2015.18 835.64' 
      stroke='rgba(76%2c 161%2c 76%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath 
      d='M124.5 1113.93C407.92 1081.86 524.36 489.77 1056.39 455.71 1588.43 421.65 1736.98 84.81 1988.29 77.71' 
      stroke='rgba(76%2c 161%2c 76%2c 1)' 
      stroke-width='2'%3e%3c/path%3e%3cpath 
      d='M260.84 1088.47C563.33 1033.91 704.59 283.26 1185.44 278.08 1666.3 272.9 1868.49 555.81 2110.05 558.88' 
      stroke='rgba(76%2c 161%2c 76%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath 
      d='M993.13 1251.5C1184.53 1202.72 1199.2 725.78 1539.13 680.44 1879.07 635.1 1934.18 427.71 2085.14 421.24' 
      stroke='rgba(76%2c 161%2c 76%2c 1)' 
      stroke-width='2'%3e%3c/path%3e%3cpath 
      d='M1088.22 1129.23C1250.81 1040.94 1177.81 496.61 1470.26 495.42 1762.7 494.23 2019.09 883.2 2234.33 895.02' 
      stroke='rgba(76%2c 161%2c 76%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask 
      id='SvgjsMask1003'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e" 
      alt=""
      />*/}
      <Header
        setLanguage={(language) => setLanguage(language)}
        language={language || 'en_US'}
        selectedPage={selectedPage}
        setMenu={() => setMenu(true)}
        onHomeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onAboutClick={() => aboutRef?.current?.scrollIntoView({ behavior: 'smooth' })}
        onSkillsClick={() => skillsRef?.current?.scrollIntoView({ behavior: 'smooth' })}
        onProjectsClick={() => projectsRef?.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <MobileMenu
        language={language || 'en_US'}
        selectedPage={selectedPage}
        visible={menu}
        setMenu={() => setMenu(false)}
        onHomeClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setMenu(false)
        }}
        onAboutClick={() => {
          aboutRef?.current?.scrollIntoView({ behavior: 'smooth' })
          setMenu(false)
        }}
        onSkillsClick={() => {
          skillsRef?.current?.scrollIntoView({ behavior: 'smooth' })
          setMenu(false)
        }}
        onProjectsClick={() => {
          projectsRef?.current?.scrollIntoView({ behavior: 'smooth' })
          setMenu(false)
        }}
      />
      <div className='homeMarginTop flex bg-[#fafafd] dark:bg-[#1c1c1c] justify-around pl-4 pr-4 z-30'>
        <div style={{ maxWidth: 1245 }}>
          <div ref={homeRef}>
            <div style={{ paddingBottom: 184, paddingTop: 184 }}>
              <h2 className="text-xl text-[#4ca14c] font-semibold font-p" >{data[language].home.introduction}</h2>
              <h2 className="mt-4 text-[#686868] dark:text-[white] md:text-7xl text-5xl font-bold font-p" >Alberto Di Maio</h2>
              <TypeAnimation
                className='mt-3 text-2xl md:text-4xl text-[#b0b0b0] font-semibold font-p'
                sequence={[
                  data[language].home.titles[0], // Types 'One'
                  2400, // Waits 1s
                  data[language].home.titles[1],
                  2400,
                  data[language].home.titles[2],
                  2400,
                  () => {
                    return // Place optional callbacks anywhere in the array
                  }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
              <h2 className="mt-4 text-lg md:text-xl text-xl text-[#b0b0b0] font-semibold font-p" >
                {data[language].home.bio}
              </h2>
              <div className='pt-8'>
                <button 
                  onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} 
                  className='transition-all dark:text-[black] hover:bg-[#478B47] rounded-md p-4 
                             text-[white] bg-[#4ca14c] text-lg font-medium font-p' 
                >
                  {data[language].home.more_about_me}
                </button>
              </div>
            </div>
          </div>
          <div ref={aboutRef}>
            <div style={{ paddingBottom: 184, paddingTop: 184 }}>
              <div>
                <h2 className="mt-2 dark:text-[white] text-[#686868] text-5xl font-bold font-p">
                  {data[language].about.title}
                  <div className='w-40 bg-[#4ca14c] mt-1 h-2' ></div>
                </h2>
                <div>
                  <h2 
                    dangerouslySetInnerHTML={{ __html: data[language].about.content}} 
                    style={{ maxWidth: 940 }} 
                    className='mt-14 dark:text-[#adadad] text-lg text-[#686868] font-regular font-p'
                  ></h2>
                  <TypeAnimation
                    className='italic mt-14 text-xl dark:text-[#adadad] text-[#686868] font-regular font-p'
                    sequence={[
                      "''Find a job you enjoy doing, and you will never have to work a day in your life.''",
                      2400,
                      "",
                      () => {
                        return
                      }
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                  />
                </div>
              </div>
            </div>
          </div>
          <div ref={skillsRef}>
            <div className='h-icons' style={{ paddingTop: 184 }}>
              <div>
                <h2 className={'mt-2 dark:text-[white] text-[#686868] text-5xl font-bold font-p'}>
                  {data[language].skills.title}
                  <div className='w-40 bg-[#4ca14c] mt-1 h-2' ></div>
                </h2>
                <div className='flex-wrap flex-wrap-box pt-14'>
                  {
                    skills.map(skill => (
                      hover == skill.name ? (
                        <div className='cursor-pointer h-24 mt-10'>
                          <div onMouseLeave={() => setHover("")} className='rounded-lg dark:border border-[#3d3d3d] dark:bg-[#171616] bg-[white]'>
                            <div className='pb-1 p-10'>
                              {skill.icon}
                            </div>
                            <div className='p-4'>
                              <h2 className='text-lg text-[#b0b0b0] font-medium font-p'>{skill.name}</h2>
                              <div
                                style={{ height: 14, width: '100%' }} 
                                className='rounded-md bg-opacity-10 dark:bg-opacity-40 mt-1 bg-[gray]'
                              >
                                <div
                                  className='bg-[#4ca14c] rounded-md'
                                  style={{ height: 14, width: skill.value }} >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          onMouseEnter={() => {
                            if (hoverable)
                              setHover(skill.name)
                          }}
                          className='cursor-pointer mt-10 pb-1 p-10'>
                          {skill.icon}
                        </div>
                      )
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div ref={projectsRef}>
            <div style={{ paddingBottom: 184, paddingTop: 254 }}>
              <div>
                <h2 className="mt-2 dark:text-[white] text-[#686868] text-5xl font-bold font-p">
                  {data[language].projects.title}
                  <div className='w-60 bg-[#4ca14c] mt-4 h-2' ></div>
                </h2>
                <div className='pt-14'>
                  {
                    projects(language).map(project => (
                      <div className='pl-0 p-8'>
                        <div 
                          style={{ justifyContent: project.right ? 'space-between' : '' }} 
                          className='project-flex rounded-lg dark:bg-[#171616] p-8 dark:shadow-none dark:border border-[#3d3d3d] shadow-md shadow-[#e4e4e4] bg-[white]'
                        >
                          {
                            project.right ? (
                              <div className='padding-l-no none-flex items-center justify-around'>
                                <img
                                  width={640}
                                  className='border dark:boder-none rounded-lg'
                                  src={require("./images/" + project.image)} 
                                  alt=""
                                />
                              </div>
                            ) : (
                              <div className='flex padding-r-no items-center justify-around'>
                                <img 
                                  width={640} 
                                  className='border dark:border-none rounded-lg' 
                                  src={require("./images/" + project.image)} 
                                  alt="" 
                                />
                              </div>
                            )
                          }
                          <div>
                            <h2 className={'mt-2 dark:text-[white] text-[gray] text-3xl font-bold font-p'}>
                              {project.name}
                              <div style={{ backgroundColor: '#4ca14c' }} className='w-40 mt-1 h-1' ></div>
                            </h2>
                            <div className='pt-4 flex'>
                              {
                                project.icons.map(icon => (
                                  <a title={icon.name}>
                                    <div onClick={() => {
                                      skillsRef.current?.scrollIntoView({ behavior: 'smooth' })
                                      setHoverable(false)
                                      setHover(icon.name)
                                      setTimeout(() => {
                                        setHoverable(true)
                                      }, 1400)
                                    }} className='pl-0 p-2'><div className='cursor-pointer'>{icon.icon}</div></div>
                                  </a>
                                ))
                              }
                            </div>
                            <div className='pt-2'>
                              <h2 style={{ maxWidth: 340 }} className={'mt-2 dark:text-[#adadad] text-[gray] text-md font-regular font-p'}>
                                {project.description}
                              </h2>
                            </div>
                            <div className='flex-block pt-5'>
                              {
                                project.links.overview &&
                                  <div 
                                    className='pl-0 hover:mt-1 transition-all p-2'>
                                    <a target='_blank' href={project.links.link_overview}>
                                      <button
                                        className='hover:bg-[#478B47] transition-all items-center 
                                        flex rounded-md p-4 dark:text-[black] text-[white] bg-[#4ca14c] font-medium font-p' >
                                        <div className='pr-2'>
                                          <TbUnlink size={24} />
                                        </div> {data[language].projects.buttons.overview}
                                      </button>
                                    </a>
                                  </div>
                              }
                              {
                                project.links.code &&
                                  <div className='pl-0 hover:mt-1 transition-all p-2'>
                                    <a target='_blank' href={project.links.link_github}>
                                      <button 
                                          className='hover:bg-[#478B47] transition-all items-center 
                                          flex rounded-md p-4 dark:text-[black] text-[white] bg-[#4ca14c] font-medium font-p' >
                                        <div className='pr-2'>
                                          <FaCode size={24} />
                                        </div> {data[language].projects.buttons.code}
                                      </button>
                                    </a>
                                  </div>
                              }
                            </div>
                          </div>
                          {
                            project.right &&
                            <div className='toNone padding-l-no flex items-center justify-around'>
                              <img width={640} className='border dark:border-none rounded-lg' src={require("./images/" + project.image)} alt="" />
                            </div>
                          }
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex dark:bg-[#1c1c1c] bg-[#fafafd] justify-around p-24'>
        <div className='flex-block gap-14 justify-between'>
          <h2 className={'mt-4 text-center dark:text-[#adadad] text-[gray] text-1xl font-regular font-p'} >© 2023 - Made with ♥ by <span className='text-[#4ca14c]' >albedim</span></h2>
          <div className='justify-around gap-2 mt-4 flex'>
            <a target='_blank' href="https://twitter.com/TheAlbeDim">
              <button className='w-[30px] dark:text-[#adadad] text-[gray] dark:border-[#adadad] h-[30px] flex items-center justify-around rounded-full border border-[gray] border-2'>
                <BsTwitterX size={16} />
              </button>
            </a>
            <a href="https://github.com/albedim">
              <button className='w-[30px] dark:text-[#adadad] text-[gray] dark:border-[#adadad] h-[30px] flex items-center justify-around rounded-full border border-[gray] border-2'>
                <AiFillGithub size={16} />
              </button>
            </a>
            <a href="https://linkedin.com/in/alberto-di-maio-520531285">
              <button className='w-[30px] dark:text-[#adadad] text-[gray] dark:border-[#adadad] h-[30px] flex items-center justify-around rounded-full border border-[gray] border-2'>
                <AiFillLinkedin size={16}/>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;