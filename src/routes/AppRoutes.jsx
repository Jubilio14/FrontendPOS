import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Revenue from "../pages/Revenue";
import SalesCategory from "../pages/SalesCategory";
import Cashier from "../pages/Cashier";
import Invoice from "../pages/Invoice";
import Product from "../pages/Product";
import DetailProduct from "../pages/DetailProduct";
import History from "../pages/History";
import OrderDetail from "../pages/OrderDetail";
import Warehouse from "../pages/Warehouse";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="revenue" element={<Revenue />} />
        <Route path="sales-category" element={<SalesCategory />} />
        <Route path="cashier" element={<Cashier />} />        
        <Route path="invoice" element={<Invoice />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<DetailProduct />} />
        <Route path="history" element={<History />} />
        <Route path="history/order-detail" element={<OrderDetail />} />
        <Route path="warehouse" element={<Warehouse />} />
      </Route>
    </Routes>
  );
}