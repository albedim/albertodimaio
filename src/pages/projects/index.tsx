import 'react-tooltip/dist/react-tooltip.css';
import { SectionHeader, SectionWithBorder } from '../../components/sections';
import Projects from '../../components/projects';

const ProjectsPage = () => {

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <div className="relative z-50 bg-background">
        <SectionWithBorder>
          <div className="w-full h-full sm:min-h-55 min-h-25 bg-dot-grid"></div>
        </SectionWithBorder>
      </div>
      <div className="relative z-50 bg-background">
        <SectionHeader title="Projects" />
        <div className="flex flex-col justify-between h-full py-1 select-none">
          <Projects limit={false} showButton={false} />
        </div>
      </div>
      <div className="relative z-50 bg-background transition-colors duration-300">
        <SectionWithBorder>
          <div className="w-full h-full sm:min-h-55 min-h-25 bg-dot-grid"></div>
        </SectionWithBorder>
      </div>
    </div>
  );
};

export default ProjectsPage;