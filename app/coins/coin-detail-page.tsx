"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, TrendingUp, TrendingDown, ArrowLeft, Star, Globe, Twitter } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { dummyData } from "./data"

export interface CoinDetailData {
  name: string
  symbol: string
  price: number
  change24h: number
  change7d: number
  marketCap: number
  volume24h: number
  rank: number
  circulatingSupply: number
  totalSupply: number
  maxSupply: number | null
  allTimeHigh: number
  allTimeLow: number
  description: string
  website: string
  twitter: string
}

interface CoinDetailPageProps {
  symbol: string
}

export default function CoinDetailPage({ symbol }: CoinDetailPageProps) {
  const [coinData, setCoinData] = useState<CoinDetailData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with placeholder data
    const fetchCoinData = () => {
      

      const data = dummyData[symbol.toLowerCase()]
      if (data) {
        setCoinData(data)
      }
      setLoading(false)
    }

    fetchCoinData()
  }, [symbol])

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

  const formatSupply = (value: number) => {
    if (value >= 1_000_000_000) {
      return `${(value / 1_000_000_000).toFixed(2)}B`
    }
    if (value >= 1_000_000) {
      return `${(value / 1_000_000).toFixed(2)}M`
    }
    return value.toLocaleString()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading coin data...</p>
        </div>
      </div>
    )
  }

  if (!coinData) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Coin Not Found</h1>
          <p className="text-slate-600 mb-6">The requested cryptocurrency could not be found.</p>
          <Link href="/coins">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Coins
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto max-w-7xl">
          <Link href="/coins">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Coins
            </Button>
          </Link>

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800">{coinData.name}</h1>
              <p className="text-xl text-slate-600 font-mono uppercase">{coinData.symbol}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                Rank #{coinData.rank}
              </span>
              <Button variant="ghost" size="icon">
                <Star className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-slate-600 mb-1">Current Price</p>
              <p className="text-3xl font-bold text-slate-800">{formatCurrency(coinData.price)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">24h Change</p>
              <div
                className={`flex items-center text-2xl font-semibold ${coinData.change24h >= 0 ? "text-green-600" : "text-red-600"}`}
              >
                {coinData.change24h >= 0 ? (
                  <TrendingUp className="h-6 w-6 mr-2" />
                ) : (
                  <TrendingDown className="h-6 w-6 mr-2" />
                )}
                {coinData.change24h.toFixed(2)}%
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">7d Change</p>
              <div
                className={`flex items-center text-2xl font-semibold ${coinData.change7d >= 0 ? "text-green-600" : "text-red-600"}`}
              >
                {coinData.change7d >= 0 ? (
                  <TrendingUp className="h-6 w-6 mr-2" />
                ) : (
                  <TrendingDown className="h-6 w-6 mr-2" />
                )}
                {coinData.change7d.toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section (Placeholder) */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <Card className="shadow-lg border-0 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800">Price Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-slate-800 mb-2">Interactive Price Chart</p>
                  <p className="text-slate-600">Chart visualization would be implemented here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Market Statistics */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-800">Market Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Market Cap</span>
                  <span className="font-semibold text-slate-800">{formatMarketCap(coinData.marketCap)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">24h Volume</span>
                  <span className="font-semibold text-slate-800">{formatMarketCap(coinData.volume24h)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Circulating Supply</span>
                  <span className="font-semibold text-slate-800">
                    {formatSupply(coinData.circulatingSupply)} {coinData.symbol}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Total Supply</span>
                  <span className="font-semibold text-slate-800">
                    {formatSupply(coinData.totalSupply)} {coinData.symbol}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Max Supply</span>
                  <span className="font-semibold text-slate-800">
                    {coinData.maxSupply ? `${formatSupply(coinData.maxSupply)} ${coinData.symbol}` : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">All-Time High</span>
                  <span className="font-semibold text-slate-800">{formatCurrency(coinData.allTimeHigh)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600">All-Time Low</span>
                  <span className="font-semibold text-slate-800">{formatCurrency(coinData.allTimeLow)}</span>
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-800">About {coinData.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed">{coinData.description}</p>

                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={coinData.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      Website
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={coinData.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
