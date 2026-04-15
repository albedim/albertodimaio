export const ContainerWithVerticalBorders = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <div className={`max-w-172.5 mx-2 sm:mx-8 md:mx-auto relative ${className}`} 
       style={{ backgroundImage: `repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px), repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)`, backgroundSize: '1px 100%, 1px 100%', backgroundPosition: 'left top, right top', backgroundRepeat: 'no-repeat' }}>
    {children}
  </div>
);

export const HorizontalDivider = () => (
  <div className="w-full h-px" style={{ backgroundImage: `repeating-linear-gradient(to right, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)`, backgroundSize: '100% 1px', backgroundRepeat: 'no-repeat' }} />
);

export const ViewAllButton = ({ href }: { href?: string }) => (
  <div 
    className="max-w-172.5 mx-2 sm:mx-8 md:mx-auto relative p-2" 
    style={{ backgroundImage: `repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px), repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)`, backgroundSize: '1px 100%, 1px 100%', backgroundPosition: 'left top, right top', backgroundRepeat: 'no-repeat' }}>
    <div className="flex items-center justify-center select-none">
      <a className="w-fit border rounded-[10px] border-border p-0.5 group cursor-pointer" href={href}>
        <div className="flex gap-1 items-center justify-center rounded-lg border border-border w-full h-full px-2.5 py-1 bg-non-hover group-hover:bg-hover transition duration-300 text-background">
          <span className="text-background text-[0.95rem] font-medium">View All</span>
          <span className="flex items-center group-hover:scale-125 transition-transform duration-300">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-background" height="17.5" width="17.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </span>
        </div>
      </a>
    </div>
  </div>
);

export const SectionHeader = ({ title }: { title: string }) => (
  <SectionWithBorder>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="text-[1.15rem] font-bold leading-tight text-title">{title}</h1>
      </div>
    </div>
  </SectionWithBorder>
);

export const SectionWithBorder = ({ children }: { children?: React.ReactNode }) => (
  <>
    <div className="max-w-172.5 mx-2 sm:mx-8 md:mx-auto relative p-3" 
         style={{ backgroundImage: `repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px), repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)`, backgroundSize: '1px 100%, 1px 100%', backgroundPosition: 'left top, right top', backgroundRepeat: 'no-repeat' }}>
      {children}
    </div>
    <div className="w-full h-px" style={{ backgroundImage: `repeating-linear-gradient(to right, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)`, backgroundSize: '100% 1px', backgroundRepeat: 'no-repeat' }} />
  </>
);