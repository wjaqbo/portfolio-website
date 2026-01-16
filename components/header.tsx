import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-linear-to-r from-orange-700 to-purple-700 px-6">
      <div className="inline-block rounded-2xl border-2 p-1 text-3xl font-extrabold">
        ai<span className="text-sm">TV</span>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home page</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
