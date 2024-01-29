import { linksOutside } from "../constants";
import HeaderBlock from "../ui/HeaderBlock";
// gradient?
function Contacts() {
  return (
    <section
      className="container flex flex-col pt-10 pb-2 sm:gap-20 gap-10"
      id="contacts"
    >
      <HeaderBlock pereliv>Contacts</HeaderBlock>
      <HeaderBlock>
        FOR ANY <span className=" text-mainblue">PROJECTS INQUIERY</span>
        OR FOR MORE INFORMATION ABOUT WHAT I DO, PLEASE FEEL FREE TO GET IN
        TOUCH
      </HeaderBlock>
      <div className="grid text-white grid-cols-1 md:grid-cols-3 text-center grid-flow-row text-[2rem] md:text-[1rem] gap-20">
        <a
          href={linksOutside.gmail}
          className=" px-10 py-6 bg-gradient-to-r rounded-2xl from-[#0019ff] to-[#fa00ff]"
        >
          Email
        </a>
        <a
          href={linksOutside.linkedin}
          className=" px-10 py-6 bg-gradient-to-r rounded-2xl from-[#0019ff] to-[#fa00ff]"
        >
          LinkedIn
        </a>
        <a
          href={linksOutside.telegram}
          className=" px-10 py-6 bg-gradient-to-r rounded-2xl from-[#0019ff] to-[#fa00ff]"
        >
          Telegram
        </a>
      </div>
      <p className=" text-2xl font-extralight">
        I'm waiting for your message 😉
      </p>
    </section>
  );
}

export default Contacts;
