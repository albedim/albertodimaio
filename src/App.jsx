import logo from './logo.svg';
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

const COLORS = ['#5fc95f', '#56b556', '#4ca14c', '#438d43', '#397939', '#306530', '#265026', '#1c3c1c', '#132813', '#091409']


function App() {

  const [menu, setMenu] = useState(false)

  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false)

  const [language, setLanguage] = useState()

  const homeRef = useRef(null)

  const aboutRef = useRef(null)

  const skillsRef = useRef(null)

  const projectsRef = useRef(null)

  const [hoverable, setHoverable] = useState(true)

  const [hover, setHover] = useState("")

  const [selectedPage, setSelectedPage] = useState("home")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleLanguage()
  }, []);

  const handleScroll = (e) => {
    if (window.scrollY.toFixed() > 0 && window.scrollY.toFixed() < 734) {
      setSelectedPage("home")
    } else if (window.scrollY.toFixed() > 735 && window.scrollY.toFixed() < 1534) {
      setSelectedPage("about")
    } else if (window.scrollY.toFixed() > 1535 && window.scrollY.toFixed() < 2154) {
      setSelectedPage("skills")
    } else if (window.scrollY.toFixed() > 2154)
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
    setIsLanguageLoaded(true)
  }

  if (!isLanguageLoaded) {
    return (
      <div></div>
    )
  }

  return (
    <div className='bg-[white] justify-around flex h-screen w-screen'>
      <img className="fixed opacity-20 top-0 left-0 right-0" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M871.12 1236.55C1100.46 1136.07 1140.14 420.19 1443.15 414.44 1746.16 408.69 1838.94 813.74 2015.18 835.64' stroke='rgba(76%2c 161%2c 76%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M124.5 1113.93C407.92 1081.86 524.36 489.77 1056.39 455.71 1588.43 421.65 1736.98 84.81 1988.29 77.71' stroke='rgba(76%2c 161%2c 76%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M260.84 1088.47C563.33 1033.91 704.59 283.26 1185.44 278.08 1666.3 272.9 1868.49 555.81 2110.05 558.88' stroke='rgba(76%2c 161%2c 76%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M993.13 1251.5C1184.53 1202.72 1199.2 725.78 1539.13 680.44 1879.07 635.1 1934.18 427.71 2085.14 421.24' stroke='rgba(76%2c 161%2c 76%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1088.22 1129.23C1250.81 1040.94 1177.81 496.61 1470.26 495.42 1762.7 494.23 2019.09 883.2 2234.33 895.02' stroke='rgba(76%2c 161%2c 76%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e" alt="" />
      <div
        style={{ display: menu ? 'block' : 'none' }} 
        className='z-50 bg-[white] border right-0 h-screen w-4/5 fixed'
      >
        <div className='h-10'></div>
        <div className='p-6'  >
          <IoMdClose 
            onClick={() => setMenu(false)} 
            size={54} 
            color='black'
          />
        </div>
        <ul>
          <li 
            onClick={() => { 
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMenu(false) 
            }} 
            style={{ color: selectedPage == 'home' ? 'black' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              {data[language].menu.home}
              <div 
                style={{ backgroundColor: selectedPage == 'home' ? '#4ca14c' : 'transparent' }} 
                className='h-1' >
              </div>
            </div>
          </li>
          <li 
            onClick={() => {
              aboutRef.current.scrollIntoView({ behavior: 'smooth' }); 
              setMenu(false) 
            }} 
            style={{ color: selectedPage == 'about' ? 'black' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              {data[language].menu.about}
              <div 
                style={{ backgroundColor: selectedPage == 'about' ? '#4ca14c' : 'transparent' }} 
                className='h-1' >
              </div>
            </div>
          </li>
          <li
            onClick={() => {
              skillsRef.current.scrollIntoView({ behavior: 'smooth' }); 
              setMenu(false) 
            }}
            style={{ color: selectedPage == 'skills' ? 'black' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              {data[language].menu.skills}
              <div 
                style={{ backgroundColor: selectedPage == 'skills' ? '#4ca14c' : 'transparent' }} 
                className='h-1' > 
              </div>
            </div>
          </li>
          <li
            onClick={() => {
              projectsRef.current.scrollIntoView({ behavior: 'smooth' }); 
              setMenu(false) 
            }} 
            style={{ color: selectedPage == 'projects' ? 'black' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              {data[language].menu.projects}
              <div 
                style={{ backgroundColor: selectedPage == 'projects' ? '#4ca14c' : 'transparent' }} 
                className='h-1' > 
              </div>
            </div>
          </li>
          <li 
            style={{ color: selectedPage == 'contactme' ? 'white' : 'gray' }} 
            className={'items-center flex p-8 font-medium font-p'}
          >
            <a href="mailto:albertodimaio05@gmail.com">
              <button className='rounded-md p-4 text-[white] bg-[#4ca14c] font-medium font-p' >
              {data[language].menu.contact_me}
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div className='z-50 p-menu pb-2 bg-[white] w-screen fixed justify-between p-8 items-center flex'>
        <div className='items-center flex'>
          <FaLaptopCode size={34} color={COLORS[3]} />
          <h2 className={'ml-4 font-medium font-p text-[black]'} >Alberto Di Maio</h2>
          <div className='flex ml-4 items-center'>
            <Flag className='border rounded-sm' width={18} height={18} code={language.split("_")[1]} />
            <select className='ml-1 outline-none font-p font-medium' onChange={(e) => setLanguage(e.target.value)} value={language} id="">
              <option value="it_IT">IT</option>
              <option value="en_US">EN</option>
            </select>
          </div>
        </div>
        <div>
          <ul className='flex-none'>
            <li 
              onClick={() => { 
                window.scrollTo({ top: 0, behavior: 'smooth' }) 
              }} 
              style={{ color: selectedPage == 'home' ? 'black' : 'gray' }} 
              className={'cursor-pointer items-center flex ml-8 font-medium font-p'}
            >
              <div>
                {data[language].menu.home}
                <div 
                  style={{ backgroundColor: selectedPage == 'home' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' > 
                </div>
              </div>
            </li>
            <li 
              onClick={() => {
                aboutRef.current.scrollIntoView({ behavior: 'smooth' }); 
              }} 
              style={{ color: selectedPage == 'about' ? 'black' : 'gray' }} 
              className={'cursor-pointer items-center flex ml-8 font-medium font-p'}
            >
              <div>
                {data[language].menu.about}
                <div 
                  style={{ backgroundColor: selectedPage == 'about' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' >
                </div>
              </div>
            </li>
            <li 
              onClick={() => {
                skillsRef.current.scrollIntoView({ behavior: 'smooth' }); 
              }} 
              style={{ color: selectedPage == 'skills' ? 'black' : 'gray' }} 
              className={'cursor-pointer items-center flex ml-8 font-medium font-p'}
            >
              <div>
                {data[language].menu.skills}
                <div 
                  style={{ backgroundColor: selectedPage == 'skills' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' >
                </div>
              </div>
            </li>
            <li 
              onClick={() => {
                projectsRef.current.scrollIntoView({ behavior: 'smooth' })
              }} 
              style={{ color: selectedPage == 'projects' ? 'black' : 'gray' }} 
              className={'cursor-pointer items-center flex ml-8 font-medium font-p'}
            >
              <div>
                {data[language].menu.projects}
                <div 
                  style={{ backgroundColor: selectedPage == 'projects' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' >
                </div>
              </div>
            </li>
            <li 
              style={{ color: selectedPage == 'contactme' ? 'black' : 'gray' }} 
              className={'items-center flex ml-8 font-medium font-p'}
            >
              <a href="mailto:albertodimaio05@gmail.com">
                <button className='transition-all hover:bg-[#478B47] rounded-md p-4 text-[white] bg-[#4ca14c] font-medium font-p' >
                  {data[language].menu.contact_me}
                </button>
              </a>
            </li>
          </ul>
          <TfiMenu onClick={() => setMenu(true)} className='none-flex' size={34} color='black' />
        </div>
      </div>
      <div className='mt-24 z-40 screen-w'>
        <div ref={homeRef}>
          <div style={{ paddingBottom: 184, paddingTop: 184 }}>
            <h2 
              style={{ color: '#4ca14c' }} 
              className={'text-xl font-semibold font-p'} >{data[language].home.introduction}
            </h2>
            <h2
              style={{ color: '#686868' }} 
              className={'mt-4 text-6xl font-bold font-p'} >Alberto Di Maio
            </h2>
            <TypeAnimation
              className='mt-4 text-3xl text-[#b0b0b0] font-semibold font-p'
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
            <h2 className={'mt-4 text-xl text-[#b0b0b0] font-semibold font-p'} >{data[language].home.bio}</h2>
            <div className='pt-8'>
              <button 
                onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} 
                className='transition-all hover:bg-[#478B47] rounded-md p-4 text-[white] bg-[#4ca14c] text-lg font-medium font-p' >{data[language].home.more_about_me}
              </button>
            </div>
          </div>
        </div>
        <div ref={aboutRef}>
          <div style={{ paddingBottom: 184, paddingTop: 184 }}>
            <div>
              <h2 style={{ color: '#686868' }} className={'mt-2 text-5xl font-bold font-p'}>
                {data[language].about.title}
                <div style={{ backgroundColor: '#4ca14c' }} className='w-40 mt-1 h-2' ></div>
              </h2>
              <div>
                <h2 dangerouslySetInnerHTML={{ __html: data[language].about.content}} style={{ maxWidth: 940 }} className='mt-14 text-lg text-[#b0b0b0] font-regular font-p'>
                    
                </h2>
                <TypeAnimation
                  className='italic mt-14 text-lg text-[#b0b0b0] font-regular font-p'
                  sequence={[
                    "''Find a job you enjoy doing, and you will never have to work a day in your life.''", // Types 'One'
                    2400, // Waits 1s,
                    "",
                    () => {
                      return // Place optional callbacks anywhere in the array
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
              <h2 style={{ color: '#686868' }} className={'mt-2 text-5xl font-bold font-p'}>
                {data[language].skills.title}
                <div style={{ backgroundColor: '#4ca14c' }} className='w-40 mt-1 h-2' ></div>
              </h2>
              <div className='flex-wrap flex-wrap-box pt-14'>
                {
                  skills.map(skill => (
                    hover == skill.name ? (
                      <div className='cursor-pointer mt-10'>
                        <div onMouseLeave={() => setHover("")} className='rounded-lg bg-[#FAFAFA]'>
                          <div className='pb-1 p-10'>
                            {skill.icon}
                          </div>
                          <div className='p-4'>
                            <h2 className='text-lg text-[#b0b0b0] font-medium font-p'>{skill.name}</h2>
                            <div
                              style={{ height: 14, width: '100%' }} 
                              className='rounded-md bg-opacity-10 mt-1 bg-[gray]'
                            >
                              <div
                                className='rounded-md'
                                style={{ height: 14, backgroundColor: '#4ca14c', width: skill.value }} >
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
              <h2 style={{ color: '#686868' }} className={'mt-2 text-5xl font-bold font-p'}>
                {data[language].projects.title}
                <div style={{ backgroundColor: '#4ca14c' }} className='w-60 mt-4 h-2' ></div>
              </h2>
              <div className='pt-14'>
                {
                  projects(language).map(project => (
                    <div className='pl-0 p-8'>
                      <div 
                        style={{ justifyContent: project.right ? 'space-between' : '' }} 
                        className='project-flex rounded-lg p-8 border bg-[#FAFAFA]'
                      >
                        {
                          project.right ? (
                            <div className='padding-l-no none-flex items-center justify-around'>
                              <img 
                                width={640} 
                                className='img rounded-lg'
                                src={require("./images/" + project.image)} 
                                alt="" 
                              />
                            </div>
                          ) : (
                            <div className='flex padding-r-no items-center justify-around'>
                              <img 
                                width={640} 
                                className='img rounded-lg' 
                                src={require("./images/" + project.image)} 
                                alt="" 
                              />
                            </div>
                          )
                        }
                        <div>
                          <h2 style={{ color: 'gray' }} className={'mt-2 text-3xl font-bold font-p'}>
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
                          <div className='pt-8'>
                            <h2 style={{ maxWidth: 340, color: 'gray' }} className={'mt-2 text-md font-regular font-p'}>
                              {project.description}
                            </h2>
                          </div>
                          <div className='flex-block pt-14'>
                            {
                              project.links.overview &&
                              <div 
                                className='p-2'>
                                <a target='_blank' href={project.links.link_overview}>
                                  <button
                                    className='hover:bg-[#478B47] transition-all items-center 
                                    flex rounded-md p-4 text-[white] bg-[#4ca14c] font-medium font-p' >
                                    <div className='pr-2'>
                                      <TbUnlink size={24} />
                                    </div> {data[language].projects.buttons.overview}
                                  </button>
                                </a>
                              </div>
                            }
                            {
                              project.links.code &&
                              <div 
                              className='p-2'>
                              <a target='_blank' href={project.links.link_github}>
                                <button 
                                  className='hover:bg-[#478B47] transition-all items-center 
                                  flex rounded-md p-4 text-[white] bg-[#4ca14c] font-medium font-p' >
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
                            <img width={640} className='img rounded-lg' src={require("./images/" + project.image)} alt="" />
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
        <div className='p-24'>
          <div className='flex-block justify-between'>
            <h2 style={{ color: 'gray' }} className={'mt-2 text-1xl font-regular font-p'} >© 2023 - Made with ♥ by <span className='text-[#4ca14c]' >albedim</span></h2>
            <div className='justify-around flex'>
              <div className='p-4'><a target='_blank' href="https://twitter.com/TheAlbeDim"><BsTwitterX size={24} color='gray' /></a></div>
              <div className='p-4'><a target='_blank' href="https://github.com/albedim"><AiFillGithub size={24} color='gray' /></a></div>
              <div className='p-4'><a target='_blank' href="https://linkedin.com/in/alberto-di-maio-520531285"><AiFillLinkedin size={24} color='gray' /></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
