"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type coinType = Record<"id" | "image" | "name" | "current_price", string>;

// app/coins/page.tsx
export default function Page() {
  const [page, setPage] = useState<number>(1);
  const [coins, setCoins] = useState<coinType[]>([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", {
      headers: { "x-cg-demo-api-key": process.env.COINGECKO_API_KEY || "" },
    })
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  const limit: number = 20;
  const prevPage = (page - 1) * limit;
  const nextPage = page * limit;
  const paginatedItem: number = Math.ceil(coins.length / limit);

  useEffect(() => {
    if (page === 0 || page < 0) {
      setPage(page + 1);
    }
    if (page === paginatedItem + 1 || page > paginatedItem) {
      setPage(paginatedItem);
    }
  }, [page, paginatedItem]);

  return (
    <main className="py-10">
      <div className="p-6 grid grid-cols-4 gap-4">
        {coins.slice(prevPage, nextPage).map((coin: coinType) => (
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
      <Pagination>
        <PaginationContent>
          <PaginationItem
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
          >
            <PaginationPrevious href="#" />
          </PaginationItem>

          {Array.from({ length: paginatedItem }, (_, i: number) => (
            <PaginationItem key={i} onClick={() => setPage(i + 1)}>
              <PaginationLink
                href="#"
                className={page === i + 1 ? "bg-accent" : ""}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem
            onClick={() => setPage((p) => Math.min(p + 1, paginatedItem))}
          >
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
