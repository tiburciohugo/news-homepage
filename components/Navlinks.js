import Link from "next/link";

export default function Navlinks() {
  return (
    <ul className="hidden c-md:flex c-md:justify-between c-md:w-[26rem]">
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
  );
}
