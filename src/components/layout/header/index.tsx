import { Logo } from "./logo";
import { Menu } from "./menu";

export function Header() {
  return (
    <header className="mb-20 mt-10 flex items-center justify-between py-6">
      <Logo />
      <Menu />
    </header>
  );
}
