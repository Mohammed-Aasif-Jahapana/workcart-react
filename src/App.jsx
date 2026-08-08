import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProductDetails from "./components/product/ProductDetails"; 
import WishedListPage from "./components/home/WishedListPage";

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

   
    </Routes>
    
  );
}
export default App
