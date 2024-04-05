import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto my-5 max-w-7xl border-b-2 border-black mb-3 justify-between">
        <div className="gap-4 flex flex-row items-center justify-center">
          <Link
            className="text-sm font-semibold leading-6 text-gray-900"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-sm font-semibold leading-6 text-gray-900"
            href={"/edge"}
          >
            Edge
          </Link>
          <Link
            className="text-sm font-semibold leading-6 text-gray-900"
            href={"/node"}
          >
            Node
          </Link>
        </div>
      </nav>
    </header>
  );
}
