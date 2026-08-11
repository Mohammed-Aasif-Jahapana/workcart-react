import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetails from "./components/product/ProductDetails";
import WishedListPage from "./components/home/WishedListPage";
import AddCartPage from "./components/home/AddCartPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />
      <Route
        path="/wishedList"
        element={<WishedListPage />}
      />
      <Route
        path="/addCart"
        element={<AddCartPage />}
      />

    </Routes>

  );
}
export default App
