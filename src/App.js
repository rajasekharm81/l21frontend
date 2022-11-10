import { Route, Routes } from "react-router-dom";

import "./App.css";

import ContactUs from "./components/ContactUs";
import Orders from "./components/Orders";
import Home from "./components/home";
import Login from "./components/Login";
import AdminDashboard from "./components/adminDashboard";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import Payment from "./components/PaymentPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/orders" element={<Orders />} />
      <Route exact path="/adminPanel/login" element={<Login />} />
      <Route exact path="/adminDashboard" element={<AdminDashboard />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/contactUs" element={<ContactUs />} />
      <Route exact path="/Shop" element={<Shop />} />
      <Route exact path="payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
