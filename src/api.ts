import axios from "axios";

const BASE_URL = "https://api.coinpaprika.com/v1";

export const fetchCoins = async () => {
  const { data } = await axios.get(`${BASE_URL}/coins`);
  return data;
};

export const fetchCoinInfo = async (coinId: string | undefined) => {
  const { data } = await axios.get(`${BASE_URL}/coins/${coinId}`);
  return data;
};

export const fetchCoinTickers = async (coinId: string | undefined) => {
  const { data } = await axios.get(`${BASE_URL}/tickers/${coinId}`);
  return data;
};

export const fetchCoinHistory = async (coinId: string | undefined) => {
  const { data } = await axios.get(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  );
  return data;
};
