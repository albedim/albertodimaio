import { TfiClose, TfiEmail, TfiMenu } from 'react-icons/tfi'
import { TbUnlink, TbWorldWww } from 'react-icons/tb'
import { BiLogoSpringBoot, BiLogoFlask, BiLogoPython, BiLogoTailwindCss, BiLogoPhp, BiLogoMongodb, BiLogoTypescript, BiSolidEdit, BiMenu } from 'react-icons/bi'
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiTwitter } from 'react-icons/si'
import { FaCode, FaGithub, FaHamburger, FaLaptopCode, FaLinkedin } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import { IoIosMenu, IoLogoJavascript, IoMdClose } from 'react-icons/io'
import { GrClose, GrReactjs } from 'react-icons/gr'
import { ImHtmlFive, ImCss3, ImMenu } from 'react-icons/im'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage'
import NewsLetter from './pages/newsletter'
import Education from './pages/education'
import Projects from './pages/projects'
import Skills from './pages/skills'
import NotFound from './pages/not_found'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/*' element={<NotFound/>}/>
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;