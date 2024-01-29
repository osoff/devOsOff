import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useKey } from "../hooks/useKey";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function DarkModeToogle() {
  const [isDark, setIsDark] = useLocalStorage(false, "darkmode");
  useKey("KeyM", () => setIsDark((darkmode) => !darkmode));
  useEffect(
    function () {
      if (isDark) {
        document.documentElement.classList.add("dark");
        document.body.style.background = "black";
      } else {
        document.documentElement.classList.remove("dark");
        document.body.style.background = "white";
      }
    },
    [isDark]
  );
  return (
    <div className="flex justify-end w-full px-2 bottom-0 pb-2 sticky h-[100]">
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content="You can press M"
        className="rounded-full cursor-pointer p-4  dark:bg-mainblue bg-black text-white"
        onClick={() => setIsDark((mode) => !mode)}
      >
        {isDark ? <BsFillMoonFill /> : <BsFillSunFill />}
      </div>
      <Tooltip id="my-tooltip" place="left" variant="dark" />
    </div>
  );
}

export default DarkModeToogle;
