// app/coins/[id]/page.tsx
import { fetchCoinData } from "@/lib/coingecko";
import Image from "next/image";
import CoinChart from "@/components/CoinChart";

async function fetchCoinMarketChart(id: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
    {
      headers: {
        "x-cg-demo-api-key": process.env.CG_API_KEY || "",
      },
      next: { revalidate: 300 }, // 5 minutes cache
    },
  );
  if (!res.ok) throw new Error("Failed to fetch market chart");
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const coin = await fetchCoinData(id);
  const chartData = await fetchCoinMarketChart(id);

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      {/* Coin Header */}
      <div className="flex items-center gap-4">
        <Image
          src={coin.image.large}
          alt={coin.name}
          width={80}
          height={80}
          className="w-20 h-20"
        />
        <div>
          <h1 className="text-3xl font-bold">
            {coin.name} ({coin.symbol.toUpperCase()})
          </h1>
          <p className="text-gray-600">Rank #{coin.market_cap_rank}</p>
        </div>
      </div>

      {/* Price */}
      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold">💲 Current Price</h2>
        <p className="text-2xl font-bold mt-2">
          {coin.market_data.current_price.usd.toLocaleString()} USD
        </p>
      </div>

      {/* Chart */}
      <CoinChart prices={chartData.prices} />

      {/* About */}
      <div className="bg-white shadow p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">📖 About {coin.name}</h3>
        <p className="text-gray-700 leading-relaxed">
          {coin.description.en
            ? coin.description.en.substring(0, 1000) + "..."
            : "No description available."}
        </p>
      </div>
    </div>
  );
}
