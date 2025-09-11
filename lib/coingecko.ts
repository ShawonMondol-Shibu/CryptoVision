// lib/coingecko.ts
export async function fetchCoinData(coinId: string) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
    headers: {
      "x-cg-demo-api-key": process.env.CG_API_KEY || "",
    },
    // optional caching for Next.js
    next: { revalidate: 60 }, // revalidate every 1 min
  });

  if (!res.ok) throw new Error("Failed to fetch coin data");
  return res.json();
}
