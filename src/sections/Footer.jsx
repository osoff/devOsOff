import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { linksOutside } from "../constants";

function Footer() {
  const year = new Date().getUTCFullYear();
  return (
    <section className=" px-[6%] py-8 bg-[#d7dcef] dark:bg-black">
      <div className="flex justify-between items-center">
        <p>Copyright © {year}. All rights are reserved</p>
        <div className="flex gap-4 text-3xl">
          <a
            href={linksOutside.github}
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={linksOutside.telegram}
            className="cursor-pointer"
          >
            <FaTelegram />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={linksOutside.gmail}
            className="cursor-pointer"
          >
            <IoMail />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
