import CoinDetailPage from "../coin-detail-page"

interface PageProps {
  params: { symbol: string }
}

export default function CoinDetail({ params }: PageProps) {
  return <CoinDetailPage symbol={params.symbol} />
}
