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
    <p className="messageLoading">En cours de chargement ...</p>
  ) : (
    <>
      {" "}
      <div className="imgHome">
        <img
          src="https://static.vinted.com/assets/seller-promotion/gender_test/a/banner-wide-7403f719caac875cfeea61593da7fc7e7320c126193b4ff654e4397f54d430ae.jpg"
          alt=""
        />
        <div className="imgPresentation">
          <div className="messagePresentation">
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
        <Link to="/Offer">
          <div className="see-all">Voir tout</div>
        </Link>
      </div>
      <div className="introduction">
        {data.offers.map((offer, index) => {
          return (
            <div className="sell-card">
              <Link
                className="image-container"
                key={offer._id}
                to={`/offer/${offer._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="offer"></div>
                <div className="avatar">
                  <img
                    src={offer.owner.account.avatar?.secure_url}
                    alt="url-owner"
                  />
                  <p>{offer.owner.account.username}</p>
                </div>
                <img src={offer.product_image.secure_url} alt="" />
                <span>{offer.product_price} €</span>
                {offer.product_details.map((element, index) => {
                  return element.TAILLE && <p key={index}>{element.TAILLE} </p>;
                })}
                {offer.product_details.map((element, index) => {
                  return element.MARQUE && <p key={index}>{element.MARQUE} </p>;
                })}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
