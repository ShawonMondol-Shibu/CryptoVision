import Image from "next/image";
import Link from "next/link";

type coinType = Record<"id" | "image" | "name" | "current_price", string>;

// app/coins/page.tsx
export default async function Page() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    {
      headers: { "x-cg-demo-api-key": process.env.COINGECKO_API_KEY || "" },
      next: { revalidate: 60 },
    },
  );
  const coins = await res.json();

  return (
    <div className="p-6 grid grid-cols-4 gap-4">
      {coins.map((coin: coinType) => (
        <Link
          key={coin.id}
          href={`/coins/${coin.id}`}
          className="p-4 shadow rounded hover:bg-gray-50"
        >
          <Image
            src={coin.image}
            alt={coin.name}
            width={40}
            height={40}
            className="w-10 mx-auto"
          />
          <h2 className="text-center font-semibold mt-2">{coin.name}</h2>
          <p className="text-center text-sm text-gray-600">
            ${coin.current_price}
          </p>
        </Link>
      ))}
    </div>
  );
}
