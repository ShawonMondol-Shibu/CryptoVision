"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Eye, TrendingUp, TrendingDown, Search } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface CoinData {
  name: string
  symbol: string
  price: number
  change24h: number
  marketCap: number
  volume24h: number
  rank: number
}

export default function CoinsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [coins, setCoins] = useState<CoinData[]>([])
  const router = useRouter()

  // Expanded placeholder data for cryptocurrencies
  useEffect(() => {
    const dummyCoins: CoinData[] = [
      {
        name: "Bitcoin",
        symbol: "BTC",
        price: 68500.23,
        change24h: 2.5,
        marketCap: 1340000000000,
        volume24h: 28000000000,
        rank: 1,
      },
      {
        name: "Ethereum",
        symbol: "ETH",
        price: 3800.15,
        change24h: -1.2,
        marketCap: 456000000000,
        volume24h: 15000000000,
        rank: 2,
      },
      {
        name: "Tether",
        symbol: "USDT",
        price: 1.0,
        change24h: 0.01,
        marketCap: 95000000000,
        volume24h: 45000000000,
        rank: 3,
      },
      {
        name: "BNB",
        symbol: "BNB",
        price: 600.0,
        change24h: 3.2,
        marketCap: 90000000000,
        volume24h: 2000000000,
        rank: 4,
      },
      {
        name: "Solana",
        symbol: "SOL",
        price: 150.75,
        change24h: 4.1,
        marketCap: 65000000000,
        volume24h: 3500000000,
        rank: 5,
      },
      {
        name: "XRP",
        symbol: "XRP",
        price: 0.58,
        change24h: 0.8,
        marketCap: 31000000000,
        volume24h: 1800000000,
        rank: 6,
      },
      {
        name: "USDC",
        symbol: "USDC",
        price: 1.0,
        change24h: -0.02,
        marketCap: 28000000000,
        volume24h: 6000000000,
        rank: 7,
      },
      {
        name: "Lido Staked Ether",
        symbol: "STETH",
        price: 3795.2,
        change24h: -1.1,
        marketCap: 27000000000,
        volume24h: 150000000,
        rank: 8,
      },
      {
        name: "Cardano",
        symbol: "ADA",
        price: 0.45,
        change24h: -0.5,
        marketCap: 16000000000,
        volume24h: 800000000,
        rank: 9,
      },
      {
        name: "Dogecoin",
        symbol: "DOGE",
        price: 0.12,
        change24h: 1.9,
        marketCap: 17000000000,
        volume24h: 1200000000,
        rank: 10,
      },
      {
        name: "Avalanche",
        symbol: "AVAX",
        price: 35.8,
        change24h: 2.8,
        marketCap: 14000000000,
        volume24h: 600000000,
        rank: 11,
      },
      {
        name: "TRON",
        symbol: "TRX",
        price: 0.18,
        change24h: 1.5,
        marketCap: 15000000000,
        volume24h: 2000000000,
        rank: 12,
      },
      {
        name: "Chainlink",
        symbol: "LINK",
        price: 15.2,
        change24h: 2.0,
        marketCap: 8000000000,
        volume24h: 400000000,
        rank: 13,
      },
      {
        name: "Polygon",
        symbol: "MATIC",
        price: 0.85,
        change24h: -2.1,
        marketCap: 8500000000,
        volume24h: 350000000,
        rank: 14,
      },
      {
        name: "Polkadot",
        symbol: "DOT",
        price: 7.8,
        change24h: -0.9,
        marketCap: 10000000000,
        volume24h: 250000000,
        rank: 15,
      },
      {
        name: "Litecoin",
        symbol: "LTC",
        price: 80.5,
        change24h: -0.1,
        marketCap: 6000000000,
        volume24h: 800000000,
        rank: 16,
      },
      {
        name: "Shiba Inu",
        symbol: "SHIB",
        price: 0.000025,
        change24h: 5.2,
        marketCap: 14500000000,
        volume24h: 900000000,
        rank: 17,
      },
      {
        name: "Bitcoin Cash",
        symbol: "BCH",
        price: 485.3,
        change24h: 1.8,
        marketCap: 9500000000,
        volume24h: 400000000,
        rank: 18,
      },
      {
        name: "Uniswap",
        symbol: "UNI",
        price: 8.45,
        change24h: -1.5,
        marketCap: 6700000000,
        volume24h: 180000000,
        rank: 19,
      },
      { name: "Dai", symbol: "DAI", price: 1.0, change24h: 0.0, marketCap: 5300000000, volume24h: 300000000, rank: 20 },
      {
        name: "LEO Token",
        symbol: "LEO",
        price: 5.85,
        change24h: 0.3,
        marketCap: 5400000000,
        volume24h: 2500000,
        rank: 21,
      },
      {
        name: "Wrapped Bitcoin",
        symbol: "WBTC",
        price: 68450.0,
        change24h: 2.4,
        marketCap: 10600000000,
        volume24h: 250000000,
        rank: 22,
      },
      {
        name: "Stellar",
        symbol: "XLM",
        price: 0.125,
        change24h: 3.1,
        marketCap: 3600000000,
        volume24h: 120000000,
        rank: 23,
      },
      {
        name: "Monero",
        symbol: "XMR",
        price: 165.4,
        change24h: -0.8,
        marketCap: 3000000000,
        volume24h: 85000000,
        rank: 24,
      },
      {
        name: "Ethereum Classic",
        symbol: "ETC",
        price: 28.5,
        change24h: 1.2,
        marketCap: 4200000000,
        volume24h: 180000000,
        rank: 25,
      },
      { name: "OKB", symbol: "OKB", price: 45.2, change24h: 0.9, marketCap: 2700000000, volume24h: 15000000, rank: 26 },
      {
        name: "Filecoin",
        symbol: "FIL",
        price: 5.85,
        change24h: -2.3,
        marketCap: 3400000000,
        volume24h: 140000000,
        rank: 27,
      },
      {
        name: "Hedera",
        symbol: "HBAR",
        price: 0.078,
        change24h: 4.5,
        marketCap: 2800000000,
        volume24h: 95000000,
        rank: 28,
      },
      {
        name: "Cosmos",
        symbol: "ATOM",
        price: 8.95,
        change24h: -1.8,
        marketCap: 3500000000,
        volume24h: 110000000,
        rank: 29,
      },
      {
        name: "VeChain",
        symbol: "VET",
        price: 0.032,
        change24h: 2.7,
        marketCap: 2300000000,
        volume24h: 75000000,
        rank: 30,
      },
      {
        name: "Internet Computer",
        symbol: "ICP",
        price: 12.45,
        change24h: -3.2,
        marketCap: 5700000000,
        volume24h: 180000000,
        rank: 31,
      },
      {
        name: "Aptos",
        symbol: "APT",
        price: 9.85,
        change24h: 6.8,
        marketCap: 4200000000,
        volume24h: 220000000,
        rank: 32,
      },
      {
        name: "Near Protocol",
        symbol: "NEAR",
        price: 5.25,
        change24h: 1.9,
        marketCap: 5600000000,
        volume24h: 160000000,
        rank: 33,
      },
      {
        name: "Arbitrum",
        symbol: "ARB",
        price: 1.85,
        change24h: -0.8,
        marketCap: 7400000000,
        volume24h: 320000000,
        rank: 34,
      },
      {
        name: "Optimism",
        symbol: "OP",
        price: 2.15,
        change24h: 4.2,
        marketCap: 2100000000,
        volume24h: 95000000,
        rank: 35,
      },
      {
        name: "Mantle",
        symbol: "MNT",
        price: 0.95,
        change24h: 2.8,
        marketCap: 3100000000,
        volume24h: 85000000,
        rank: 36,
      },
    ]
    setCoins(dummyCoins)
  }, [])

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const formatCurrency = (value: number) => {
    if (value < 0.01) {
      return `$${value.toFixed(6)}`
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  const formatMarketCap = (value: number) => {
    if (value >= 1_000_000_000_000) {
      return `$${(value / 1_000_000_000_000).toFixed(2)}T`
    }
    if (value >= 1_000_000_000) {
      return `$${(value / 1_000_000_000).toFixed(2)}B`
    }
    if (value >= 1_000_000) {
      return `$${(value / 1_000_000).toFixed(2)}M`
    }
    return `$${value.toString()}`
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="py-16 px-4 bg-white border-b">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl">
              <Eye className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              Crypto <span className="text-blue-600">Coins</span>
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore real-time prices, market capitalization, and daily changes for all major cryptocurrencies.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Cryptocurrency Prices</h2>
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search coins..."
                className="pl-10 pr-4 py-2 border rounded-md w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Coins Grid */}
          {filteredCoins.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCoins.map((coin) => (
                <Card
                  key={coin.symbol}
                  className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 bg-white"
                  onClick={() => router.push(`/coins/${coin.symbol.toLowerCase()}`)}
                >
                  <CardContent className="p-6">
                    {/* Header with Rank and Symbol */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{coin.symbol.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-lg truncate">{coin.name}</h3>
                          <p className="text-slate-500 text-sm font-mono uppercase">{coin.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs font-medium">
                          #{coin.rank}
                        </span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-slate-800">{formatCurrency(coin.price)}</p>
                    </div>

                    {/* 24h Change */}
                    <div className="mb-4">
                      <div
                        className={`flex items-center justify-center py-2 px-3 rounded-lg ${
                          coin.change24h >= 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                        }`}
                      >
                        {coin.change24h >= 0 ? (
                          <TrendingUp className="h-4 w-4 mr-2" />
                        ) : (
                          <TrendingDown className="h-4 w-4 mr-2" />
                        )}
                        <span className="font-semibold">{coin.change24h.toFixed(2)}%</span>
                        <span className="text-sm ml-1">24h</span>
                      </div>
                    </div>

                    {/* Market Stats */}
                    <div className="space-y-3 border-t border-slate-100 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-sm">Market Cap</span>
                        <span className="font-semibold text-slate-800 text-sm">{formatMarketCap(coin.marketCap)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-sm">Volume (24h)</span>
                        <span className="font-semibold text-slate-800 text-sm">{formatMarketCap(coin.volume24h)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No coins found</h3>
              <p className="text-slate-600">Try adjusting your search terms to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

   
    </div>
  )
}
