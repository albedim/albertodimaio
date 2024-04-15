import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Flag from "react-world-flags";
import { data } from "../../config/config";
import { TfiMenu } from "react-icons/tfi";
import { LanguagesType } from "../../types";

interface HeaderProps{
  setLanguage: (language: LanguagesType) => void;
  language: LanguagesType;
  selectedPage: string;
  setMenu: () => void;
  onHomeClick: () => void;
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
}

const Header: React.FC<HeaderProps> = ( props ) => {
  
  return (
    <header className="z-40 dark:bg-[#1c1c1c] p-menu pb-2 bg-[#fafafd] top-0 w-screen fixed justify-between p-8 items-center flex">
      <div className='items-center flex'>
        <FaLaptopCode size={34} color={"#4ca14c"} />
        <h2 className={'ml-4 dark:text-[white] font-medium font-p text-[black]'} >Alberto Di Maio</h2>
        {/*<div className='flex ml-4 items-center'>
          <Flag className='border rounded-sm' width={18} height={18} code={props.language.split("_")[1]} />
          <select 
            className='ml-1 outline-none font-p font-medium' 
            onChange={(e: any) => props.setLanguage(e.target.value)} 
            value={props.language} 
            id=""
          >
            <option value="it_IT">IT</option>
            <option value="en_US">EN</option>
          </select>
        </div>*/}
      </div>
      <div>
        <ul className='flex-none'>
          {props.selectedPage == 'home' ? (
            <li 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={'cursor-pointer text-[black] dark:text-[white] items-center flex ml-8 font-medium font-p'}
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
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={'cursor-pointer text-[gray] items-center flex ml-8 font-medium font-p'}
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
              className={'cursor-pointer text-[black] dark:text-[white] items-center flex ml-8 font-medium font-p'}
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
              className={'cursor-pointer text-[gray] items-center flex ml-8 font-medium font-p'}
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
              className={'cursor-pointer text-[black] dark:text-[white] items-center flex ml-8 font-medium font-p'}
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
              className={'cursor-pointer text-[gray] items-center flex ml-8 font-medium font-p'}
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
              className={'cursor-pointer text-[black] dark:text-[white] items-center flex ml-8 font-medium font-p'}
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
              className={'cursor-pointer text-[gray] items-center flex ml-8 font-medium font-p'}
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
            style={{ color: props.selectedPage == 'contactme' ? 'black' : 'gray' }} 
            className={'items-center flex ml-8 font-medium font-p'}
          >
            <a href="mailto:albertodimaio05@gmail.com">
              <button className='transition-all hover:bg-[#478B47] dark:text-[black] rounded-md p-4 text-[white] bg-[#4ca14c] font-medium font-p' >
                {data[props.language].menu.contact_me}
              </button>
            </a>
          </li>
        </ul>
        <TfiMenu onClick={props.setMenu} className='none-flex' size={24} color="gray" />
      </div>
    </header>
  );
}

export default Header