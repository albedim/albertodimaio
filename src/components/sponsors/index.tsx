import { ContainerWithVerticalBorders, HorizontalDivider } from '../sections';

const Sponsors = () => {

  const SPONSORS = [
    {
      name: "Example",
      amount: "00.00",
      image: "",
      github: "https://github.com/Example",
      twitter: "https://x.com/Example"
    },
  ];

  return (
    <ContainerWithVerticalBorders>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
        <div
          className="absolute left-1/2 top-0 h-full -translate-x-1/2 z-0 hidden md:block"
        >
          <div
            className="h-full w-px"
            style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)',
              backgroundSize: '1px 100%'
            }}
          ></div>
        </div>
        {SPONSORS.map((s) => (
          <div key={s.name}>
            <div className="relative z-10 p-3">
              <div className="relative flex h-full items-end gap-3 w-full border border-border rounded-xl p-2">
                <div className="flex flex-col gap-1">
                  <div className="h-full overflow-hidden flex flex-col gap-0.5 select-none border border-border rounded-lg p-1">
                    <img alt={s.name} className="size-20 rounded-t-md h-full object-cover border border-border" src={s.image} />
                    <span
                      className="
                        text-base border border-border rounded-b-md flex items-center justify-center font-bold text-green-600 
                        dark:text-green-400 shrink-0
                      "
                    >${s.amount}</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2.5 justify-between h-full items-start pb-1">
                  <h3 className="text-[1.10rem] leading-[1.10] text-title font-bold truncate">{s.name}</h3>
                  <div className="border border-border rounded-md p-1 flex flex-col gap-1 w-full">
                    {s.github && (
                      <a
                        href={s.github}
                        target="_blank"
                        className="
                          select-none flex items-center px-2 rounded-sm border border-border/40 py-0.5 bg-muted-background 
                          hover:bg-muted-background-hover group font-medium text-sm w-full transition-colors duration-300 
                          text-muted-foreground hover:text-foreground"
                      >
                        <span className="truncate">{s.name}</span>
                      </a>
                    )}
                    {s.twitter && (
                      <a
                        href={s.twitter}
                        target="_blank"
                        className="
                          select-none flex items-center px-2 rounded-sm border border-border/40 py-0.5 bg-muted-background 
                          hover:bg-muted-background-hover group font-medium text-sm w-full transition-colors duration-300 
                          text-muted-foreground hover:text-foreground"
                      >
                        <span className="truncate">Twitter</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="block md:hidden w-full h-px"
              style={{
                backgroundImage: 'repeating-linear-gradient(to right, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)',
                backgroundSize: '100% 1px'
              }}
            ></div>
          </div>
        ))}
      </div>
      <div
        className="hidden md:block col-span-2 w-full h-px"
        style={{
          backgroundImage: 'repeating-linear-gradient(to right, var(--line-color) 0px, var(--line-color) 6px, transparent 6px, transparent 14px)',
          backgroundSize: '100% 1px'
        }}
      ></div>
      <ContainerWithVerticalBorders className="mx-0! w-full! max-w-none! border-none p-2! bg-none!">
        <div
          className="flex items-center justify-center select-none"
        >
          <a className="w-fit border rounded-[10px] border-border p-0.5 group cursor-pointer">
            <div className="
              flex gap-1 items-center justify-center rounded-lg border border-border w-full h-full px-2.5 py-1 bg-non-hover group-hover:bg-hover 
              transition duration-300 text-background"
            >
              <span className="text-background text-[0.95rem] font-medium">View All</span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-[17.5px] group-hover:scale-125 transition-transform duration-300 text-background"
                height="1em"
                width="1em"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>
        </div>
      </ContainerWithVerticalBorders>
      <HorizontalDivider />
    </ContainerWithVerticalBorders>
  );
};

export default Sponsors;