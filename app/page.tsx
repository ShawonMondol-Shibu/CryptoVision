'use client'
import Header from "@/components/shared/Header";
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
       <Header/>
   
    </div>
  );
}
