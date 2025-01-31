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

const NotFound = () => {

  const [cursorDisplayVisible, setCursorDisplayVisible] = React.useState(true);
  
  useEffect(() => {
    const interval = setInterval(async () => {
      setCursorDisplayVisible((c) => !c);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#09090b] h-screen w-screen flex pt-[64px] pb-[64px] pl-8 pr-8 justify-center">
      <div>
        <div>
          <div className="flex md:w-[740px] items-center gap-2">
            <div><TbPrompt color="#83d656" size={24}/></div>
            <p className="text-[#83d656] text-sm" >albertodimaio.com{window.location.pathname} ~ main</p>
          </div>
          <div className="flex mt-4 md:w-[540px] items-center gap-2">
            <div><TbPrompt color="red" size={24}/></div>
            <p className="text-[red] text-sm" >ERROR: The path '{window.location.pathname}' was not found, maybe it doesn't exist or we're working on it!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;