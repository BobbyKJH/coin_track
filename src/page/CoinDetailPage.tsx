import { useParams } from "react-router-dom";

const CoinDetailPage = () => {
  const { coinId } = useParams<{ coinId: string }>();

  return (
    <div>
      <span>1</span>
    </div>
  );
};

export default CoinDetailPage;
