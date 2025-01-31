import React, { useEffect } from "react";
import { BiBook, BiBrain, BiError, BiPackage, BiSolidError, BiUser } from "react-icons/bi";
import { BsAppIndicator, BsEye, BsLinkedin, BsPerson, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaIdeal, FaLanguage, FaLinkedin } from "react-icons/fa";
import { TbMail, TbPrompt, TbSchool } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import NavigationElement from "../../components/navigation_element";
import { GrClose, GrConnect, GrGithub } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { ImMail } from "react-icons/im";
import axios from "axios";
import { IoMdDoneAll } from "react-icons/io";
import { MdClose, MdDone, MdError } from "react-icons/md";

const Homepage = () => {

  const [cursorDisplayVisible, setCursorDisplayVisible] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [res, setRes] = React.useState({
    message: null,
    error: false
  });
  const [views, setViews] = React.useState(0);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);
  const about = `<h2>I'm a <b style="color: #83d656;">curious</b> and <b style="color: #83d656;">creative</b> guy who loves building things. For me, the most rewarding way to do this is in the tech field, where I’ve picked up software development skills along the way. I’ve been freelancing and working on <b style="color: #83d656;">numerous projects</b> since I was 16, learning mostly on my own and getting hands-on with everything. These projects have given me a chance to see every side of the process—from design and development to deployment and keeping things running smoothly.<br><br>I'm always up for trying new things and pushing myself because, let’s face it, that’s how real growth happens. I set <b style="color: #83d656;">goals</b> and dive into them with a laser-focused, determined attitude, making sure I see them through to the end. <b style="color: #83d656;">Perseverance</b> is my middle name (okay, not really, but it should be)—I don’t give up easily and I’ll keep going until I reach my goal.<br><br>I thrive on <b style="color: #83d656;">collaboration</b> and bouncing ideas off people because that’s where the magic happens—whether it’s learning something new or coming up with a game-changing solution. And yes, I’m all about continuous learning because who doesn’t want to be the best version of themselves?</h2>`

  useEffect(() => {
    const interval = setInterval(async () => {
      setCursorDisplayVisible((c) => !c);
    }, 500);

    getViews();
    return () => clearInterval(interval);
  }, []);

  const getViews = async () => {
    await axios.get("https://albedim.pythonanywhere.com/views")
    .then((response) => {
      setViews(response.data.views);
    }).catch((error) => {
      getViews();
    });
  }

  const subscribe = async () => {
    await axios.post("https://albedim.pythonanywhere.com/subscribe", {email})
    .then((response) => {
      setRes({message: response.data.message, error: false});
    }).catch((error) => {
      setRes({message: error.response.data.message, error: true});
    });
  }

  return (
    <div className="bg-[#09090b] h-full w-screen flex pt-[64px] pb-[64px] pl-8 pr-8 justify-center">
      <div>
        <div className="md:hidden block mb-4 text-[#83d656] flex items-center gap-1">
          <BsEye />
          <p className="text-sm">{views}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <TbPrompt color="#83d656" size={24}/>
            <p className="text-[#83d656] text-sm" >albertodimaio.com ~ main</p>
            <div style={{ display: cursorDisplayVisible ? "block" : "none" }} className="bg-[#83d656] w-[3px] h-4"></div>
            </div>
            <div className="md:flex hidden text-[#83d656] flex items-center gap-1">
              <BsEye />
              <p className="text-sm">{views}</p>
            </div>
        </div>
        <div className="mt-6 ml-1">
          <p className="md:text-sm text-md text-[#818896]">→ whoami</p>
          <h1 className="text-[#83d656] mt-3 md:text-4xl text-3xl font-semibold">Alberto Di Maio</h1>
          <TypeAnimation
                className='mt-2 md:text-lg text-md text-[#83d656]'
                sequence={[
                  "Software Engineer",
                  1000,
                  "Full-Stack Developer",
                  1000,
                  "Tech Enthusiast",
                  1000,
                  () => {
                    return
                  }
                ]}
                wrapper="div"
                speed={64}
                cursor={true}
                repeat={Infinity}
              />
          <div className="bg-[#121214] mt-6 p-5 max-w-[740px] border border-[#242426] rounded-lg">
            <p className="text-[#818896] text-[15px]">My mum says I'm the best dev in my condo but I'm just a Software Engineer that likes bringing innovative ideas into reality. Passionate of building and developing new projects.</p>
            <div className="md:mt-4 mt-6 flex text-[#83d656] gap-3 md:text-lg text-2xl">
              <a href="https://github.com/albedim" target="_blank"><FaGithub className="hover:text-[#75b354] transition-all"/></a>
              <a href="https://www.linkedin.com/in/alberto-di-maio-520531285/" target="_blank"><FaLinkedin className="hover:text-[#75b354] transition-all"/></a>
              <a href="https://x.com/TheAlbeDim" target="_blank"><BsTwitterX className="hover:text-[#75b354] transition-all"/></a>
            </div>
          </div>
        </div>
        <div className="mt-14 ml-1">
          <p className="md:text-sm text-md text-[#818896]">→ navigation</p>
          <div className="bg-[#121214] mt-6 p-5 max-w-[740px] border border-[#242426] rounded-lg">
            <NavigationElement
              icon={<BiUser/>}
              title="$read --about"
              description={"This is me in " + about.split(" ").length + " words"}
              onClick={() => aboutRef.current && aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
            />
            <NavigationElement
              icon={<TbSchool/>}
              title="$open --education"
              description="My academic background and Resume"
              path="/education"
            />
            <NavigationElement
              icon={<BiBrain/>}
              title="$open --projects"
              description="These are all my projects"
              path="/projects"
            />
            <NavigationElement
              icon={<BiPackage/>}
              title="$open --skills"
              description="Here's everything I can do"
              path="/skills"
            />
            <NavigationElement
              icon={<BiBook/>}
              title="$open --blog"
              description="My thoughts, ideas and publications"
              path="/blog"
            />
            <NavigationElement
              icon={<GrConnect/>}
              title="$read --contacts"
              description="Stay in touch with me"
              onClick={() => contactRef.current && contactRef.current.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
        <div ref={aboutRef} className="mt-24 ml-1">
          <p className="md:text-sm text-md text-[#818896]">/about</p>
          <div className="bg-[#121214] mt-6 p-5 max-w-[740px] border border-[#242426] rounded-lg">
            <div className="flex text-[#83d656] items-center gap-3">
              <BsPerson size={31.4}/>
              <p className="text-xl">About me</p>
            </div>
            <h2 dangerouslySetInnerHTML={{ __html: about }} className="text-[#818896] mt-4 text-sm" ></h2>
          </div>
        </div>
        <div ref={contactRef} className="mt-24 ml-1">
          <p className="md:text-sm text-md text-[#818896]">/contacts</p>
          <div className="bg-[#121214] mt-6 p-5 max-w-[740px] border border-[#242426] rounded-lg">
            <NavigationElement
              icon={<GrGithub/>}
              title="Github"
              path="https://github.com/albedim"
              description="Check out my Github to see my projects and my code"
            />
            <div className="h-2"></div>
            <NavigationElement
              icon={<BsLinkedin/>}
              title="Linkedin"
              path="https://www.linkedin.com/in/alberto-di-maio-520531285/"
              description="Follow my Linkedin to see my education and my professional goals"
            />
            <div className="h-2"></div>
            <NavigationElement
              icon={<BsTwitterX/>}
              title="Twitter/X"
              path="https://x.com/TheAlbeDim"
              description="Follow my Twitter to see my funny thoughts and my daily life"
            />
            <NavigationElement
              icon={<TbMail/>}
              title="E-mail"
              path="mailto:albertodimaio05@gmail.com"
              description="Send me an e-mail if you want to talk to me privately or for business"
            />
          </div>
          <div className="bg-[#e3ffe0] h-[174px] bg-opacity-10 mt-6 p-5 border border-[#658257] rounded-lg">
            <h2 className="font-semibold text-[17px] text-[#83d656]">Stay tuned</h2>
            <p className="text-[#658257] mt-1 text-sm">Don’t subscribe if you’re fine with mediocrity while I crush it.</p>
            <div className="mt-6 md:flex gap-4 w-full">
                {res.message != null ? (
                  <div className="flex items-center">
                    {res.error ? (
                      <div className="border-[red] border-2 text-[red] p-1 rounded-full">
                        <MdClose/>
                      </div>
                    ):(
                      <div className="border-[#83d656] border-2 text-[#83d656] p-1 rounded-full">
                        <MdDone/>
                      </div>
                    )}
                  </div>
                ):null}
              <input type="email" placeholder="Enter your e-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-md text-sm pl-4 pt-[18px] pb-[18px] border-[#83d656] border md:w-[324px] w-full h-8" />
              <button onClick={subscribe} disabled={!email.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')}className="bg-[#83d656] md:mt-0 mt-2 md:w-auto w-full enabled:hover:bg-opacity-80 transition-all p-[9px] text-sm text-[white] rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center mt-24">
          <p className="text-[#818896] text-md">Made with <span className="text-[#83d656]">♥</span> by albedim</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;