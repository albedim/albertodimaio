import React, { useEffect } from "react";
import { BiBook, BiBrain, BiBulb, BiPackage, BiSolidSchool, BiUser } from "react-icons/bi";
import { BsAppIndicator, BsLinkedin, BsPerson, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaIdeal, FaLanguage, FaLinkedin } from "react-icons/fa";
import { TbMail, TbPrompt, TbSchool } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import NavigationElement from "../../components/navigation_element";
import { GrConnect, GrDocumentNotes, GrDocumentPdf, GrDocumentPpt, GrGithub, GrResume } from "react-icons/gr";
import { TfiEmail, TfiLightBulb } from "react-icons/tfi";
import { ImMail } from "react-icons/im";
import { IoMdSchool } from "react-icons/io";
import { EDUCATION } from "../../consts";

const Education = () => {

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
        <div className="md:hidden block mb-4">
          <a href="https://albedim.pythonanywhere.com/cv">
            <GrDocumentPdf color="#83d656" className="text-lg"/>
          </a>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <TbPrompt color="#83d656" size={24}/>
            <p className="text-[#83d656] md:text-sm text-[13.4px]" >albertodimaio.com/education ~ main</p>
            <div style={{ display: cursorDisplayVisible ? "block" : "none" }} className="bg-[#83d656] w-[3px] h-4"></div>
          </div>
          <div className="md:block hidden">
            <a href="https://albedim.pythonanywhere.com/cv">
              <GrDocumentPdf color="#83d656" className="text-lg"/>
            </a>
          </div>
        </div>
        <div className="mt-6 ml-1">
          <p className="md:text-sm text-md text-[#818896]">→ education</p>
          {EDUCATION.map((education) => (
            <div className="bg-[#121214] mt-6 p-5 max-w-[740px] border border-[#242426] rounded-lg">
              <div className="flex text-[#83d656] items-center gap-3">
                <div className="text-[34px] md:block hidden">{education.icon}</div>
                <div>
                  <div className="md:hidden flex mb-2 items-center">
                    <div className="rounded-sm flex justify-around items-center p-[3px] pl-[4px] pr-[4px] bg-[#1d1d20]">
                      <p className="text-[10.4px] text-[#818896] font-medium">{education.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <p className="text-xl">{education.title.label}</p>
                    <div className="flex md:block hidden items-center">
                      <div className="rounded-sm flex justify-around items-center p-[3px] pl-[4px] pr-[4px] bg-[#1d1d20]">
                        <p className="text-[10.4px] text-[#818896] font-medium">{education.date}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#818896] text-sm mt-1 max-w-[674px]">{education.description}</p>
                  <p className="text-[#818896] text-sm mt-1 max-w-[674px]">{education.grade}</p>
                  <div className="flex text-lg hover:underline items-center mt-2 gap-2">
                    <div><BiBulb/></div>
                    <a href={education.skills.url} className="text-[#83d656] text-sm">
                      <p className="text-[#818896] text-sm mt-1 max-w-[540px]">{education.skills.label}</p>
                    </a>
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

export default Education;