import "./App.css";
import { useState } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import OfferPay from "./pages/OfferPay";
import Offerslist from "./pages/Offerslist";
import Footer from "./components/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
function App() {
  const stripePromise = loadStripe(
    "pk_live_51MXnjiLt4xsVvemDPADf6JNNagp6S3vhx7BRUHUSDsSkgmFkkFoIOIUcFxm2g2zfuwnEaF89oXp5DYz1s3RCfCAs00pdEoo98C"
  );
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [product, setproduct] = useState("");
  const [priceMin, setPriceMin] = useState(0);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 7, sameSite: "strict" });
    } else {
      Cookies.remove("token");
    }
    setToken(token);
  };

  return (
    <Router>
      <Header
        token={token}
        setToken={setToken}
        handleToken={handleToken}
        product={product}
        setproduct={setproduct}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              product={product}
              setproduct={setproduct}
              priceMin={priceMin}
              setPriceMin={setPriceMin}
            />
          }
        />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/offer/pay"
          element={
            token ? (
              <Elements stripe={stripePromise}>
                <OfferPay token={token} />
              </Elements>
            ) : (
              <Signup />
            )
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/Offers"
          element={<Offerslist product={product} setproduct={setproduct} />}
        />
        <Route
          path="/publish"
          element={token ? <Publish token={token} /> : <Signup />}
        />
        <Route
          path="/login"
          element={<Login handleToken={handleToken} token={token} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
