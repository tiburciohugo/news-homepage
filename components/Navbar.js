import Image from "next/image";
import Navlinks from "./Navlinks";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const handleClick = () => {
    const menu = document.getElementById("menu");
    const btn = document.querySelector("button");
    const svg = document.querySelector("svg");
    const rect = svg.querySelectorAll("rect");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "true");
      btn.classList.add("hidden");
      rect.forEach((rect) => {
        rect.setAttribute("width", "100");
      });
    } else {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
      rect.forEach((rect) => {
        rect.setAttribute("width", "120");
      });
    }
  };

  const handleCross = () => {
    const menu = document.getElementById("menu");
    const btn = document.querySelector("button");
    const svg = document.querySelector("svg");
    const rect = svg.querySelectorAll("rect");

    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
    btn.classList.remove("hidden");
    rect.forEach((rect) => {
      rect.setAttribute("width", "120");
    });
  };

  return (
    <>
      <nav className="absolute top-0 w-full max-w-6xl flex items-center justify-between space-x-2 py-3 px-4 z-1 mt-4">
        <Image
          className="cursor-pointer"
          src={"/images/logo.svg"}
          alt="logo"
          width={50}
          height={50}
        />

        <Navlinks />

        {/* hamburger button */}

        <button
          onClick={handleClick}
          aria-controls="menu"
          aria-expanded="false"
          className="text-white focus:outline-none c-md:hidden"
        >
          <svg viewBox="0 0 100 100" width={40} height={30}>
            <rect y="40" width={120} height={10}></rect>
            <rect y="60" width={120} height={10}></rect>
            <rect y="80" width={120} height={10}></rect>
          </svg>
        </button>
      </nav>

      <Sidebar
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      />
    </>
  );
}
