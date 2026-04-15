import { useState } from "react";
import { EXPERIENCES } from "../../utils";
import { ContainerWithVerticalBorders, HorizontalDivider, ViewAllButton } from "../sections";

interface ExperiencesProps {
  showButton: boolean;
  limit: boolean;
}

const Experiences: React.FC<ExperiencesProps> = (props) => {

  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <>
      <ContainerWithVerticalBorders>
        <div className="flex flex-col">
          {EXPERIENCES.slice(0, props.limit ? 3 : EXPERIENCES.length).map((exp) => (
            <div key={exp.id}>
              <div className="m-1">
                <div 
                  className="flex flex-col transition-colors duration-300 hover:bg-bg-hover rounded-lg cursor-pointer"
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  <div className="flex p-3 flex-row gap-4 justify-between select-none group">
                    <div className="flex items-center gap-3 flex-1 truncate sm:truncate-none">
                      <div
                        className="
                          shrink-0 size-11 sm:size-12 rounded-[10px] border p-0.5 bg-background border-border 
                          flex items-center justify-center overflow-hidden"
                      >
                        <img alt={exp.company} className="w-full h-full object-cover border border-border rounded-lg" src={exp.logo} />
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        <div className="flex items-center gap-2">
                          <h3
                            className={`sm:text-[1.20rem] text-[1.05rem] leading-[0.90] font-semibold text-title ${exp.blur ? 'blur-[0.5px]' : ''}`}
                          >
                            {exp.company}
                          </h3>
                          {exp.type && (
                            <span className="px-1 py-0 text-xs font-medium border border-border text-muted-foreground rounded-sm">
                              {exp.type}
                            </span>
                          )}
                        </div>
                        <p className="sm:text-sm text-xs text-muted-foreground">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex flex-col items-end gap-1">
                        <p className="text-title font-medium sm:text-sm text-xs">{exp.period}</p>
                        <p className="text-muted-foreground sm:text-sm text-xs">{exp.location}</p>
                      </div>
                      <div className={`hidden sm:block transition-transform duration-300 ${expandedId === exp.id ? 'rotate-180' : ''}`}>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-title transition-colors duration-300" height="18" width="18">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedId === exp.id ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="ml-4 mt-1 pr-3 pb-3">
                      <div className="flex flex-col gap-2">
                        {exp.points?.map((point, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-muted shrink-0">•</span>
                            <p className="text-sm text-foreground leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 my-3 flex-wrap select-none">
                        {exp.tech?.map(t => (
                          // UPDATED: Changed dark:bg-zinc-50 to dark:bg-zinc-900 to fix white-text-on-white-bg issue
                          <span key={t} className="text-xs text-foreground bg-zinc-50 px-1.5 py-0.5 rounded-sm border border-border transition-colors duration-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </ContainerWithVerticalBorders>
      <HorizontalDivider />
      {props.showButton ? (
        <ContainerWithVerticalBorders className="mx-0! w-full! max-w-none! border-none bg-none!">
          <ViewAllButton href="/experiences" />
        </ContainerWithVerticalBorders>
      ):null}
    </>
  );
}

export default Experiences;