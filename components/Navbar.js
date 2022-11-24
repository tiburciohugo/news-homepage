import Image from "next/image";

export default function Navbar() {
  return (
    <div className="absolute top-0 w-full flex items-center justify-between py-3 px-4 z-10">
      <Image src={"/images/logo.svg"} alt="logo" width={40} height={40} />

      {/* hamburger button */}
      <div id="menu" className="hidden">
        <ul className="flex flex-col items-center justify-center space-y-4">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <button
        aria-controls="menu"
        aria-expanded="false"
        className="text-white focus:outline-none"
      >
        <svg viewBox="0 0 100 100" width={40} height={30}>
          <rect y="40" width={120} height={10}></rect>
          <rect y="60" width={120} height={10}></rect>
          <rect y="80" width={120} height={10}></rect>
        </svg>
      </button>
    </div>
  );
}
