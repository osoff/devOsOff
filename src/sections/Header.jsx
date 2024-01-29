import Logo from "../ui/Logo";
import Nav from "../ui/Nav";

function Header() {
  return (
    <header className="z-40 flex fixed w-full top-0 items-center justify-between px-[6%] py-6 bg-white dark:bg-black border-b border-[#e1e5f1] dark:border-black">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
