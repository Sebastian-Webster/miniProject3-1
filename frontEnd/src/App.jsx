import { AuthProvider } from 'react-auth-kit'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import RouteComponent from './routes';

import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from './pages/ProductList';
import Register from "./pages/Register";
import Product from './pages/Product';
import Cart from './pages/Cart';

const App = () => {
  return (
    <AuthProvider authType='cookie' authName='_auth' cookieDomain={window.location.hostname} cookieSecure={window.location.protocol === "https:"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
