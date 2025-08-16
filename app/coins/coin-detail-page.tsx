"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, TrendingUp, TrendingDown, ArrowLeft, Star, Globe, Twitter } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface CoinDetailData {
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
      const dummyData: Record<string, CoinDetailData> = {
       btc:{
        name: "Bitcoin",
        symbol: "BTC",
        price: 68500.23,
        change24h: 2.5,
        change7d: 8.2,
        marketCap: 1340000000000,
        volume24h: 28000000000,
        rank: 1,
        circulatingSupply: 19500000,
        totalSupply: 19500000,
        maxSupply: 21000000,
        allTimeHigh: 73750.07,
        allTimeLow: 0.0495,
        description:
          "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency.",
        website: "https://bitcoin.org",
        twitter: "https://twitter.com/bitcoin",
      },
      eth:{
        name: "Ethereum",
        symbol: "ETH",
        price: 3800.15,
        change24h: -1.2,
        change7d: 5.8,
        marketCap: 456000000000,
        volume24h: 15000000000,
        rank: 2,
        circulatingSupply: 120000000,
        totalSupply: 120000000,
        maxSupply: null,
        allTimeHigh: 4878.26,
        allTimeLow: 0.432979,
        description:
          "Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.",
        website: "https://ethereum.org",
        twitter: "https://twitter.com/ethereum",
      },
      usdt:{
        name: "Tether",
        symbol: "USDT",
        price: 1.0,
        change24h: 0.01,
        change7d: -0.05,
        marketCap: 95000000000,
        volume24h: 45000000000,
        rank: 3,
        circulatingSupply: 95000000000,
        totalSupply: 95000000000,
        maxSupply: null,
        allTimeHigh: 1.32,
        allTimeLow: 0.572521,
        description:
          "Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity like Gold.",
        website: "https://tether.to",
        twitter: "https://twitter.com/Tether_to",
      },
      bnb:{
        name: "BNB",
        symbol: "BNB",
        price: 600.0,
        change24h: 3.2,
        change7d: 12.5,
        marketCap: 90000000000,
        volume24h: 2000000000,
        rank: 4,
        circulatingSupply: 150000000,
        totalSupply: 150000000,
        maxSupply: 200000000,
        allTimeHigh: 686.31,
        allTimeLow: 0.096749,
        description:
          "BNB is the cryptocurrency coin that powers the BNB Chain ecosystem. As the native coin of Binance Chain, BNB has multiple use cases: fueling transactions on the Chain, paying for transaction fees on Binance Exchange, and many more.",
        website: "https://www.bnbchain.org",
        twitter: "https://twitter.com/BNBCHAIN",
      },
      sol:{
        name: "Solana",
        symbol: "SOL",
        price: 150.75,
        change24h: 4.1,
        change7d: 15.3,
        marketCap: 65000000000,
        volume24h: 3500000000,
        rank: 5,
        circulatingSupply: 431000000,
        totalSupply: 431000000,
        maxSupply: null,
        allTimeHigh: 259.96,
        allTimeLow: 0.500801,
        description:
          "Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world. Solana ensures composability between ecosystem projects by maintaining a single global state as the network scales.",
        website: "https://solana.com",
        twitter: "https://twitter.com/solana",
      },
      xrp:{
        name: "XRP",
        symbol: "XRP",
        price: 0.58,
        change24h: 0.8,
        change7d: -2.1,
        marketCap: 31000000000,
        volume24h: 1800000000,
        rank: 6,
        circulatingSupply: 53400000000,
        totalSupply: 99990000000,
        maxSupply: 100000000000,
        allTimeHigh: 3.84,
        allTimeLow: 0.002802,
        description:
          "XRP is a digital asset built for payments. It is the native digital asset on the XRP Ledger—an open-source, permissionless and decentralized blockchain technology that can settle transactions in 3-5 seconds.",
        website: "https://xrpl.org",
        twitter: "https://twitter.com/Ripple",
      },
      usdc:{
        name: "USDC",
        symbol: "USDC",
        price: 1.0,
        change24h: -0.02,
        change7d: 0.01,
        marketCap: 28000000000,
        volume24h: 6000000000,
        rank: 7,
        circulatingSupply: 28000000000,
        totalSupply: 28000000000,
        maxSupply: null,
        allTimeHigh: 1.17,
        allTimeLow: 0.877647,
        description:
          "USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin. You can always redeem 1 USD Coin for US$1.00, giving it a stable price.",
        website: "https://www.centre.io",
        twitter: "https://twitter.com/centre",
      },
      steth:{
        name: "Lido Staked Ether",
        symbol: "STETH",
        price: 3795.2,
        change24h: -1.1,
        change7d: 5.5,
        marketCap: 27000000000,
        volume24h: 150000000,
        rank: 8,
        circulatingSupply: 7100000,
        totalSupply: 7100000,
        maxSupply: null,
        allTimeHigh: 4829.57,
        allTimeLow: 482.9,
        description:
          "Lido is a liquid staking solution for Ethereum. Lido lets users stake their ETH - without locking assets or maintaining infrastructure - whilst participating in on-chain activities, e.g. lending.",
        website: "https://lido.fi",
        twitter: "https://twitter.com/LidoFinance",
      },
      ada:{
        name: "Cardano",
        symbol: "ADA",
        price: 0.45,
        change24h: -0.5,
        change7d: 3.2,
        marketCap: 16000000000,
        volume24h: 800000000,
        rank: 9,
        circulatingSupply: 35500000000,
        totalSupply: 35500000000,
        maxSupply: 45000000000,
        allTimeHigh: 3.09,
        allTimeLow: 0.017354,
        description:
          "Cardano is a proof-of-stake blockchain platform that says its goal is to allow changemakers, innovators and visionaries to bring about positive global change.",
        website: "https://cardano.org",
        twitter: "https://twitter.com/Cardano",
      },
      doge:{
        name: "Dogecoin",
        symbol: "DOGE",
        price: 0.12,
        change24h: 1.9,
        change7d: 8.5,
        marketCap: 17000000000,
        volume24h: 1200000000,
        rank: 10,
        circulatingSupply: 141700000000,
        totalSupply: 141700000000,
        maxSupply: null,
        allTimeHigh: 0.731578,
        allTimeLow: 0.00008547,
        description:
          "Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke, making fun of the wild speculation in cryptocurrencies at the time.",
        website: "https://dogecoin.com",
        twitter: "https://twitter.com/dogecoin",
      },
      avax:{
        name: "Avalanche",
        symbol: "AVAX",
        price: 35.8,
        change24h: 2.8,
        change7d: 11.2,
        marketCap: 14000000000,
        volume24h: 600000000,
        rank: 11,
        circulatingSupply: 391000000,
        totalSupply: 391000000,
        maxSupply: 720000000,
        allTimeHigh: 144.96,
        allTimeLow: 2.8,
        description:
          "Avalanche is a layer one blockchain that functions as a platform for decentralized applications and custom blockchain networks. It is one of Ethereum's rivals, aiming to unseat Ethereum as the most popular blockchain for smart contracts.",
        website: "https://www.avax.network",
        twitter: "https://twitter.com/avalancheavax",
      },
      trx:{
        name: "TRON",
        symbol: "TRX",
        price: 0.18,
        change24h: 1.5,
        change7d: 6.8,
        marketCap: 15000000000,
        volume24h: 2000000000,
        rank: 12,
        circulatingSupply: 83400000000,
        totalSupply: 83400000000,
        maxSupply: null,
        allTimeHigh: 0.300363,
        allTimeLow: 0.00180434,
        description:
          "TRON is a decentralized blockchain-based operating system developed by the Tron Foundation and launched in 2017. Originally TRX tokens were ERC-20-based tokens deployed on Ethereum, but a year later they were moved to their own network.",
        website: "https://tron.network",
        twitter: "https://twitter.com/tronfoundation",
      },
      link:{
        name: "Chainlink",
        symbol: "LINK",
        price: 15.2,
        change24h: 2.0,
        change7d: 9.5,
        marketCap: 8000000000,
        volume24h: 400000000,
        rank: 13,
        circulatingSupply: 526000000,
        totalSupply: 1000000000,
        maxSupply: 1000000000,
        allTimeHigh: 52.7,
        allTimeLow: 0.148183,
        description:
          "Chainlink is a decentralized oracle network that bridges the gap between smart contracts on blockchain and real-world data. Chainlink allows blockchains to securely interact with external data feeds, events and payment methods.",
        website: "https://chain.link",
        twitter: "https://twitter.com/chainlink",
      },
      matic:{
        name: "Polygon",
        symbol: "MATIC",
        price: 0.85,
        change24h: -2.1,
        change7d: 4.3,
        marketCap: 8500000000,
        volume24h: 350000000,
        rank: 14,
        circulatingSupply: 10000000000,
        totalSupply: 10000000000,
        maxSupply: 10000000000,
        allTimeHigh: 2.92,
        allTimeLow: 0.00314376,
        description:
          "Polygon is a decentralized Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.",
        website: "https://polygon.technology",
        twitter: "https://twitter.com/0xPolygon",
      },
      dot:{
        name: "Polkadot",
        symbol: "DOT",
        price: 7.8,
        change24h: -0.9,
        change7d: 2.1,
        marketCap: 10000000000,
        volume24h: 250000000,
        rank: 15,
        circulatingSupply: 1280000000,
        totalSupply: 1280000000,
        maxSupply: null,
        allTimeHigh: 54.98,
        allTimeLow: 2.7,
        description:
          "Polkadot is an open-source multichain protocol that facilitates the cross-chain transfer of any data or asset types, not just tokens, thereby allowing blockchains to be interoperable with each other.",
        website: "https://polkadot.network",
        twitter: "https://twitter.com/Polkadot",
      },
      ltc:{
        name: "Litecoin",
        symbol: "LTC",
        price: 80.5,
        change24h: -0.1,
        change7d: 1.8,
        marketCap: 6000000000,
        volume24h: 800000000,
        rank: 16,
        circulatingSupply: 74500000,
        totalSupply: 74500000,
        maxSupply: 84000000,
        allTimeHigh: 412.96,
        allTimeLow: 1.15,
        description:
          "Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license. Litecoin was an early bitcoin spinoff or altcoin, starting in October 2011.",
        website: "https://litecoin.org",
        twitter: "https://twitter.com/LitecoinProject",
      },
      shiba:{
        name: "Shiba Inu",
        symbol: "SHIB",
        price: 0.000025,
        change24h: 5.2,
        change7d: 18.7,
        marketCap: 14500000000,
        volume24h: 900000000,
        rank: 17,
        circulatingSupply: 589000000000000,
        totalSupply: 1000000000000000,
        maxSupply: 1000000000000000,
        allTimeHigh: 0.00008845,
        allTimeLow: 0.000000000056,
        description:
          "Shiba Inu is a decentralized cryptocurrency created in August 2020 by an anonymous person or persons known as Ryoshi. It is named after the Shiba Inu dog breed and is widely considered to be an altcoin version of Dogecoin.",
        website: "https://shibatoken.com",
        twitter: "https://twitter.com/Shibtoken",
      },
      bch:{
        name: "Bitcoin Cash",
        symbol: "BCH",
        price: 485.3,
        change24h: 1.8,
        change7d: 7.2,
        marketCap: 9500000000,
        volume24h: 400000000,
        rank: 18,
        circulatingSupply: 19600000,
        totalSupply: 19600000,
        maxSupply: 21000000,
        allTimeHigh: 4355.62,
        allTimeLow: 75.075,
        description:
          "Bitcoin Cash is a peer-to-peer electronic cash system. It is a decentralized cryptocurrency without a central bank or single administrator that can be sent from user to user on the peer-to-peer Bitcoin Cash network without the need for intermediaries.",
        website: "https://bitcoincash.org",
        twitter: "https://twitter.com/BitcoinCash",
      },
      uni:{
        name: "Uniswap",
        symbol: "UNI",
        price: 8.45,
        change24h: -1.5,
        change7d: 3.8,
        marketCap: 6700000000,
        volume24h: 180000000,
        rank: 19,
        circulatingSupply: 793000000,
        totalSupply: 1000000000,
        maxSupply: 1000000000,
        allTimeHigh: 44.97,
        allTimeLow: 1.03,
        description:
          "Uniswap is a decentralized finance protocol that is used to exchange cryptocurrencies. Uniswap is also the name of the company that initially built the Uniswap protocol. The protocol facilitates automated transactions between cryptocurrency tokens on the Ethereum blockchain.",
        website: "https://uniswap.org",
        twitter: "https://twitter.com/Uniswap",
      },
      dai:{
        name: "Dai",
        symbol: "DAI",
        price: 1.0,
        change24h: 0.0,
        change7d: 0.02,
        marketCap: 5300000000,
        volume24h: 300000000,
        rank: 20,
        circulatingSupply: 5300000000,
        totalSupply: 5300000000,
        maxSupply: null,
        allTimeHigh: 1.22,
        allTimeLow: 0.89,
        description:
          "Dai is a stablecoin cryptocurrency which aims to keep its value as close to one United States dollar through an automated system of smart contracts on the Ethereum blockchain.",
        website: "https://makerdao.com",
        twitter: "https://twitter.com/MakerDAO",
      },
      leo:{
        name: "LEO Token",
        symbol: "LEO",
        price: 5.85,
        change24h: 0.3,
        change7d: 1.2,
        marketCap: 5400000000,
        volume24h: 2500000,
        rank: 21,
        circulatingSupply: 922000000,
        totalSupply: 985000000,
        maxSupply: 985000000,
        allTimeHigh: 8.14,
        allTimeLow: 0.799,
        description:
          "LEO Token is the utility token of the Bitfinex ecosystem. It provides utility for Bitfinex users and reduces their trading fees when used to pay for services across the platform.",
        website: "https://www.bitfinex.com",
        twitter: "https://twitter.com/bitfinex",
      },
      wbtc:{
        name: "Wrapped Bitcoin",
        symbol: "WBTC",
        price: 68450.0,
        change24h: 2.4,
        change7d: 8.1,
        marketCap: 10600000000,
        volume24h: 250000000,
        rank: 22,
        circulatingSupply: 155000,
        totalSupply: 155000,
        maxSupply: null,
        allTimeHigh: 73505.0,
        allTimeLow: 3139.17,
        description:
          "Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin. Completely transparent. 100% verifiable. Community led.",
        website: "https://wbtc.network",
        twitter: "https://twitter.com/WrappedBTC",
      },
      xlm:{
        name: "Stellar",
        symbol: "XLM",
        price: 0.125,
        change24h: 3.1,
        change7d: 9.8,
        marketCap: 3600000000,
        volume24h: 120000000,
        rank: 23,
        circulatingSupply: 28800000000,
        totalSupply: 50000000000,
        maxSupply: 50000000000,
        allTimeHigh: 0.875563,
        allTimeLow: 0.00047612,
        description:
          "Stellar is an open-source network for currencies and payments. Stellar makes it possible to create, send and trade digital representations of all forms of money—dollars, pesos, bitcoin, pretty much anything.",
        website: "https://www.stellar.org",
        twitter: "https://twitter.com/StellarOrg",
      },
      xmr:{
        name: "Monero",
        symbol: "XMR",
        price: 165.4,
        change24h: -0.8,
        change7d: 2.5,
        marketCap: 3000000000,
        volume24h: 85000000,
        rank: 24,
        circulatingSupply: 18100000,
        totalSupply: 18100000,
        maxSupply: null,
        allTimeHigh: 542.33,
        allTimeLow: 0.213,
        description:
          "Monero is a privacy-focused cryptocurrency released in 2014. It is an open-source protocol based on CryptoNote. It uses an obfuscated public ledger, meaning anyone can send or broadcast transactions, but no outside observer can tell the source, amount, or destination.",
        website: "https://www.getmonero.org",
        twitter: "https://twitter.com/monero",
      },
      etc:{
        name: "Ethereum Classic",
        symbol: "ETC",
        price: 28.5,
        change24h: 1.2,
        change7d: 5.8,
        marketCap: 4200000000,
        volume24h: 180000000,
        rank: 25,
        circulatingSupply: 147000000,
        totalSupply: 147000000,
        maxSupply: 210700000,
        allTimeHigh: 176.16,
        allTimeLow: 0.4524,
        description:
          "Ethereum Classic is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.",
        website: "https://ethereumclassic.org",
        twitter: "https://twitter.com/eth_classic",
      },
      okb:{
        name: "OKB",
        symbol: "OKB",
        price: 45.2,
        change24h: 0.9,
        change7d: 3.5,
        marketCap: 2700000000,
        volume24h: 15000000,
        rank: 26,
        circulatingSupply: 60000000,
        totalSupply: 300000000,
        maxSupply: 300000000,
        allTimeHigh: 59.34,
        allTimeLow: 0.281,
        description:
          "OKB is a global utility token issued by OK Blockchain Foundation, and the native token of the OKX ecosystem.",
        website: "https://www.okx.com",
        twitter: "https://twitter.com/okx",
      },
      fil:{
        name: "Filecoin",
        symbol: "FIL",
        price: 5.85,
        change24h: -2.3,
        change7d: 1.8,
        marketCap: 3400000000,
        volume24h: 140000000,
        rank: 27,
        circulatingSupply: 581000000,
        totalSupply: 581000000,
        maxSupply: 2000000000,
        allTimeHigh: 236.84,
        allTimeLow: 1.5,
        description:
          "Filecoin is a decentralized storage system that aims to store humanity's most important information. The project raised $205 million in an initial coin offering in 2017, and initially planned a launch date for mid-2019.",
        website: "https://filecoin.io",
        twitter: "https://twitter.com/Filecoin",
      },
      hbar:{
        name: "Hedera",
        symbol: "HBAR",
        price: 0.078,
        change24h: 4.5,
        change7d: 12.8,
        marketCap: 2800000000,
        volume24h: 95000000,
        rank: 28,
        circulatingSupply: 35900000000,
        totalSupply: 50000000000,
        maxSupply: 50000000000,
        allTimeHigh: 0.569229,
        allTimeLow: 0.00986111,
        description:
          "Hedera is a decentralized public network that utilizes the Hashgraph consensus algorithm to overcome the traditional limitations of blockchain and allow one to create the next era of fast, fair, and secure applications.",
        website: "https://hedera.com",
        twitter: "https://twitter.com/hedera",
      },
      atom:{
        name: "Cosmos",
        symbol: "ATOM",
        price: 8.95,
        change24h: -1.8,
        change7d: 3.2,
        marketCap: 3500000000,
        volume24h: 110000000,
        rank: 29,
        circulatingSupply: 391000000,
        totalSupply: 391000000,
        maxSupply: null,
        allTimeHigh: 44.7,
        allTimeLow: 1.16,
        description:
          "Cosmos is a decentralized network of independent parallel blockchains, each powered by BFT consensus algorithms like Tendermint consensus. The Cosmos network consists of many independent, parallel blockchains, called zones.",
        website: "https://cosmos.network",
        twitter: "https://twitter.com/cosmos",
      },
      vet:{
        name: "VeChain",
        symbol: "VET",
        price: 0.032,
        change24h: 2.7,
        change7d: 8.9,
        marketCap: 2300000000,
        volume24h: 75000000,
        rank: 30,
        circulatingSupply: 71900000000,
        totalSupply: 86700000000,
        maxSupply: 86700000000,
        allTimeHigh: 0.280991,
        allTimeLow: 0.002535,
        description:
          "VeChain is a blockchain platform designed to enhance supply chain management and business processes. Its goal is to streamline these processes and information flow for complex supply chains through the use of distributed ledger technology.",
        website: "https://www.vechain.org",
        twitter: "https://twitter.com/vechainofficial",
      },
        // Add more coins as needed
      }

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
