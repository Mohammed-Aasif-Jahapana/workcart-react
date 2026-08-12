import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { WishlistProvider } from './context/WishlistContext.jsx';
import { CartProvider } from './context/CartContext.jsx';

import { Provider } from "react-redux";
import { mystore } from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mystore}>
      <BrowserRouter>
        <WishlistProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishlistProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
