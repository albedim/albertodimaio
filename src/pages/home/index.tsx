import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import Hero from '../../components/hero';
import { HorizontalDivider, SectionHeader, SectionWithBorder } from '../../components/sections';
import Experiences from '../../components/experiences';
import Projects from '../../components/projects';
import axios from 'axios';

const SKILLS = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "React Native", "Next", "Expo",
  "Python", "Flask", "Express JS", "Node Js", "Prisma", "MongoDB", "Postman", "PHP",
  "Web Sockets", "Tailwind", "Java", "C/C++", "MySQL", "PostgreSQL", "Git", "Github", "Linux"
];

const ContainerWithVerticalBorders = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <div className={`max-w-172.5 mx-2 sm:mx-8 md:mx-auto relative ${className}`} 
       style={{ backgroundImage: `repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px), repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)`, backgroundSize: '1px 100%, 1px 100%', backgroundPosition: 'left top, right top', backgroundRepeat: 'no-repeat' }}>
    {children}
  </div>
);

export const DotGrid = () => (
  <div className="w-full h-full sm:min-h-55 min-h-25 bg-dot-grid" />
);

const HomePage = () => {

  const [views, setViews] = React.useState<number>(0);
  const [response, setResponse] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  
  // 1. Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = React.useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  React.useEffect(() => {
    getViews();
  }, []);

  // 2. Effect to apply the class to the HTML element and save preference
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 3. Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const getViews = async () => {
    await axios.get("https://albedim.pythonanywhere.com/views")
    .then((response) => {
      setViews(response.data.short_views);
    })
  }
  
  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("https://albedim.pythonanywhere.com/subscribe", {
      email: email
    })
    .then((response) => {
      setResponse(response.data.message);
    })
    .catch((error) => {
      setResponse(error.response.data.message);
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
      <div className="relative z-50 bg-background transition-colors duration-300">
        <SectionWithBorder>
          <div className="w-full h-full sm:min-h-55 min-h-25 bg-dot-grid"></div>
        </SectionWithBorder>
      </div>
      <div className="relative z-50 bg-background transition-colors duration-300">
        <SectionWithBorder>
          <div className="flex items-stretch justify-between">
            <div className="flex items-end gap-3">
              <div className="border border-border rounded-xl p-1 cursor-pointer hover:brightness-90 transition duration-300">
                <img 
                  alt="Profile"
                  width="100" height="100"
                  className="rounded-lg size-22.5 select-none object-cover"
                  src="/images/logo/logo.png"
                />
              </div>
              <div className="flex flex-col justify-between h-full py-1 select-none">
                {/*
                <div className="mt-1 cursor-pointer w-fit">
                  <svg 
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-muted rotate-120 hover:text-foreground transition-all duration-300"
                    height="12"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="
                      M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 
                      192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 
                      39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 
                      182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z">
                    </path>
                  </svg>
                </div>*/}
                <div>
                  <h1 className="text-[1.55rem] font-bold leading-[1.08] text-title">Alberto Di Maio</h1>
                  <span className="text-muted-foreground text-sm">Full Stack Software Engineer</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-end justify-between">
              {/*
              <button
                onClick={toggleTheme}
                className="
                  relative w-fit z-10 cursor-pointer p-1.5 rounded-md hover:bg-muted-background border 
                  border-transparent hover:border-border transition-all duration-300 
                  text-muted hover:text-muted-foreground
                "
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? (
                  // Sun Icon (for Dark Mode)
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="16"
                    width="16"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                ) : (
                  // Moon Icon (for Light Mode)
                  <svg 
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    height="16" 
                    width="16"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                )}
              </button>*/}

              <div 
                className="flex items-center gap-1.5 font-medium text-muted hover:text-muted-foreground select-none transition-all duration-300">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="17"
                  width="17"
                >
                  <path 
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 
                       3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 
                       11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                  ></path>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>
                </svg>
                <span className="text-xs sm:text-sm tabular-nums">{views}</span>
              </div>
            </div>
          </div>
        </SectionWithBorder>
      </div>

      <main className="relative">
        
        <Hero/>
        <HorizontalDivider />
        <SectionHeader title="Experiences" />
        <Experiences limit={true} showButton={true} />
        <HorizontalDivider />
        <SectionHeader title="Projects" />
        <Projects limit={true} showButton={true} />
        <HorizontalDivider />
        <SectionHeader title="Skills & Technologies" />
        <ContainerWithVerticalBorders>
          <div className="p-3 flex flex-wrap items-center justify-center gap-2">
            {SKILLS.map(skill => (
              <a
                key={skill}
                className="
                  group relative flex-1 min-w-fit flex cursor-pointer items-center justify-center gap-2 
                  overflow-hidden rounded-lg border border-border bg-transparent text-muted-foreground px-2 py-1 
                  transition-all duration-300 hover:text-foreground/65 hover:border-foreground/65 
                  hover:bg-bg-hover-foreground select-none"
              >
                <span
                  className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground whitespace-nowrap"
                >
                  {skill}
                </span>
              </a>
            ))}
          </div>
          <HorizontalDivider />
        </ContainerWithVerticalBorders>

        <HorizontalDivider />
        <SectionHeader title="Newsletter" />
        <ContainerWithVerticalBorders>
          <div className="flex flex-col gap-4 p-4 sm:p-6 bg-striped">
            <form onSubmit={(e) => subscribe(e)} className="flex flex-col items-end sm:items-stretch sm:flex-row gap-3 w-full">
              <div className="flex-1 w-full border border-border rounded-[10px] p-0.5 bg-background">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" required className="flex-1 px-2.5 py-1.5 rounded-lg w-full border border-border bg-background text-foreground focus:outline-none disabled:opacity-50" />
              </div>
              <button type="submit" className="w-30 border cursor-pointer rounded-[10px] border-border p-0.5 group bg-background select-none">
                <div className="flex gap-1 items-center justify-center rounded-lg border border-border w-full h-full px-4 py-1 sm:py-0 bg-non-hover group-hover:bg-hover transition duration-300 text-[white]">
                  <span className="text-[0.95rem] text-[white] font-medium">Subscribe</span>
                </div>
              </button>
            </form>
          </div>
          <p>{response}</p>
          <HorizontalDivider />
        </ContainerWithVerticalBorders>

        <ContainerWithVerticalBorders>
          <div className="py-4 sm:py-6 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0"></div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="sm:text-4xl text-3xl text-muted/30 mb-4 sm:mb-6" height="1em" width="1em"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
            <blockquote className="relative z-10 max-w-2xl px-1 sm:px-4">
              <p className="text-xl sm:text-3xl font-bold italic text-title leading-relaxed tracking-tight">"Alberto, you're the best developer in this condo"</p>
            </blockquote>
            <div className="sm:mt-8 mt-6 flex items-center gap-3 z-10">
              <div className="h-px w-8 bg-muted/40"></div>
              <span className="text-xs sm:text-sm font-semibold text-muted uppercase tracking-widest">MY MOM</span>
              <div className="h-px w-8 bg-muted/40"></div>
            </div>
          </div>
          <HorizontalDivider />
        </ContainerWithVerticalBorders>

        <div className="h-full">
          <ContainerWithVerticalBorders className="h-full">
            <DotGrid />
          </ContainerWithVerticalBorders>
        </div>

      </main>

      <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 border rounded-[10px] group border-border p-0.5 shadow-lg transition-all duration-300 ease-in-out cursor-pointer bg-background">
        <div className="flex items-center justify-center rounded-lg border border-border w-full h-full p-1.5 bg-non-hover group-hover:bg-hover transition duration-300">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-6 text-[white]" height="1em" width="1em"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="m112 244 144-144 144 144M256 120v292"></path></svg>
        </div>
      </button>
    </div>
  );
};

export default HomePage;