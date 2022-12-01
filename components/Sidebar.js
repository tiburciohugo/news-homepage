import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarClass = isOpen ? "block" : "hidden";

  const handleClick = () => {
    const menu = document.getElementById("menu");
    const btn = document.querySelector("button");

    menu.classList.add("hidden");
    btn.classList.remove("hidden");
  };

  return (
    <>
      <aside id="menu" className="hidden" aria-label="sidebar">
        <div className="w-screen h-screen fixed top-0 bg-very-dark-blue bg-opacity-60 z-40">
          <div className="py-8 px-4 bg-white h-screen w-4/6 fixed top-0 right-0 z-50">
            <RxCross1
              className="h-8 w-8 absolute top-4 right-4 cursor-pointer"
              onClick={handleClick}
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
      </aside>
    </>
  );
}
