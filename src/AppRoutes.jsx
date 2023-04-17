import { Routes, Route } from "react-router-dom";
import Body from "./pages/body/body";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import Product from "./pages/product/product";
import Salesman from "./pages/salesman/salesman";
import AddNewAt from "./pages/modal/ADVT";
import Comments from "./pages/modal/comments";
import Settings from "./pages/modal/ADVTsettings";
import ProtectedRoute from "./ProtectedRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/salesman/:id" element={<Salesman />} />
      <Route path="/comments/:id" element={<Comments />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/product" element={<Product />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings/:id" element={<Settings />} />
        <Route path="/product/:myadvt/:id" element={<Product />} />
        <Route path="/addnewat" element={<AddNewAt />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
