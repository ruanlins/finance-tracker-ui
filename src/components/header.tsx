import { ModeToggle } from "./toggle-mode";

export default function Header() {
  return (
    <header className="bg-muted w-screen">
      <div className="m-auto flex h-16 w-4/6 items-center justify-between">
        <div>Logo</div>
        <div>
          <nav className="flex gap-20">
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
