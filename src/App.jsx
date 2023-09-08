import logo from './logo.svg';
import { TfiMenu } from 'react-icons/tfi'
import { TbUnlink } from 'react-icons/tb'
import { BiLogoSpringBoot, BiLogoFlask, BiLogoPython, BiLogoTailwindCss, BiLogoPhp, BiLogoMongodb, BiLogoTypescript, BiSolidEdit } from 'react-icons/bi'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTwitter } from 'react-icons/si'
import { FaJava, FaLaptopCode } from 'react-icons/fa'
import { IoLogoJavascript, IoMdClose } from 'react-icons/io'
import { GrClose, GrReactjs } from 'react-icons/gr'
import { ImHtmlFive, ImCss3 } from 'react-icons/im'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { projects, skills } from './consts';

const COLORS = ['#5fc95f', '#56b556', '#4ca14c', '#438d43', '#397939', '#306530', '#265026', '#1c3c1c', '#132813', '#091409']


function App() {

  const [menu, setMenu] = useState(false)

  const homeRef = useRef(null)

  const aboutRef = useRef(null)

  const skillsRef = useRef(null)

  const projectsRef = useRef(null)

  const [hoverable, setHoverable] = useState(true)

  const [hover, setHover] = useState("")

  const [selectedPage, setSelectedPage] = useState("home")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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

  return (
    <div className='justify-around flex h-screen w-screen'>
      <div 
        style={{ display: menu ? 'block' : 'none' }} 
        className='right-0 h-screen w-4/5 bg-[black] fixed'
      >
        <div className='h-10'></div>
        <div className='p-6'  >
          <IoMdClose 
            onClick={() => setMenu(false)} 
            size={54} 
            color='white' 
          />
        </div>
        <ul>
          <li 
            onClick={() => { 
              setSelectedPage("home"); 
              homeRef.current.scrollIntoView({ behavior: 'smooth' });
              setMenu(false) 
            }} 
            style={{ color: selectedPage == 'home' ? 'white' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              Home
              <div 
                style={{ backgroundColor: selectedPage == 'home' ? '#4ca14c' : 'transparent' }} 
                className='h-1' >
              </div>
            </div>
          </li>
          <li 
            onClick={() => { 
              setSelectedPage("about"); 
              aboutRef.current.scrollIntoView({ behavior: 'smooth' }); 
              setMenu(false) 
            }} 
            style={{ color: selectedPage == 'about' ? 'white' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              About
              <div 
                style={{ backgroundColor: selectedPage == 'about' ? '#4ca14c' : 'transparent' }} 
                className='h-1' >
              </div>
            </div>
          </li>
          <li 
            onClick={() => { 
              setSelectedPage("skills"); 
              skillsRef.current.scrollIntoView({ behavior: 'smooth' }); 
              setMenu(false) 
            }} 
            style={{ color: selectedPage == 'skills' ? 'white' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              Skills
              <div 
                style={{ backgroundColor: selectedPage == 'skills' ? '#4ca14c' : 'transparent' }} 
                className='h-1' > 
              </div>
            </div>
          </li>
          <li 
            onClick={() => { 
              setSelectedPage("projects"); 
              projectsRef.current.scrollIntoView({ behavior: 'smooth' }); 
              setMenu(false) 
            }} 
            style={{ color: selectedPage == 'projects' ? 'white' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              Projects
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
                Contact me
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div className='screen-w'>
        <div ref={homeRef}>
          <div className='justify-between p-8 items-center flex'>
            <div className='items-center flex'>
              <FaLaptopCode size={34} color={COLORS[3]} />
              <h2 className={'ml-4 font-medium font-p text-[white]'} >Alberto Di Maio</h2>
            </div>
            <div>
              <ul className='flex-none'>
                <li 
                  onClick={() => { 
                    setSelectedPage("home"); 
                    homeRef.current.scrollIntoView({ behavior: 'smooth' }) 
                  }} 
                  style={{ color: selectedPage == 'home' ? 'white' : 'gray' }} 
                  className={'cursor-pointer items-center flex ml-8 font-medium font-p'}
                >
                  <div>
                    Home
                    <div 
                      style={{ backgroundColor: selectedPage == 'home' ? '#4ca14c' : 'transparent' }} 
                      className='h-1' > 
                    </div>
                  </div>
                </li>
                <li 
                  onClick={() => { 
                    setSelectedPage("about"); 
                    aboutRef.current.scrollIntoView({ behavior: 'smooth' }); 
                  }} 
                  style={{ color: selectedPage == 'about' ? 'white' : 'gray' }} 
                  className={'cursor-pointer items-center flex ml-8 font-medium font-p'}
                >
                  <div>
                    About
                    <div 
                      style={{ backgroundColor: selectedPage == 'about' ? '#4ca14c' : 'transparent' }} 
                      className='h-1' >
                    </div>
                  </div>
                </li>
                <li 
                  onClick={() => { 
                    setSelectedPage("skills"); 
                    skillsRef.current.scrollIntoView({ behavior: 'smooth' }); 
                  }} 
                  style={{ color: selectedPage == 'skills' ? 'white' : 'gray' }} 
                  className={'cursor-pointer items-center flex ml-8 font-medium font-p'}
                >
                  <div>
                    Skills
                    <div 
                      style={{ backgroundColor: selectedPage == 'skills' ? '#4ca14c' : 'transparent' }} 
                      className='h-1' >
                    </div>
                  </div>
                </li>
                <li 
                  onClick={() => { 
                    setSelectedPage("projects"); 
                    projectsRef.current.scrollIntoView({ behavior: 'smooth' })
                  }} 
                  style={{ color: selectedPage == 'projects' ? 'white' : 'gray' }} 
                  className={'cursor-pointer items-center flex ml-8 font-medium font-p'}
                >
                  <div>
                    Projects
                    <div 
                      style={{ backgroundColor: selectedPage == 'projects' ? '#4ca14c' : 'transparent' }} 
                      className='h-1' >
                    </div>
                  </div>
                </li>
                <li 
                  style={{ color: selectedPage == 'contactme' ? 'white' : 'gray' }} 
                  className={'items-center flex ml-8 font-medium font-p'}
                >
                  <a href="mailto:albertodimaio05@gmail.com">
                    <button className='rounded-md p-4 text-[white] bg-[#4ca14c] font-medium font-p' >
                      Contact me
                    </button>
                  </a>
                </li>
              </ul>
              <TfiMenu onClick={() => setMenu(true)} className='none-flex' size={34} color='white' />
            </div>
          </div>
          <div>
            <div style={{ paddingBottom: 184, paddingTop: 184 }}>
              <h2 
                style={{ color: '#4ca14c' }} 
                className={'text-xl font-semibold font-p'} >Hello! 👋 My name is
              </h2>
              <h2 
                style={{ color: 'white' }} 
                className={'mt-2 text-6xl font-bold font-p'} >Alberto Di Maio
              </h2>
              <TypeAnimation
                className='mt-1 text-3xl text-[#b0b0b0] font-semibold font-p'
                sequence={[
                  "Full of Couriusity, Creativity", // Types 'One'
                  2400, // Waits 1s
                  "Backend Developer",
                  2400,
                  "Frontend Developer",
                  2400,
                  () => {
                    return // Place optional callbacks anywhere in the array
                  }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
              <h2 className={'mt-4 text-xl text-[#b0b0b0] font-semibold font-p'} >My mom says I'm the best dev in my condo.</h2>
              <div className='pt-14'>
                <button 
                  onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} 
                  className='rounded-md p-4 text-[white] bg-[#4ca14c] text-lg font-medium font-p' >More about me
                </button>
              </div>
            </div>
          </div>
        </div>
        <div ref={aboutRef}>
          <div style={{ paddingBottom: 184, paddingTop: 184 }}>
            <div>
              <h2 style={{ color: 'white' }} className={'mt-2 text-5xl font-bold font-p'}>
                About
                <div style={{ backgroundColor: '#4ca14c' }} className='w-40 mt-1 h-2' ></div>
              </h2>
              <div>
                <h2 style={{ maxWidth: 940 }} className='mt-14 text-lg text-[#b0b0b0] font-regular font-p'>
                    Alberto Di Maio, Full-stack developer. <br />
                    I like to describe myself using two adjectives: <br />
                    <b>curious & creative.</b> <br /> <br />

                    My favourite passion is building products and the perfect way for me to build them by doing something 
                    I loved was to become a software developer. <br /> <br />
                    I started <b>building</b> a lot of projects and working as Freelance Full-Stack developer. <br />
                    I've been programming since I was 16 and I've always learnt everything by myself. <br />
                    I really love what I do and that's the most important thing. <br /> <br />

                    I love trying new things and challenge myself because It makes me grow a lot. <br />
                    I like creating goals, working on them and reaching them. <br />
                    I love my my perseverance, I don’t like giving up and I work on my goals until I reach them. <br />
                    I love working with people and share ideas. <br />

                    I also love learning new things to improve my skills and become the best version of myself.
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
              <h2 style={{ color: 'white' }} className={'mt-2 text-5xl font-bold font-p'}>
                Skills
                <div style={{ backgroundColor: '#4ca14c' }} className='w-40 mt-1 h-2' ></div>
              </h2>
              <div className='flex-wrap flex-wrap-box pt-14'>
                {
                  skills.map(skill => (
                    hover == skill.name ? (
                      <div className='cursor-pointer mt-10'>
                        <div onMouseLeave={() => setHover("")} className='rounded-lg bg-[#152415]'>
                          <div className='pb-1 p-10'>
                            {skill.icon}
                          </div>
                          <div className='p-4'>
                            <h2 className='text-lg text-[#b0b0b0] font-medium font-p'>{skill.name}</h2>
                            <div 
                              style={{ height: 14, width: '100%' }} 
                              className='bg-opacity-40 mt-1 bg-[white]'
                            >
                              <div 
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
          <div style={{ paddingBottom: 184, paddingTop: 184 }}>
            <div>
              <h2 style={{ color: 'white' }} className={'mt-2 text-5xl font-bold font-p'}>
                Projects
                <div style={{ backgroundColor: '#4ca14c' }} className='w-60 mt-4 h-2' ></div>
              </h2>
              <div className='pt-14'>
                {
                  projects.map(project => (
                    <div className='p-8'>
                      <div 
                        style={{ justifyContent: project.right ? 'space-between' : '' }} 
                        className='project-flex rounded-lg p-8 bg-[#152415]'
                      >
                        {
                          project.right ? (
                            <div className='padding-l-no none-flex items-center justify-around'>
                              <img 
                                width={640} 
                                className='rounded-lg'
                                src={require("./images/" + project.image)} 
                                alt="" 
                              />
                            </div>
                          ) : (
                            <div className='flex padding-r-no items-center justify-around'>
                              <img 
                                width={640} 
                                className='rounded-lg' 
                                src={require("./images/" + project.image)} 
                                alt="" 
                              />
                            </div>
                          )
                        }
                        <div>
                          <h2 style={{ color: 'white' }} className={'mt-2 text-3xl font-bold font-p'}>
                            {project.name}
                            <div style={{ backgroundColor: '#4ca14c' }} className='w-40 mt-1 h-1' ></div>
                          </h2>
                          <div className='pt-4 flex'>
                            {
                              project.icons.map(icon => (
                                <div onClick={() => {
                                  window.scrollTo({ top: 1634, left: 0, behavior: "smooth" })
                                  setHoverable(false)
                                  setHover(icon.name)
                                  setTimeout(() => {
                                    setHoverable(true)
                                  }, 1400)
                                }} className='pl-0 p-2'><div className='cursor-pointer'>{icon.icon}</div></div>
                              ))
                            }
                          </div>
                          <div className='pt-8'>
                            <h2 style={{ maxWidth: 340, color: 'white' }} className={'mt-2 text-md font-regular font-p'}>
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
                                    className='hover:bg-[#3d9c3d] transition-all hover:mt-2 items-center 
                                    flex rounded-md p-4 text-[white] bg-[#4ca14c] font-medium font-p' >
                                    <div className='pr-2'>
                                      <TbUnlink size={24} />
                                    </div> Website
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
                                  className='hover:bg-[#3d9c3d] transition-all hover:mt-2 items-center 
                                  flex rounded-md p-4 text-[white] bg-[#4ca14c] font-medium font-p' >
                                  <div className='pr-2'>
                                    <TbUnlink size={24} />
                                  </div> Project
                                </button>
                              </a>
                            </div>
                            }
                          </div>
                        </div>
                        {
                          project.right &&
                          <div className='toNone padding-l-no flex items-center justify-around'>
                            <img width={640} className='rounded-lg' src={require("./images/" + project.image)} alt="" />
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
              <div className='p-4'><a target='_blank' href="https://twitter.com/TheAlbeDim"><SiTwitter size={24} color='gray' /></a></div>
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
