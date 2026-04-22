import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";

// pages
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
import WarehouseDetail from "../pages/WarehouseDetail";
import Supplier from "../pages/Supplier";
import Handover from "../pages/Handover";
import NewSupplier from "../pages/NewSupplier";
import EditSupplier from "../pages/EditSupplier";
import SupplierDetail from "../pages/SupplierDetail";
import SupplierInvoice from "../pages/SupplierInvoice";

export default function AppRoutes() {
  return (
    <Routes>

      {/* LOGIN */}
      <Route path="/login" element={<Login />} />

      {/* APP */}
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
        <Route path="warehouse/:id" element={<WarehouseDetail />} />
        <Route path="supplier" element={<Supplier />} />
        <Route path="supplier/:id" element={<Handover />} />
        <Route path="supplier/add" element={<NewSupplier />} />
        <Route path="supplier/edit/:id" element={<EditSupplier />} />
        <Route path="supplier/detail/:id" element={<SupplierDetail />} />
        <Route path="supplier/invoice" element={<SupplierInvoice />} />

      </Route>

    </Routes>
  );
}