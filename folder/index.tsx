import { useState } from 'react';
import { ContainerWithVerticalBorders, HorizontalDivider, ViewAllButton } from '../sections';

interface ProjectsProps {
  showButton: boolean;
  limit: boolean;
}

const Projects: React.FC<ProjectsProps> = (props) => {

  const PROJECTS = [
    { 
      name: "Kodegee",
      status: "Building",
      description: "On a Mission to Make Open Source more Accessible. Discover projects. Track your contributions. Collaborate",
      image: "/images/projects/kodegee_bg.png",
      screenshot: "/images/projects/kodegee.png",
      link: {
        name: "Website",
        url: "https://kodegeefe.pages.dev"
      }, 
      github: null
    },
    { 
      name: "Bliddo",
      status: "Live",
      description: "Empowers businesses and individuals to generate custom QR codes and gain real-time insights for every scan.",
      image: "/images/projects/bliddo_bg.png",
      screenshot: "/images/projects/bliddo.png",
      link: { 
        name: "Website",
        url: "https://bliddofe.pages.dev"
      },
      github: null
    },
    { 
      name: "Better Presence",
      status: "Live",
      description: "Create and customize your Discord activities effortlessly with our intuitive platform.",
      image: "/images/projects/betterpresence_bg.png",
      screenshot: "/images/projects/betterpresence.png",
      link: { 
        name: "Website",
        url: "https://betterpresence-fe.pages.dev"
      },
      github: null
    },
    {
      name: "Fine Tuning Project",
      status: "Live",
      description: "Worked on fine-tuning open-source LLMs in collaboration with fellow students.",
      image: "/images/project/background/bg3.avif",
      screenshot: "/images/projects/github.png",
      link: {
        name: "Paper",
        url: "https://bliddo.com"
      },
      github: {
        name: "Repo",
        url: ""
      }
    },
    { 
      name: "Logo Detection (SIFT)",
      status: "Live",
      description: "Built a logo recognition pipeline using SIFT features and homography validation",
      image: "/images/project/background/bg4.png",
      screenshot: "/images/projects/github.png",
      link: {
        name: "Paper",
        url: "https://bliddo.com"
      },
      github: {
        name: "Repo",
        url: ""
      }
    },
  ];

  const [actualLimit] = useState(props.limit ? 4 : PROJECTS.length);

  return (
    <>
      <ContainerWithVerticalBorders>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-0">
          <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 z-0 hidden md:block"><div className="h-full w-px" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)', backgroundSize: '1px 100%' }}></div></div>
          {PROJECTS.slice(0, actualLimit).map((p) => (
            <div key={p.name} className="">
              <div className="relative z-10 p-3">
                <div className="flex flex-col gap-2 cursor-pointer group w-full">
                  <div className="p-1 rounded-[10px] border border-border">
                    <div className="relative w-full bg-muted-background rounded-md border border-border h-42.5 sm:h-50 overflow-hidden select-none">
                      <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `url(${p.image})` }}></div>
                      <h1 className="absolute top-2 left-2 text-xs text-muted-foreground group-hover:text-black font-medium transition-all duration-300 group-hover:left-1/2 group-hover:-translate-x-1/2">{p.status === "Building" ? "Coming Soon" : p.name}</h1>
                      <div className="bg-background rounded-t-md absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[75%] group-hover:h-[70%] transition-all duration-300 p-0.5 pb-0">
                        <div className="w-full h-full rounded-t-sm overflow-hidden">
                          <img alt="Screenshot" className="w-full h-full object-cover" src={p.screenshot} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[1.10rem] leading-[1.10] text-title font-bold">{p.name}</h3>
                      <div className="flex items-center gap-1 select-none">
                        <div className="relative flex items-center justify-center">
                          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping group-hover:hidden ${p.status === 'Live' ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: 10, height: 10, borderRadius: '50%', opacity: 0.4 }}></div>
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className={`relative z-10 ${p.status === 'Live' ? 'text-green-500' : 'text-red-500'}`} height="14" width="14"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">{p.status}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                    <div className='flex gap-4 items-center'>
                      {p.link && (
                        <a href={p.link.url} target="_blank" rel="noopener noreferrer">
                          <div className="flex items-center gap-1 select-none">
                            <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-title">See {p.link.name}</p>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="14" width="14" className="text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-title"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                          </div>
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github.url} target="_blank" rel="noopener noreferrer">
                          <div className="flex items-center gap-1 select-none">
                            <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-title">Go to {p.github.name}</p>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="14" width="14" className="text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-title"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="block md:hidden w-full h-px" style={{ backgroundImage: 'repeating-linear-gradient(to right, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)', backgroundSize: '100% 1px' }}></div>
            </div>
          ))}
        </div>
        <div className="hidden md:block w-full h-px" style={{ backgroundImage: 'repeating-linear-gradient(to right, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)', backgroundSize: '100% 1px' }}></div>
      </ContainerWithVerticalBorders>
      <HorizontalDivider />
      {props.showButton ? (
        <ContainerWithVerticalBorders className="mx-0! w-full! max-w-none! border-none bg-none!">
          <ViewAllButton href="/projects" />
        </ContainerWithVerticalBorders>
      ):null}
    </>
  );
};

export default Projects;