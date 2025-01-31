import React, { useEffect } from "react";
import { BiBook, BiBrain, BiBulb, BiLinkExternal, BiPackage, BiSolidSchool, BiUser } from "react-icons/bi";
import { BsAppIndicator, BsEye, BsLinkedin, BsPerson, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaIdeal, FaLanguage, FaLinkedin } from "react-icons/fa";
import { TbMail, TbPrompt, TbSchool } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import NavigationElement from "../../components/navigation_element";
import { GrConnect, GrGithub } from "react-icons/gr";
import { TfiEmail, TfiLightBulb } from "react-icons/tfi";
import { ImMail } from "react-icons/im";
import { IoMdSchool } from "react-icons/io";
import { EDUCATION, projects } from "../../consts";

const Projects = () => {

  const [cursorDisplayVisible, setCursorDisplayVisible] = React.useState(true);
  
  useEffect(() => {
    const interval = setInterval(async () => {
      setCursorDisplayVisible((c) => !c);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#09090b] h-full w-screen flex pt-[64px] pb-[64px] pl-8 pr-8 justify-center">
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <TbPrompt color="#83d656" size={24}/>
            <p className="text-[#83d656] text-sm" >albertodimaio.com/projects ~ main</p>
            <div style={{ display: cursorDisplayVisible ? "block" : "none" }} className="bg-[#83d656] w-[3px] h-4"></div>
          </div>
        </div>
        <div className="mt-6 ml-1">
          <p className="md:text-sm text-md text-[#818896]">→ projects</p>
          {projects.map((project) => (
            <div className="bg-[#121214] mt-6 p-5 hover:border-[#83d656] transition-all max-w-[740px] border border-[#242426] rounded-lg">
              <div className="text-[#83d656] items-center gap-3">
                <div className="flex text-[#83d656] items-center gap-3">
                  <BiBulb size={31.4}/>
                  <p className="text-xl">{project.name}</p>
                </div>
                <p className="text-[#818896] mt-2 text-sm mt-1 md:max-w-[740px]">{project.description}</p>
                <p className="text-[#818896] mt-4 text-sm mt-1 md:max-w-[740px]">$see --stack</p>
                <div className="flex flex-wrap pt-2 gap-2">
                  {project.skills.map((skill) => (
                    <div className="flex items-center">
                      <div className="rounded-sm flex justify-around items-center p-[3px] pl-[4px] pr-[4px] bg-[#1d1d20]">
                        <p className="text-[11.4px] text-[#818896] font-medium">{skill}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.links.overview ? (
                    <div className="flex border border-[#83d656] rounded-md p-2 transition-all hover:bg-opacity-10 bg-[#09090b] items-center mt-8 gap-2">
                      <a href={project.links.link_overview} target="_blank">
                        <div className="flex text-sm items-center gap-2">
                          <BiLinkExternal/>
                          <p>Open website</p>
                        </div>
                      </a>
                    </div>
                  ):null}
                  {project.links.code ? (
                    <div className="flex border border-[#83d656] rounded-md p-2 transition-all hover:bg-opacity-10 bg-[#09090b] items-center mt-8 gap-2">
                      <a href={project.links.link_github} target="_blank">
                        <div className="flex text-sm items-center gap-2">
                          <BiLinkExternal/>
                          <p>Open repository</p>
                        </div>
                      </a>
                    </div>
                  ):null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;