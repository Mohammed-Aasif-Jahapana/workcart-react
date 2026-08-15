import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetails from "./components/product/ProductDetails";
import WishedListPage from "./components/home/WishedListPage";
import AddCartPage from "./components/home/AddCartPage";

import ProtectedRoute from "./auth/ProtectedRoute";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

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
        element={
          <ProtectedRoute>
            <WishedListPage />
          </ProtectedRoute>

        }
      />
      <Route
        path="/addCart"
        element={
          <ProtectedRoute>
            <AddCartPage />
          </ProtectedRoute>

        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>

        }
      />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/order-success"element={<OrderSuccess />}/>

    </Routes>

  );
}
export default App
