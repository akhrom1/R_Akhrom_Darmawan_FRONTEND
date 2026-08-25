import { Routes, Route } from "react-router";

import MainLayout from "./components/MainLayout";
import ProductView from "./pages/ProductView";
import TransactionView from "./pages/TransactionView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProductView />} />
          <Route path="/trasaction" element={<TransactionView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
