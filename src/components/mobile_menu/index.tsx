import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Flag from "react-world-flags";
import { data } from "../../config/config";
import { TfiMenu } from "react-icons/tfi";
import { LanguagesType } from "../../types";
import { IoMdClose } from "react-icons/io";

interface MobileMenuProps{
  language: LanguagesType;
  selectedPage: string;
  visible: boolean;
  setMenu: () => void;
  onHomeClick: () => void;
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ( props ) => {

  return (
    <div
        style={{ display: props.visible ? 'block' : 'none' }} 
        className='z-50 top-0 bg-[white] border right-0 h-screen w-4/5 fixed'
      >
        <div className='h-10'></div>
        <div className='p-6'  >
          <IoMdClose
            onClick={props.setMenu} 
            size={24} 
            color='gray'
          />
        </div>
        <ul>
          <li 
            onClick={() => { 
              window.scrollTo({ top: 0, behavior: 'smooth' });
              props.setMenu() 
            }} 
            style={{ color: props.selectedPage == 'home' ? 'black' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              {data[props.language].menu.home}
              <div 
                style={{ backgroundColor: props.selectedPage == 'home' ? '#4ca14c' : 'transparent' }} 
                className='h-1' >
              </div>
            </div>
          </li>
          <li 
            onClick={props.onAboutClick} 
            style={{ color: props.selectedPage == 'about' ? 'black' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              {data[props.language].menu.about}
              <div 
                style={{ backgroundColor: props.selectedPage == 'about' ? '#4ca14c' : 'transparent' }} 
                className='h-1' >
              </div>
            </div>
          </li>
          <li
            onClick={props.onSkillsClick} 
            style={{ color: props.selectedPage == 'skills' ? 'black' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              {data[props.language].menu.skills}
              <div 
                style={{ backgroundColor: props.selectedPage == 'skills' ? '#4ca14c' : 'transparent' }} 
                className='h-1' > 
              </div>
            </div>
          </li>
          <li
            onClick={props.onProjectsClick} 
            style={{ color: props.selectedPage == 'projects' ? 'black' : 'gray' }} 
            className={'cursor-pointer items-center flex p-8 font-large font-p'}
          >
            <div>
              {data[props.language].menu.projects}
              <div 
                style={{ backgroundColor: props.selectedPage == 'projects' ? '#4ca14c' : 'transparent' }} 
                className='h-1' > 
              </div>
            </div>
          </li>
          <li 
            style={{ color: props.selectedPage == 'contactme' ? 'white' : 'gray' }} 
            className={'items-center flex p-8 font-medium font-p'}
          >
            <a href="mailto:albertodimaio05@gmail.com">
              <button className='rounded-md p-4 text-[white] bg-[#4ca14c] font-medium font-p' >
              {data[props.language].menu.contact_me}
              </button>
            </a>
          </li>
        </ul>
    </div>
  );
}

export default MobileMenu