import Link from "next/link";

export function MainNav() {
  return (
    <nav>
      <ul className="space-y-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
