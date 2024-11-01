import Menu from "./Menu";

export default function Header() {
  return (
    <header className="relative z-30">
      <div className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-8">
        <p className="text-3xl">
          Huang Go
        </p>
        <Menu />
      </div>
    </header>
  );
}