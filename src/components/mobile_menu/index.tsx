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
        className='z-50 top-0 dark:bg-[#1c1c1c] dark:border-[#3d3d3d] bg-[white] border right-0 h-screen w-4/5 fixed'
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
          {props.selectedPage == 'home' ? (
            <li
              onClick={props.onHomeClick}
              className={'cursor-pointer text-[black] dark:text-[white] items-center flex p-8 ml-8 font-medium font-p'}
            >
              <div>
                {data[props.language].menu.home}
                <div 
                  style={{ backgroundColor: props.selectedPage == 'home' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' > 
                </div>
              </div>
            </li>
          ):(
            <li 
              onClick={props.onHomeClick}
              className={'cursor-pointer text-[gray] items-center flex p-8 ml-8 font-medium font-p'}
            >
              <div>
                {data[props.language].menu.home}
                <div 
                  style={{ backgroundColor: props.selectedPage == 'home' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' > 
                </div>
              </div>
            </li>
          )}
          {props.selectedPage == 'about' ? (
            <li 
              onClick={props.onAboutClick}
              className={'cursor-pointer text-[black] dark:text-[white] items-center flex p-8 ml-8 font-medium font-p'}
            >
              <div>
                {data[props.language].menu.about}
                <div 
                  style={{ backgroundColor: props.selectedPage == 'about' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' > 
                </div>
              </div>
            </li>
          ):(
            <li 
              onClick={props.onAboutClick}
              className={'cursor-pointer text-[gray] items-center flex p-8 ml-8 font-medium font-p'}
            >
              <div>
                {data[props.language].menu.about}
                <div 
                  style={{ backgroundColor: props.selectedPage == 'about' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' > 
                </div>
              </div>
            </li>
          )}
          {props.selectedPage == 'skills' ? (
            <li 
              onClick={props.onSkillsClick}
              className={'cursor-pointer text-[black] dark:text-[white] items-center flex p-8 ml-8 font-medium font-p'}
            >
              <div>
                {data[props.language].menu.skills}
                <div 
                  style={{ backgroundColor: props.selectedPage == 'skills' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' > 
                </div>
              </div>
            </li>
          ):(
            <li 
              onClick={props.onSkillsClick}
              className={'cursor-pointer text-[gray] items-center flex p-8 ml-8 font-medium font-p'}
            >
              <div>
                {data[props.language].menu.skills}
                <div 
                  style={{ backgroundColor: props.selectedPage == 'skills' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' > 
                </div>
              </div>
            </li>
          )}
          {props.selectedPage == 'projects' ? (
            <li 
              onClick={props.onProjectsClick}
              className={'cursor-pointer text-[black] dark:text-[white] items-center flex p-8 ml-8 font-medium font-p'}
            >
              <div>
                {data[props.language].menu.projects}
                <div 
                  style={{ backgroundColor: props.selectedPage == 'projects' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' > 
                </div>
              </div>
            </li>
          ):(
            <li 
              onClick={props.onProjectsClick}
              className={'cursor-pointer text-[gray] items-center flex p-8 ml-8 font-medium font-p'}
            >
              <div>
                {data[props.language].menu.projects}
                <div 
                  style={{ backgroundColor: props.selectedPage == 'projects' ? '#4ca14c' : 'transparent' }} 
                  className='h-1' > 
                </div>
              </div>
            </li>
          )}
          <li 
            style={{ color: props.selectedPage == 'contactme' ? 'white' : 'gray' }} 
            className={'items-center flex p-14 font-medium font-p'}
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