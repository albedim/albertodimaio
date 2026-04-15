import ActivityCalendar from '../activity_calendar';
import { ContainerWithVerticalBorders } from '../sections';
import { Tooltip } from 'react-tooltip';

const Hero = () => {

  const SOCIALS = [
    {
      name: 'GitHub',
      url: 'https://github.com/albedim',
      iconPath: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
      viewBox: '0 0 496 512'
    },
    { 
      name: 'Twitter',
      url: 'https://x.com/intent/follow?screen_name=TheAlbeDim',
      iconPath: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
      viewBox: '0 0 512 512'
    },
    { 
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alberto-di-maio-520531285/',
      iconPath: 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z',
      viewBox: '0 0 448 512'
    },
  ];

  return (
    <ContainerWithVerticalBorders className="p-3">
      <div className="flex flex-col gap-2">
        <p>Hey, I'm Alberto, a curious and creative developer with a strong passion for building in the tech space. I’ve been freelancing and working on projects since 16, gaining hands-on experience across the full development lifecycle from design to deployment and maintenance.</p>
        <p>I enjoy tackling new challenges, setting ambitious goals, and following through with a focused, determined mindset. I value collaboration and continuous learning as key drivers of growth and innovation.</p>
        <div className="flex pt-2 gap-2 select-none">
          <a href="https://cal.com/albedim" target="_blank" className="w-fit flex items-center bg-non-hover hover:bg-hover transition-colors duration-300 gap-1.5 px-2.5 py-1.75 sm:py-1.5 text-background text-sm font-medium cursor-pointer rounded-[9px] group overflow-hidden border border-border">
            <div className="relative w-4 h-4 overflow-hidden text-background">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="absolute inset-0 transition-transform duration-400 ease-out group-hover:-translate-y-6" height="16" width="16"><path d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4zM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3zm344-208a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24z"></path></svg>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="absolute inset-0 translate-y-6 transition-transform duration-400 ease-out group-hover:translate-y-0" height="16" width="16"><path d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4zM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3zm344-208a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24z"></path></svg>
            </div>
            <span className="text-background">Book an intro call</span>
          </a>
          <a href="mailto:dimaio.albe@gmail.com" target="_blank" className="w-fit flex items-center gap-1.5 px-2.5 py-1.75 sm:py-1.5 bg-muted-background hover:bg-muted-background-hover transition-colors duration-300 text-sm text-foreground font-medium border cursor-pointer rounded-[9px] border-border group overflow-hidden">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="translate-y-0 group-hover:animate-[slideDown_0.5s_ease-out] transition-transform duration-300" style={{ animation: 'none' }} height="18" width="18"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path></svg>
            Send an email
          </a>
        </div>
        {/* Socials */}
        <div className="py-4.5 flex flex-col gap-2">
          <h1>Here are my <span className="font-bold text-title">socials</span></h1>
          <div className="flex gap-1.75 items-center flex-wrap">
            {SOCIALS.map(s => (
              <a key={s.name} href={s.url} target="_blank" className="flex items-center group px-2 py-1 bg-muted-background hover:bg-muted-background-hover transition-colors duration-200 select-none rounded-md">
                <span className="flex items-center">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox={s.viewBox} height="1em" width="1em"><path d={s.iconPath}></path></svg>
                </span>
                <span className="ml-1.5 text-sm font-medium text-foreground">{s.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center select-none">
        <div className="w-full max-w-fit overflow-hidden">
          <ActivityCalendar />
          <Tooltip id="react-tooltip" />
        </div>
      </div>
    </ContainerWithVerticalBorders>
  );
};

export default Hero;