import 'react-tooltip/dist/react-tooltip.css';
import { HorizontalDivider, SectionHeader, SectionWithBorder } from '../../components/sections';
import Experiences from '../../components/experiences';


const ExperiencesPage = () => {

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <div className="relative z-50 bg-background">
        <SectionWithBorder>
          <div className="w-full h-full sm:min-h-55 min-h-25 bg-dot-grid"></div>
        </SectionWithBorder>
      </div>
      <div className="relative z-50 bg-background">
        <SectionHeader title="Experiences" />
        <div className="flex flex-col justify-between h-full py-1 select-none">
          <Experiences limit={false} showButton={false} />
          <HorizontalDivider />
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;