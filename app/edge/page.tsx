export const runtime = "edge"; // LocalCompare is not fullySupported in Edge

const data = [
  {
    id: 1,
    name: "Åland",
  },
  {
    id: 2,
    name: "Öresund",
  },
  {
    id: 3,
    name: "Äskil",
  },
  {
    id: 4,
    name: "Åtvidaberg",
  },
  {
    id: 5,
    name: "Östergötland",
  },
  {
    id: 6,
    name: "Österrike",
  },
  {
    id: 7,
    name: "Österlen",
  },
  {
    id: 8,
    name: "Östersund",
  },
  {
    id: 9,
    name: "Östhammar",
  },
  {
    id: 10,
    name: "Östergötland",
  },
  {
    id: 11,
    name: "Ellingsås",
  },
  {
    id: 12,
    name: "Enebyberg",
  },
  {
    id: 13,
    name: "Enköping",
  },
  {
    id: 14,
    name: "Enskede",
  },
  {
    id: 15,
    name: "Södermalm",
  },
  {
    id: 16,
    name: "Södertälje",
  },
  {
    id: 17,
    name: "Bergen",
  },
  {
    id: 17,
    name: "Bergen",
  },
  {
    id: 18,
    name: "Copenhagen",
  },
  {
    id: 19,
    name: "Denmark",
  },
  {
    id: 20,
    name: "Oslo",
  },
];

export default function Edge() {
  return (
    <div className="mx-auto w-1/4">
      <ul className="flex flex-col gap-4">
        {data
          ?.sort((a, b) =>
            a.name.localeCompare(b.name, "se", {
              sensitivity: "base",
            })
          )
          .map((item) => (
            <li
              className="items-center rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
              key={item.id}
            >
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
