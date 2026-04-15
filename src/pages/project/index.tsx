import React from 'react';
import { ContainerWithVerticalBorders, HorizontalDivider, SectionWithBorder } from '../../components/sections';
import { PROJECTS } from '../../components/projects';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDetailsPage: React.FC = () => {

  const {projectID} = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);
  const [projectData, setProjectData] = React.useState<any>(null);

  const getProjectData = (projectID: number) => {
    const projectIndex = projectID - 1
    console.log("Project data found for project ID:", projectID);
    if (projectIndex >= 0 && projectIndex < PROJECTS.length) {
      setProjectData(PROJECTS[projectIndex]);
      setIsLoading(false);
    } else {
      navigate("/")
      setIsLoading(false);
    }
  };

  const link = (url: string) => () => {
    if (url) {
      window.open(url, "_blank");
    }
  }

  React.useEffect(() => {
    getProjectData(Number(projectID));
  }, [projectID]);

  if (isLoading) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans pb-12">
      <div className="relative z-50 bg-background transition-colors duration-300">
        <SectionWithBorder>
          <div className="w-full h-full sm:min-h-55 min-h-25 bg-dot-grid"></div>
        </SectionWithBorder>
      </div>
      <ContainerWithVerticalBorders className="px-4 py-4 sm:px-6">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => navigate("/")} className="flex cursor-pointer items-center gap-2 text-[1.10rem] font-bold text-title hover:opacity-80 transition-opacity">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Projects
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
        </div>
        <div className="w-full rounded-[10px] overflow-hidden border border-border">
          <img 
            src={projectData?.screenshot || "/images/projects/lunel_hero.png"}
            alt={projectData?.name || "Project Hero Image"} 
            className="w-full h-auto object-cover"
          />
        </div>
      </ContainerWithVerticalBorders>
      <HorizontalDivider />
      <ContainerWithVerticalBorders className='w-full'>
        <div className="flex justify-around items-center w-full">
          <ContainerWithVerticalBorders className='w-[50%] flex items-center justify-around'>
            <button onClick={link(projectData.github?.url || "#")} disabled={!projectData?.github} className={`flex items-center justify-center gap-2 py-3 text-md ${projectData?.github?.url ? 'text-muted-foreground cursor-pointer hover:text-title transition-colors' : 'text-muted-foreground/50 cursor-not-allowed'}`}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="14" width="14">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              Github
            </button>
          </ContainerWithVerticalBorders>
          <div className="w-px h-full" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)', backgroundSize: '1px 100%' }}></div>
          <ContainerWithVerticalBorders className='w-[50%] flex items-center justify-around'>
            <button onClick={link(projectData.link?.url || "#")} disabled={!projectData?.link} className={`flex items-center justify-center gap-2 py-3 text-md ${projectData?.link?.url ? 'text-muted-foreground cursor-pointer hover:text-title transition-colors' : 'text-muted-foreground/50 cursor-not-allowed'}`}>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              Website
            </button>
          </ContainerWithVerticalBorders>
        </div>
      </ContainerWithVerticalBorders>
      <HorizontalDivider />
      <ContainerWithVerticalBorders className="px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-[1.40rem] font-bold text-[black] leading-tight">{projectData?.name || "Project Name"}</h1>
            <div className="flex items-center gap-1.5 select-none">
              <div className="relative flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping bg-red-500" style={{ width: 8, height: 8, borderRadius: '50%', opacity: 0.4 }}></div>
                <div className="relative z-10 bg-red-500 rounded-full" style={{ width: 5, height: 5 }}></div>
              </div>
              <p className="text-[0.75rem] text-muted-foreground font-medium uppercase tracking-wider">{projectData?.status || "Building"}</p>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: projectData?.long_description || "" }} className="text-[1rem] text-muted-foreground flex flex-col gap-4 leading-relaxed"></div>
        </div>
      </ContainerWithVerticalBorders>
      <HorizontalDivider />
      <ContainerWithVerticalBorders className="px-4 py-4 w-full sm:px-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-[1rem] font-bold text-title">Stack used</h3>
          <div className="flex flex-wrap gap-2">
            {projectData.stackItems.map((stackItem: string) => (
              <a
                key={stackItem}
                className="
                  group relative flex-1 min-w-fit flex cursor-pointer items-center justify-center gap-2 
                  overflow-hidden rounded-lg border border-border bg-transparent text-muted-foreground px-2 py-1 
                  transition-all duration-300 hover:text-foreground/65 hover:border-foreground/65 
                  hover:bg-bg-hover-foreground select-none"
              >
                <span
                  className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground whitespace-nowrap"
                >
                  {stackItem}
                </span>
              </a>
            ))}
          </div>
        </div>
      </ContainerWithVerticalBorders>
      <HorizontalDivider />
      <div className="relative z-50 bg-background transition-colors duration-300">
        <SectionWithBorder>
          <div className="w-full h-full sm:min-h-55 min-h-25 bg-dot-grid"></div>
        </SectionWithBorder>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;