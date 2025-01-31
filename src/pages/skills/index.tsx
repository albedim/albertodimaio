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
import { EDUCATION, projects, skills } from "../../consts";

const Skills = () => {

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
            <p className="text-[#83d656] text-sm" >albertodimaio.com/skills ~ main</p>
            <div style={{ display: cursorDisplayVisible ? "block" : "none" }} className="bg-[#83d656] w-[3px] h-4"></div>
          </div>
        </div>
        <div className="mt-6 ml-1">
          <p className="md:text-sm text-md text-[#818896]">→ skills</p>
          {skills.map((skill) => (
            <div className="bg-[#121214] mt-6 p-5 md:w-[740px] w-[334px] border border-[#242426] rounded-lg">
              <div className="text-[#83d656] items-center gap-3">
                <div className="flex text-[#83d656] items-center gap-3">
                  <div className="text-5xl">{skill.icon}</div>
                  <div className="w-full">
                    <p className="text-xl">{skill.name}</p>
                    <div className="bg-[#1d1d20] w-full mt-2 h-4 rounded-md">
                      <div style={{ width: skill.value }} className="bg-[#83d656] bg-opacity-40 rounded-md h-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;