import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        /*  console.log(response.data); */
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p className="loading-text">En cours de chargement ...</p>
  ) : (
    <>
      {" "}
      <div className="img-advertise">
        <img
          src="https://static.vinted.com/assets/seller-promotion/gender_test/a/banner-wide-7403f719caac875cfeea61593da7fc7e7320c126193b4ff654e4397f54d430ae.jpg"
          alt=""
        />
        <div className="box-advertise">
          <div className="style-advertise">
            Prêts à faire du tri dans vos placards ?
          </div>
          <Link to="/Publish">
            <button className="advertise-button">Vends maintenant</button>
          </Link>
        </div>
        <div className="scratch-effect">
          <img
            className="torn"
            src="https://static.vinted.com/assets/hero-block/tear-d431548c90905ad757632e4c3075d9473e38c7c6642721efeae9413afb9387a2.svg"
            alt="torn"
          />
        </div>
      </div>
      <div className="offers-list">
        <div className="populaire">ARTICLES POPULAIRE</div>
        <Link to="/Offers">
          <div className="see-all">Voir tout</div>
        </Link>
      </div>
      <div>
        {data.offers.map((offer, index) => {
          return (
            <Link
              className="linkOffers"
              key={offer._id}
              to={`/offer/${offer._id}`}
            >
              <p>{offer.product_name}</p>
              <img src={offer.product_image.secure_url} alt="" />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
