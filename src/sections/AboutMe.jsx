import HeaderBlock from "../ui/HeaderBlock";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiTailwindcss, SiMui, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiSanity } from "react-icons/si";

function AboutMe() {
  return (
    <section
      className="container flex flex-col lg:flex-row   justify-around w-full items-center py-10"
      id="about"
    >
      <img src="img/Vector.png" alt="Computer" className="w-[50%] h-[50%]" />
      <div className="w-full flex  flex-col sm:gap-14 gap-7 lg:text-right text-center">
        <HeaderBlock pereliv>ABOUT ME</HeaderBlock>
        <HeaderBlock>HI, I'M A DEDICATED FRONT-END DEVELOPER</HeaderBlock>
        <p>
          I am a frontend developer and have html, css, react, js skills. I am
          working hard on creating modern websites with a friendly user
          interface. I have experience writing web services that are optimized
          in their work using advanced technologies. I also like working in a
          team, thinking about problems, and most importantly about their
          solutions
        </p>
        <div className=" flex flex-wrap w-full gap-4 items-center justify-end text-[30px]">
          <p>Tech stack | </p>
          <div className="flex items-center gap-1 text-base hover:-translate-y-1 bg-white dark:bg-slate-600 rounded-full px-2 py-1 cursor-pointer">
            <FaReact className=" dark:text-[#00dcfe]" />
            <p>React</p>
          </div>
          <div className="flex items-center gap-1 text-base hover:-translate-y-1 bg-white dark:bg-slate-600 rounded-full px-2 py-1 cursor-pointer">
            <FaHtml5 className=" dark:text-[#fb480b]" />
            Html
          </div>
          <div className="flex items-center gap-1 text-base hover:-translate-y-1 bg-white dark:bg-slate-600 rounded-full px-2 py-1 cursor-pointer">
            <FaCss3 className=" dark:text-[#2196f3]" />
            Css
          </div>
          <div className="flex items-center gap-1 text-base hover:-translate-y-1 bg-white dark:bg-slate-600 rounded-full px-2 py-1 cursor-pointer">
            <IoLogoJavascript className=" dark:text-[#fbc238]" />
            JS
          </div>
          <div className="flex items-center gap-1 text-base hover:-translate-y-1 bg-white dark:bg-slate-600 rounded-full px-2 py-1 cursor-pointer">
            <SiTailwindcss className=" dark:text-[#027fff]" />
            TailwindCss
          </div>
          <div className="flex items-center gap-1 text-base hover:-translate-y-1 bg-white dark:bg-slate-600 rounded-full px-2 py-1 cursor-pointer">
            <SiMui className=" dark:text-[#027fff]" />
            MUI
          </div>
          <div className="flex items-center gap-1 text-base hover:-translate-y-1 bg-white dark:bg-slate-600 rounded-full px-2 py-1 cursor-pointer">
            <SiRedux className=" dark:text-[#7a50be]" />
            Redux
          </div>
          <div className="flex items-center gap-1 text-base hover:-translate-y-1 bg-white dark:bg-slate-600 rounded-full px-2 py-1 cursor-pointer">
            <SiNextdotjs className=" dark:text-black" />
            NextJS
          </div>
          <div className="flex items-center gap-1 text-base hover:-translate-y-1 bg-white dark:bg-slate-600 rounded-full px-2 py-1 cursor-pointer">
            <SiReactquery className=" dark:text-red-400" />
            React Query
          </div>
          <div className="flex items-center gap-1 text-base hover:-translate-y-1 bg-white dark:bg-slate-600 rounded-full px-2 py-1 cursor-pointer">
            <SiSanity className=" dark:text-red-500" />
            Sanity
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
