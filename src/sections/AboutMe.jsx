import HeaderBlock from "../ui/HeaderBlock";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiTailwindcss, SiMui, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

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
        <div className=" flex w-full gap-4 items-center justify-end text-[30px]">
          <p>Tech stack </p>
          <p>| </p>
          <FaReact className="cursor-pointer hover:-translate-y-2 dark:text-[#00dcfe]" />
          <FaHtml5 className="cursor-pointer hover:-translate-y-2 dark:text-[#fb480b]" />
          <FaCss3 className="cursor-pointer hover:-translate-y-2 dark:text-[#2196f3]" />
          <IoLogoJavascript className="cursor-pointer hover:-translate-y-2 dark:text-[#fbc238]" />
          <SiTailwindcss className="cursor-pointer hover:-translate-y-2 dark:text-[#027fff]" />
          <SiMui className="cursor-pointer hover:-translate-y-2 dark:text-[#027fff]" />
          <SiRedux className="cursor-pointer hover:-translate-y-2 dark:text-[#7a50be]" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
