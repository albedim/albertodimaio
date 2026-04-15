import { ContainerWithVerticalBorders, HorizontalDivider } from '../sections';

const Blog = () => {

  const BLOGS = [
    {
      title: "Example",
      date: "Jan 2025",
      views: 0,
      tags: ["1", "2"],
      link: ""
    }
  ];

  return (
    <ContainerWithVerticalBorders>
      <div className="flex flex-col">
        {BLOGS.map((blog, i) => (
          <div key={i}>
            <div className="m-1">
              <a
                href={blog.link}
                target="_blank"
                className="flex items-center justify-between group hover:bg-bg-hover transition-colors duration-300 p-3"
              >
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[1rem] leading-[1.60] font-bold text-title">{blog.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground select-none">
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="14" width="14">
                      <path 
                        d="M8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13Z"
                        fill="currentColor">
                      </path>
                      <path
                        d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8Z"
                        fill="currentColor">
                      </path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="
                        M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 
                        4.34315 19.6569 3 18 3H6ZM18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 
                        19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5Z"
                        fill="currentColor">
                      </path>
                    </svg>
                    <p className="text-xs font-medium">{blog.date}</p>
                  </div>
                  <div className="flex items-center gap-1 select-none">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 256 256"
                        height="14"
                        width="14"
                      >
                        <path
                          d="M247.31,124.76c-.35-.79-8.52-19.17-29.57-39.93C194.57,61.64,158.04,40,128,40S61.43,61.64,38.26,84.83C17.21,105.59,
                          9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.52,19.17,29.57,39.93C61.43,194.36,97.96,216,128,216s66.57-21.64,89.74-44.83c21.05-20.76,
                          29.22-39.15,29.57-39.93A8,8,0,0,0,247.31,124.76ZM128,200c-25.82,0-57.17-18.24-78.18-39.07C32.14,143.4,26.1,129.53,24.76,128c1.34-1.53,
                          7.38-15.4,25.06-32.93C70.83,74.24,102.18,56,128,56s57.17,18.24,78.18,39.07C223.86,112.6,229.9,126.47,231.24,128,229.9,129.53,223.86,
                          143.4,206.18,160.93,185.17,181.76,153.82,200,128,200Zm0-112a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,
                          1,128,152Z">
                        </path>
                      </svg>
                      <p className="text-xs font-medium">{blog.views}</p>
                    </div>
                    <span className="mx-1.5 w-px h-4 bg-border inline-block align-middle select-none"></span>
                    <div className="flex gap-1.5">
                      {blog.tags.map(t => (
                        <span
                          key={t}
                          className="text-xs text-foreground bg-zinc-50 dark:bg-zinc-900 px-1.5 py-0.5 rounded-sm border border-border"
                        >{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="group-hover:rotate-45 transition-all duration-300 text-muted group-hover:text-title"
                    height="18"
                    width="18"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </a>
            </div>
            <HorizontalDivider />
          </div>
        ))}
          <ContainerWithVerticalBorders className="mx-0! w-full! max-w-none! border-none p-2! bg-none!">
          <div
            className="flex items-center justify-center select-none"
          >
            <a className="w-fit border rounded-[10px] border-border p-0.5 group cursor-pointer">
              <div className="
                flex gap-1 items-center justify-center rounded-lg border border-border w-full h-full px-2.5 py-1 
                bg-non-hover group-hover:bg-hover transition duration-300 text-background"
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
      </div>
    </ContainerWithVerticalBorders>
  );
};

export default Blog;