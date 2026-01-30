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
        <li>
          <Link href="https://n8n.qbagency.fun/" target="_blank">
            AI Panel
          </Link>
        </li>
      </ul>
    </nav>
  );
}
