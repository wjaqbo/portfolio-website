import { ModeToggle } from "./mode-toggle";
import OffcanvasMenu from "./offcanvas-menu";

export function Header() {
  return (
    <header className="flex h-12 w-full items-center justify-between bg-linear-to-r from-orange-700 to-purple-700 px-6">
      <OffcanvasMenu />
      <div className="mr-auto ml-2 inline-block rounded-2xl p-1 text-3xl font-extrabold">
        ai<span className="text-sm">TV</span>
      </div>
      <ModeToggle />
    </header>
  );
}
