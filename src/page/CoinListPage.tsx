import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CoinImage,
  CoinList,
  Coins,
  Container,
  Header,
  Title,
} from "../style/CoinListPage.Styled";
import { Loading } from "../style/Common.Styled";

interface CoinObject {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const ConiListPage = () => {
  const [coin, setCoin] = useState<CoinObject[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await res.json();
      setCoin(json.slice(0, 100));
      setLoading(true);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>

      {loading ? (
        <CoinList>
          {coin.map((coin) => (
            <Coins key={coin.id}>
              <Link to={`/${coin.id}`}>
                <CoinImage
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coins>
          ))}
        </CoinList>
      ) : (
        <Loading>Loading</Loading>
      )}
    </Container>
  );
};

export default ConiListPage;
