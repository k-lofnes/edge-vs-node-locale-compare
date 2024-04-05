import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-between py-10 px-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="md:max-w-lg w-full text-center">
          <h1>
            This is a clean repo with the latest next.js using localeCompare on
            the data running either edge or node. The sort function is not
            working as escpected running edge.
          </h1>
          <h1 className="font-bold">Sorting should be Å-Ä-Ö</h1>
        </div>
        <div className="flex flex-row gap-4">
          <Link
            className="bg-black text-white rounded-lg py-2 px-4"
            href={"/edge"}
          >
            Edge
          </Link>
          <Link
            className="bg-black text-white rounded-lg py-2 px-4"
            href={"/node"}
          >
            Node
          </Link>
        </div>
      </div>
    </main>
  );
}

