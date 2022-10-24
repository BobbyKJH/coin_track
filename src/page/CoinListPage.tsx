import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";
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
  const { isLoading, data } = useQuery<CoinObject[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>

      {isLoading ? (
        <Loading>Loading</Loading>
      ) : (
        <CoinList>
          {data?.slice(0, 10).map((coin) => (
            <Coins key={coin.id}>
              <Link to={`/${coin.id}`} state={coin.name}>
                <CoinImage
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coins>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default ConiListPage;
