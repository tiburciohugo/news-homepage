import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const handleClick = () => {
    const menu = document.getElementById("menu");
    const btn = document.querySelector("button");
    const svg = document.querySelector("svg");
    const rect = svg.querySelectorAll("rect");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "true");
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

  return (
    <nav className="absolute top-0 w-full flex items-center justify-between py-3 px-4 z-10 mt-4">
      <Image
        className="cursor-pointer"
        src={"/images/logo.svg"}
        alt="logo"
        width={50}
        height={50}
      />

      <div id="menu" className="hidden md:flex md:w-[50%]">
        <ul className="flex items-center justify-between w-[26rem]">
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

      {/* hamburger button */}

      <button
        onClick={handleClick}
        aria-controls="menu"
        aria-expanded="false"
        className="text-white focus:outline-none md:hidden"
      >
        <svg viewBox="0 0 100 100" width={40} height={30}>
          <rect y="40" width={120} height={10}></rect>
          <rect y="60" width={120} height={10}></rect>
          <rect y="80" width={120} height={10}></rect>
        </svg>
      </button>
    </nav>
  );
}
