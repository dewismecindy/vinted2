import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

/// ----------- FUNCTION & USESTATES ----------- ///

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <div className="loading">
      <p className="messageLoading">Chargement en cours ...</p>
    </div>
  ) : (
    /// ----------- OFFER STYLE DISPLAY ----------- ///

    <div className="listOffers">
      <div className="offers-list-2">
        <div className="populaire"></div>
        <Link to="/Offer">
          <div className="back-return"> Retour</div>
        </Link>
      </div>
      <div className="offer-presentation">
        <div className="img-element">
          <img
            className="img-offer"
            src={data.product_image["secure_url"]}
            alt=""
          />
          <div></div>
        </div>
        <div className="box-details">
          {" "}
          <div className="detail-price">{data.product_price} €</div>
          <div className="listing-props">
            <div className="detail-elem">
              <div className="elem-id">MARQUE</div>{" "}
              <div>{data.product_details[0]["brand"]}</div>
            </div>
            <div className="detail-elem">
              <div className="elem-id">TAILLE</div>{" "}
              <div>{data.product_details[1]["size"]}</div>
            </div>
            <div className="detail-elem">
              <div className="elem-id">ETAT</div>{" "}
              <div>{data.product_details[2]["quality"]}</div>
            </div>
            <div className="detail-elem">
              <div className="elem-id">COULEUR</div>
              <div>{data.product_details[3]["color"]}</div>
            </div>
            <div className="detail-elem">
              <div className="elem-id">EMPLACEMENT</div>
              <div>{data.product_details[4]["city"]}</div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="product-name">{data.product_name} </div>
          <div className="product-description">{data.product_description} </div>
          <div className="user-id-offer">
            <img
              className="avatar-profil"
              src={
                data.owner.avatar
                  ? data.owner.avatar.secure_url
                  : "https://res.cloudinary.com/dlfp2xvis/image/upload/v1668451320/my-content/photo-avatar-profil_tkttgw.png"
              }
              alt=""
            />

            {data.owner === undefined ? null : data.owner["account"].username}
          </div>
          <div className="buy-button">
            <Link
              to="/offer/pay"
              state={{
                id: data._id,
                product: data.product_name,
                price: data.product_price,
                description: data.product_description,
                image: data.product_image["secure_url"],
              }}
            >
              <div>
                <button>Acheter</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
