import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinListPage from "./page/CoinListPage";
import CoinDetailPage from "./page/CoinDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoinListPage />} />
        <Route path="/:coinId" element={<CoinDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
