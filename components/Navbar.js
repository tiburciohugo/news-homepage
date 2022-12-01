import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
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
      <nav className="absolute top-0 w-full max-w-[1024px] flex items-center justify-between space-x-2 py-3 px-4 z-1 mt-4">
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

      {/* <aside
        id="menu"
        className="hidden c-md:hidden"
        aria-label="sidebar"
      >
        <div className="w-screen h-screen fixed top-0 bg-very-dark-blue bg-opacity-60 z-40">
          <div class="py-8 px-4 bg-white h-screen w-4/6 fixed top-0 right-0 z-50">
            <RxCross1
              className="h-8 w-8 absolute top-4 right-4 cursor-pointer"
              onClick={handleCross}
            />
            <ul className="flex flex-col items-left justify-between md:w-[26rem] mt-20 space-y-4 text-lg">
              <li>
                <Link
                  href="/"
                  className="text-dark-grayish-blue font-semibold hover:text-soft-red"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/new"
                  className="text-dark-grayish-blue font-semibold hover:text-soft-red"
                >
                  New
                </Link>
              </li>
              <li>
                <Link
                  href="/popular"
                  className="text-dark-grayish-blue font-semibold hover:text-soft-red"
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  href="/trending"
                  className="text-dark-grayish-blue font-semibold hover:text-soft-red"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-dark-grayish-blue font-semibold hover:text-soft-red"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside> */}

      <Sidebar onClick={() => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
      }} />
      
    </>
  );
}
