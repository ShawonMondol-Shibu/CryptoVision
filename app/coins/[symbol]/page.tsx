import CoinDetailPage from "../coin-detail-page"

export default function CoinDetail({ params }: { params: { symbol: string } }) {
  return <CoinDetailPage symbol={params.symbol} />
}
