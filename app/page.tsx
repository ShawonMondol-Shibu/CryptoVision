'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
interface coinType{
  id:string;
  symbol:string;
  name:string;
}
export default function Home() {
  const [coins, setCoins] = useState<coinType[]>();
  useEffect(()=>{
    fetch(
      `https://api.coingecko.com/api/v3/coins/list?x-cg-demo-api-key=${process.env.CG_API_KEY}`
    )
    .then((res) => res.json())
    .then((data) => setCoins(data));
  },[])
  console.log(coins);
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        {coins?.slice(0,10).map((coin) => (
          <div key={coin.id}>
            <p>

            {coin.id}
            </p>
            <p>

          {coin.name}
            </p>
            <p>

          {coin.symbol}
            </p>
          </div>
        ))}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
   
    </div>
  );
}
