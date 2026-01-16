import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import OffcanvasMenu from "./offcanvas-menu";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-linear-to-r from-orange-700 to-purple-700 px-6">
      <OffcanvasMenu />
      <div className="mr-auto ml-2 inline-block rounded-2xl p-1 text-3xl font-extrabold">
        ai<span className="text-sm">TV</span>
      </div>
      {/* <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home page</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <ModeToggle />
    </header>
  );
}
