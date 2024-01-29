import Avatar from "../ui/Avatar";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { linksOutside } from "../constants";
import { FaAngleDown } from "react-icons/fa6";
import HeaderBlock from "../ui/HeaderBlock";

function Hero() {
  return (
    <section
      className="bg-mainbg  text-center md:text-left  transition-all duration-300 ease-in-out bg-cover bg-center dark:bg-mainbgdark"
      id="home"
    >
      <div className="container w-full min-h-screen pt-28 h-full flex md:flex-row flex-col-reverse md:gap-0 gap-10 justify-around items-center ">
        <div className="flex flex-col sm:gap-14 gap-7 max-w-[463px] ">
          <HeaderBlock className="text-5xl leading-[4rem]">
            <span className="pereliv">FRONT-END</span> DEVELOPER REACT
          </HeaderBlock>
          <div className="flex flex-col gap-4">
            <p className="text-5xl font-extralight">Anatoly Isupov 👋🏻</p>
            <p>📍 Serbia | Novi Sad</p>
          </div>
          <div className="flex flex-col  gap-2 ">
            <div className="flex gap-5 text-5xl  justify-center md:justify-start">
              <a href={linksOutside.github} target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-mainblue " />
              </a>
              <a href={linksOutside.telegram} target="_blank" rel="noreferrer">
                <FaTelegram className="hover:text-mainblue" />
              </a>
            </div>
            <div className="w-full flex flex-col gap-1 items-center cursor-pointer pb-5">
              <span className="text-mainblue ">More</span>
              <FaAngleDown />
            </div>
          </div>
        </div>
        <Avatar />
      </div>
    </section>
  );
}

export default Hero;
