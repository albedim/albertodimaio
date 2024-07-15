import { TfiEmail, TfiMenu } from 'react-icons/tfi'
import { TbUnlink, TbWorldWww } from 'react-icons/tb'
import { BiLogoSpringBoot, BiLogoFlask, BiLogoPython, BiLogoTailwindCss, BiLogoPhp, BiLogoMongodb, BiLogoTypescript, BiSolidEdit } from 'react-icons/bi'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTwitter } from 'react-icons/si'
import { FaCode, FaGithub, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
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
import Stepper from './components/stepper'
import Section from './components/section'


function App() {

  const [language, setLanguage] = useState<LanguagesType>("en_US")
  const [pageProjects, setPageProjects] = useState<any[]>()

  useEffect(() => {
    const prjs = projects(language)
    setPageProjects(prjs)
  }, [])

  return (
    <div className='flex p-8 md:p-0 overflow-x-hidden w-screen h-screen justify-around md:mt-24 mt-8'>
      <div>
        <div className='flex items-center'>
          <div>
            <h1 className='font-bold black text-2xl md:text-6xl' >Hi, I'm Alberto👋</h1>
            <p className='text-sm md:text-xl max-w-[514px] black mt-2'>Full-Stack Software Engineer, passionate of building and developing new projects.</p>
          </div>
          <div className='md:w-28 w-[214px] ml-[-24px] md:ml-4 md:h-28'>
            <img className='object-contain rounded-full' src={require("./images/albedim.png")} alt="" />
          </div>
        </div>
        <div className='md:mt-10 pt-4'></div>
        <Section title={data[language].about.title}>
          <p className='text-[#939393] text-sm max-w-[424px] md:max-w-[684px]' dangerouslySetInnerHTML={{ __html: data[language].about.content }} ></p>
        </Section>
        <Section title='Skills'>
          <div className='flex gap-2 flex-wrap md:max-w-[684px] max-w-[384px]'>
            {skills.map((skill, index) => (
              <div key={index} className='flex hover:bg-[#35cc58] text-[#35cc58] hover:text-[white] hover:opacity-80 p-2 border border-[#35cc58] shadow-sm rounded-md items-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                {skill.icon}
                <p className='ml-2 text-xs font-medium' >{skill.name}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section title='Projects'>
          <div className='flex gap-2 flex-wrap max-w-[684px]'>
            {pageProjects && pageProjects.map((project, index) => (
              <div key={index} className='w-80 border shadow-sm rounded-md'>
                <div className='w-full h-40'>
                  <img className='w-full object-cover rounded-t-md h-full' src={require("./images/" + project.image)} alt="" />
                </div>
                <div className='p-4'>
                  <div className='flex gap-2 mt-2 text-sm'>
                    {project.icons.map((icon: any, index: number) => (
                      <div key={index} >{icon.icon}</div>
                    ))}
                  </div>
                  <p className='mt-2 text-md font-semibold' >{project.name}</p>
                  <p className='mt-2 text-sm text-[#939393]' >{project.description}</p>
                  <div className='mt-6 flex gap-2'>
                    {project.links.overview && (
                      <a target='__blank' href={project.links.link_overview}>
                        <button className='flex p-2 items-center gap-2 rounded-md text-[white] pb-2 pt-2 blackbg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                          <TbWorldWww/>
                          <p className='text-sm'>Website</p>
                        </button>
                      </a>
                    )}
                    {project.links.code && (
                      <a target='__blank' href={project.links.link_github}>
                        <button className='flex p-2 items-center gap-2 rounded-md text-[white] pb-2 pt-2 blackbg transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                          <FaGithub/>
                          <p className='text-sm'>Repository</p>
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <div className='mt-24'></div>
        <div className='flex justify-around'>
          <div>
            <div className='flex justify-around'>
              <div>
                <h2 className='text-2xl black text-center font-bold' >Get In Touch</h2>
                <p className='text-lg max-w-[540px] text-center'>You can contact me on Twitter, connect with me on Linkedin or even Leave me a follow on Github!</p>
              </div>
            </div>
            <div className='mt-8 md:flex justify-around'>
              <div className='md:flex gap-6'>
                <a target='__blank' href="https://linkedin.com/in/alberto-di-maio-520531285/">
                  <button className='flex md:mb-0 mb-4 w-full border-[#35cc58] border hover:bg-[#35cc58] text-[#35cc58] hover:text-[white] justify-around w-40 p-2 gap-2 hover:opacity-80 pl-6 pr-6 text-white items-center rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                    <div className='flex items-center gap-2'>
                      <FaLinkedin/>
                      <p>Linkedin</p>
                    </div>
                  </button>
                </a>
                <a target='__blank' href="https://x.com/TheAlbeDim">
                  <button className='flex md:mb-0 mb-4 border border-[#35cc58] hover:bg-[#35cc58] text-[#35cc58] hover:text-[white] p-2 w-40 w-full justify-around gap-2 hover:opacity-80 pl-6 pr-6 text-white items-center rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                    <div className='flex items-center gap-2'>
                      <BsTwitterX/>
                      <p>Twitter/X</p>
                    </div>
                  </button>
                </a>
                <a target='__blank' href="https://github.com/albedim">
                  <button className='flex md:mb-0 mb-4 border-[#35cc58] border hover:bg-[#35cc58] text-[#35cc58] hover:text-[white] justify-around p-2 w-40 w-full gap-2 hover:opacity-80 pl-6 pr-6 text-white items-center rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                    <div className='flex items-center gap-2'>
                      <FaGithub/>
                      <p>FaGithub</p>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <div className='flex mt-10 border-b w-full justify-around'>
              
            </div>
            <div className='mt-10 flex justify-around gap-6'>
              <a className='md:w-auto w-full' target='__blank' href="mailto:albertodimaio05@gmail.com">
                <button className='flex w-full border-[#35cc58] border hover:bg-[#35cc58] text-[#35cc58] hover:text-[white] w-64 flex justify-around p-2 gap-2 hover:opacity-80 pl-6 pr-6 text-white items-center rounded-md transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                  <div className='flex items-center gap-2'>
                    <TfiEmail/>
                    <p>Send Me an E-mail</p>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='mt-24 flex justify-around pb-16'>
          <p>Made with ♥ by <span className='black'>albedim</span></p>
        </div>
      </div>
      <div className='absolute'>
        <Stepper>
          <a target='__blank' href="https://linkedin.com/in/alberto-di-maio-520531285/">
            <button className='border-2 hover:border-[#35cc58] opacity-[74%] hover:text-[#35cc58] transition-all text-[#939393] text-xl p-[10px] rounded-full border-[#939393]'>
              <FaLinkedin/>
            </button>
          </a>
          <a target='__blank' href="https://x.com/TheAlbeDim">
            <button className='border-2 hover:border-[#35cc58] opacity-[74%] hover:text-[#35cc58] transition-all text-[#939393] text-xl p-[10px] rounded-full border-[#939393]'>
              <BsTwitterX/>
            </button>
          </a>
          <a target='__blank' href="https://github.com/albedim">
            <button className='border-2 hover:border-[#35cc58] opacity-[74%] hover:text-[#35cc58] transition-all text-[#939393] text-xl p-[10px] rounded-full border-[#939393]'>
              <FaGithub/>
            </button>
          </a>
        </Stepper>
      </div>
    </div>
  )

}

export default App;