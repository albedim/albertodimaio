import { TfiClose, TfiEmail, TfiMenu } from 'react-icons/tfi'
import { TbUnlink, TbWorldWww } from 'react-icons/tb'
import { BiLogoSpringBoot, BiLogoFlask, BiLogoPython, BiLogoTailwindCss, BiLogoPhp, BiLogoMongodb, BiLogoTypescript, BiSolidEdit, BiMenu, BiBook, BiUser } from 'react-icons/bi'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiSkillshare, SiTwitter } from 'react-icons/si'
import { FaCode, FaGithub, FaHamburger, FaIdeal, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import { BsLightbulb, BsTwitterX } from 'react-icons/bs'
import { IoIosMenu, IoLogoJavascript, IoMdClose } from 'react-icons/io'
import { GrClose, GrReactjs } from 'react-icons/gr'
import { ImHtmlFive, ImCss3, ImMenu } from 'react-icons/im'
import { BrowserRouter, Route, Routes, useSearchParams } from 'react-router-dom';
import { RefObject, useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { EDUCATION, projects, skills } from '../../consts';
import axios from 'axios';
import { data } from '../../config/config';
import Flag from 'react-world-flags';
import { LanguagesType } from '../../types';
import Header from '../../components/header';
import MobileMenu from '../../components/mobile_menu'
import Stepper from '../../components/stepper'
import Section from '../../components/section'


function Homepage() {

  const [language, setLanguage] = useState<LanguagesType>("en_US")
  const [headerStyle, setHeaderStyle] = useState("")
  const [scrollPosition, setScrollPosition] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams()
  const educationRef = useRef<HTMLInputElement>(null)
  const [pageProjects, setPageProjects] = useState<any[]>()
  const [menuVisible, setMenuVisible] = useState(false)
  const [hover, setHover] = useState("")
  const homepageRef = useRef<HTMLInputElement>(null)
  const getInTouchRef = useRef<HTMLInputElement>(null)
  const [hoverable, setHoverable] = useState(true)
  const aboutRef = useRef<HTMLInputElement>(null)
  const skillsRef = useRef<HTMLInputElement>(null)
  const projectsRef = useRef<HTMLInputElement>(null)


  useEffect(() => {
    const prjs = projects(language)
    setPageProjects(prjs)
  }, [])

  const goTo = (ref: RefObject<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 654) {
      if (window.innerWidth > 768) {
        setHeaderStyle("bg-[black] shadow-xl text-[white]")
      } else {
        setHeaderStyle("bg-[transparent] text-[black]")
      }
    } else {
      if (window.innerWidth > 768) {
        setHeaderStyle("bg-[transparent] text-[gray]")
      } else {
        setHeaderStyle("bg-[transparent] text-[white]")
      }
    }
  }, [scrollPosition])

  useEffect(() => {
    if (searchParams.has('ref')) {
      const ref = searchParams.get("ref") || "homepage"
      switch (ref) {
        case "homepage":
          goTo(homepageRef)
          break;
        case "about":
          goTo(aboutRef)
          break;
        case "education":
          goTo(educationRef)
          break;
        case "skills":
          goTo(skillsRef)
          break;
        case "projects":
          goTo(projectsRef)
          break;
        case "get_in_touch":
          goTo(getInTouchRef)
          break;
        default:
          goTo(homepageRef)
          break;
      }
    }
  },[searchParams])

  return (
    <div className='overflow-x-hidden w-screen'>
      <div className={`fixed shadow-md ${menuVisible ? "w-3/4" : "w-[0px]" } z-30 top-0 transition-all h-screen rounded-l-xl top-0 right-0 bg-[white]`}>
        <div className='w-full p-8'>
          <button onClick={() => setMenuVisible(false)}><TfiClose size={24} /></button>
        </div>
        <div className='text-[black] p-8 gap-y-14'>
          <div className='mt-4'><button onClick={() => { goTo(homepageRef); setMenuVisible(false) }} className='hover:text-3xl hover:font-semibold transition-all text-xl'>HOME</button></div>
          <div className='mt-4'><button onClick={() => { goTo(aboutRef); setMenuVisible(false) }} className='hover:text-3xl hover:font-semibold transition-all text-xl'>ABOUT</button></div>
          <div className='mt-4'><button onClick={() => { goTo(educationRef); setMenuVisible(false) }} className='hover:text-3xl hover:font-semibold transition-all text-xl'>EDUCATION</button></div>
          <div className='mt-4'><button onClick={() => { goTo(skillsRef); setMenuVisible(false) }} className='hover:text-3xl hover:font-semibold transition-all text-xl'>SKILLS</button></div>
          <div className='mt-4'><button onClick={() => { goTo(projectsRef); setMenuVisible(false) }} className='hover:text-3xl hover:font-semibold transition-all text-xl'>PROJECTS</button></div>
          <div className='mt-4'><button onClick={() => { goTo(getInTouchRef); setMenuVisible(false) }} className='hover:text-3xl hover:font-semibold transition-all text-xl'>GET IN TOUCH</button></div>
        </div>
      </div>
      <div className={`fixed top-0 z-20 w-full flex md:justify-around justify-between pl-6 md:pr-24 pr-6 bg-opacity-40 ${headerStyle} h-[94px]`}>
        <div className='md:flex hidden gap-14'>
          <button onClick={() => goTo(homepageRef)} className='hover:text-xl hover:font-semibold transition-all text-lg'>HOME</button>
          <button onClick={() => goTo(aboutRef)} className='hover:text-xl hover:font-semibold transition-all text-lg'>ABOUT</button>
          <button onClick={() => goTo(educationRef)} className='hover:text-xl hover:font-semibold transition-all text-lg'>EDUCATION</button>
          <button onClick={() => goTo(skillsRef)} className='hover:text-xl hover:font-semibold transition-all text-lg'>SKILLS</button>
          <button onClick={() => goTo(projectsRef)} className='hover:text-xl hover:font-semibold transition-all text-lg'>PROJECTS</button>
          <button onClick={() => goTo(getInTouchRef)} className='hover:text-xl hover:font-semibold transition-all text-lg'>GET IN TOUCH</button>
        </div>
        <div className='md:hidden'></div>
        <div className='md:hidden flex'>
          <button onClick={() => setMenuVisible(true)} ><IoIosMenu size={34} /></button>
        </div>
      </div>
      <div ref={homepageRef} className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('./image.webp')` }}>
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="relative flex justify-around items-center w-full h-full items-center z-10 text-white p-6">
          <div>
            <h2 className='text-4xl text-center font-extrabold'>WELCOME</h2>
            <div className='flex justify-around'>
              <TypeAnimation
                className='mt-6 text-3xl md:text-6xl text-[white] font-extrabold'
                sequence={[
                  data[language].home.titles[0],
                  1000,
                  data[language].home.titles[1],
                  1000,
                  data[language].home.titles[2],
                  1000,
                  () => {
                    return
                  }
                ]}
                wrapper="div"
                speed={64}
                cursor={true}
                repeat={Infinity}
              />
            </div>
            <p className="mt-6 text-center">A Software Engineer that likes bringing innovative ideas into <br />reality, passionate of building and developing new projects.</p>
          </div>
        </div>
      </div>
      <div ref={aboutRef} className='w-full h-full flex justify-around md:items-center pt-40 p-6'>
        <div>
          <p className='text-4xl font-semibold'>About</p>
          <div className='md:flex items-center gap-14'>
            <div>
              <div className='h-64 md:block hidden md:mt-0 mt-4 md:w-auto w-full w-64'>
                <img src={require("../../images/albedim.jpg")} alt="" className='w-full border-2 border-[black] rounded-2xl object-cover h-full' />
              </div>
              <div className='md:block hidden mt-6'>
                <a target='_blank' href="https://x.com/TheAlbeDim">
                  <button className='flex w-full text-[black] border-[black] border-2 hover:bg-[black] hover:text-[white] w-64 flex justify-around p-2 gap-2 hover:opacity-80 pl-6 pr-6 items-center rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                    <div className="flex gap-2 items-center">
                      <BsTwitterX />
                      <p className='font-medium'>Follow me on X</p>
                    </div>
                  </button>
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/alberto-di-maio-520531285">
                  <button className='flex w-full text-[black] border-[black] border-2 hover:bg-[black] mt-4 hover:text-[white] w-64 flex justify-around p-2 gap-2 hover:opacity-80 pl-6 pr-6 items-center rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                    <div className="flex gap-2 items-center">
                      <FaLinkedin />
                      <p className='font-medium'>Follow me on LinkedIn</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <p className='mt-6 max-w-[540px]' dangerouslySetInnerHTML={{ __html: data[language].about.content }}></p>
          </div>
        </div>
      </div>
      <div ref={educationRef} className='w-full h-full flex justify-around md:items-center pt-64 pb-24 p-6'>
        <div>
          <p className='text-4xl font-semibold'>Education</p>
          <div className='mt-8'>
            {EDUCATION.map((education, i) => (
              <>
                <div className='flex md:w-[840px] mt-4 mb-4 gap-2'>
                  <div className='md:w-16 md:h-16 w-16 h-14'>
                    {education.image}
                  </div>
                  <div className='ml-1'>
                    <a target='_blank' href={education.title.url} className='font-semibold hover:underline text-xl'>{education.title.label}</a>
                    <p className='text-sm md:max-w-[545px] max-w-[345px]'>{education.description}</p>
                    <p className='text-[gray] text-sm mt-1'>{education.date}</p>
                    {education.grade && <p className='text-sm mt-2'>Grade: {education.grade}</p>}
                    <div className='flex mt-1'>
                      <a target="_blank" href={education.skills.url}>
                        <button className='flex hover:underline items-center gap-2 mt-2'>
                          <BsLightbulb/>
                          <p className='font-medium text-left text-sm'>{education.skills.label}</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                {i < EDUCATION.length - 1 ? (
                  <div className='border-t'></div>
                ): null}
              </>
            ))}
          </div>
        </div>
      </div>
      <div ref={skillsRef} className='w-full h-full flex justify-around md:items-center pt-64 p-6'>
        <div>
          <p className='text-4xl font-semibold'>Skills</p>
          <div className='flex md:gap-2 gap-x-8 flex-wrap md:max-w-[884px] max-w-[334px]'>
            {skills.map((skill, index) => (
              <div
                onMouseEnter={() => {
                  if (hoverable) setHover(skill.name);
                }}
                onMouseLeave={() => setHover("")}
                className={`cursor-pointer group z-10 rounded-lg mt-4 transition-all duration-300 ${
                  hover === skill.name ? 'h-[184px] bg-black z-20' : 'h-[140px] bg-white border'
                }`}
                style={{ overflow: 'hidden' }}
              >
                <div className='p-10 group-hover:text-[white]'>
                  {skill.icon}
                </div>

                {hover === skill.name && (
                  <div className='p-4 mt-[-40px]'>
                    <h2 className='text-lg text-white font-medium'>{skill.name}</h2>
                    <div
                      style={{ height: 14, width: '100%' }}
                      className='rounded-md bg-opacity-20 mt-1 bg-white'
                    >
                      <div
                        className='bg-white rounded-md'
                        style={{ height: 14, width: skill.value }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div ref={projectsRef} className='flex justify-around w-full pt-64 p-6'>
        <div>
          <p className='text-4xl font-semibold'>Projects</p>
          <div className='mt-6 gap-2 md:w-[884px]'>
            {pageProjects && pageProjects.map((project, index) => (
              <div key={index} className='w-full border shadow-sm pb-2 rounded-xl mb-4'>
                <div className='w-full h-[214px]'>
                  <img className='w-full object-cover rounded-t-xl h-full' src={require("../../images/" + project.image)} alt="" />
                </div>
                <div className='p-4'>
                  <div className='flex gap-2 mt-2 text-sm'>
                    {project.icons.map((icon: any, index: number) => (
                      <div onClick={() => {
                        /*goTo(skillsRef)
                        setHoverable(false)
                        setHover(icon.name)
                        setTimeout(() => {
                          setHoverable(true)
                        }, 1400)*/
                      }}
                        key={index} >{icon.icon}</div>
                    ))}
                  </div>
                  <p className='mt-6 text-xl font-semibold' >{project.name}</p>
                  <p className='mt-2 text-md max-w-[458px] text-[#939393]' >{project.description}</p>
                  <div className='mt-6 flex gap-2'>
                    {project.links.overview && (
                      <a target='__blank' href={project.links.link_overview}>
                        <button className='flex p-6 items-center gap-1 rounded-lg text-[white] pb-[12.4px] pt-[12.4px] bg-[black] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                          <TbWorldWww />
                          <p className='text-md font-medium'>Website</p>
                        </button>
                      </a>
                    )}
                    {project.links.code && (
                      <a target='__blank' href={project.links.link_github}>
                        <button className='flex p-6 items-center gap-1 border-2 border-[black] rounded-lg text-[black] pb-[10.4px] pt-[11.4px] bg-[transparent] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                          <FaGithub />
                          <p className='text-md font-medium'>Repository</p>
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-40'></div>
      <div ref={getInTouchRef} className='flex pb-32 p-6 justify-around'>
        <div>
          <div className='flex justify-around'>
            <div>
              <h2 className='text-4xl black text-center font-bold' >Get In Touch</h2>
              <p className='text-lg mt-2 max-w-[540px] text-center'>Let's connect on Twitter and LinkedIn or leave me a follow on Github! :)</p>
            </div>
          </div>
          <div className='mt-8 md:flex justify-around'>
            <div className='md:flex gap-6'>
              <a target='__blank' href="https://linkedin.com/in/alberto-di-maio-520531285/">
                <button className='flex text-[black] md:mb-0 mb-4 w-full border-[black] border-2 hover:bg-[black] hover:text-[white] justify-around w-40 p-2 gap-2 hover:opacity-80 pl-6 pr-6 items-center rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                  <div className='flex gap-2 items-center'>
                    <FaLinkedin />
                    <p className='font-medium'>LinkedIn</p>
                  </div>
                </button>
              </a>
              <a target='__blank' href="https://x.com/TheAlbeDim">
                <button className='flex text-[black] md:mb-0 mb-4 border-2 border-[black] hover:bg-[black] hover:text-[white] p-2 w-40 w-full justify-around gap-2 hover:opacity-80 pl-6 pr-6 items-center rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                  <div className='flex gap-2 items-center'>
                    <BsTwitterX />
                    <p className='font-medium'>Twitter/X</p>
                  </div>
                </button>
              </a>
              <a target='__blank' href="https://github.com/albedim">
                <button className='flex text-[black] md:mb-0 mb-4 border-[black] border-2 hover:bg-[black] hover:text-[white] justify-around p-2 w-40 w-full gap-2 hover:opacity-80 pl-6 pr-6 items-center rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                  <div className='flex gap-2 items-center'>
                    <FaGithub />
                    <p className='font-medium'>Github</p>
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className='flex mt-10 border-b w-full justify-around'>

          </div>
          <div className='mt-10 flex justify-around gap-6'>
            <a className='md:w-auto w-full' target='__blank' href="mailto:albertodimaio05@gmail.com">
              <button className='flex w-full text-[black] border-[black] border-2 hover:bg-[black] hover:text-[white] w-64 flex justify-around p-2 gap-2 hover:opacity-80 pl-6 pr-6 items-center rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                <div className="flex gap-2 items-center">
                  <TfiEmail />
                  <p className='font-medium'>Send me an e-mail</p>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='w-full pb-14 flex justify-around'>
        <p className='text-[gray]'>Made with ♥ by <span className='text-[black]'>albedim</span></p>
      </div>
    </div>
  )

}

export default Homepage;