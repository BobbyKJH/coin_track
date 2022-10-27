import { fetchCoinHistory } from "../api";
import { useQuery } from "react-query";

import ApexChart from "react-apexcharts";

interface coinChart {
  coinId: string | undefined;
}

interface coinOHLCV {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const ChartPage = ({ coinId }: coinChart) => {
  const { data, isLoading } = useQuery<coinOHLCV[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        <>Loading</>
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "sale",
              data: data?.map((price) => Number(price.close)) as number[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              background: "#fff",
            },
            stroke: {
              curve: "smooth",
              width: 6,
            },
            yaxis: { show: false },
            xaxis: {
              categories: data?.map((price) => price.time_close),
              type: "datetime",
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default ChartPage;
