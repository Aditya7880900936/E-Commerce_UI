
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import LoginPage from "./Components/login";
import SignupPage from "./Components/sign";

function App() {

  return (
    <>
    <div className="overflow-hidden">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path ="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Sidebar/>
        <Footer/>
        </BrowserRouter>

    </div>
    </>
  );
}

export default App;
