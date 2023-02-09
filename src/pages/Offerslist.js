import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

/// ----------- FUNCTIONS & USETATES ----------- ///

const Offerslist = ({ product, setproduct }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pricing, setPricing] = useState("");
  const [mini, setMini] = useState("");
  const [maxi, setMaxi] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers/offers?${pricing}&product=${product}&priceMin=${mini}&priceMax=${maxi}`
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pricing, mini, maxi, product]);

  return isLoading ? (
    <div className="loading">
      <div className="messageLoading">En cours de changement...</div>
    </div>
  ) : (
    <>
      {/* /// ----------- FILTERS BUTTONS ----------- ///  */}

      <div className="navBar-offers">
        <button
          className="button-offer"
          onClick={() => {
            setPricing("sort=price-asc");
          }}
        >
          Prix ↑
        </button>
        <button
          className="button-offer"
          onClick={() => {
            setPricing("sort=price-desc");
          }}
        >
          Prix ↓
        </button>
        <input
          className="input-offer"
          type="text"
          placeholder="Prix mini"
          onChange={(elem) => setMini(elem.target.value)}
          value={mini}
        ></input>
        <input
          className="input-offer"
          type="text"
          placeholder="Prix maxi"
          onChange={(elem) => setMaxi(elem.target.value)}
          value={maxi}
        ></input>
        <input
          className="input-offer"
          type="text"
          placeholder="Article"
          onChange={(elem) => setproduct(elem.target.value)}
          value={product}
        ></input>
      </div>

      {/* /// ----------- OFFER ELEMENT STYLE ----------- ///  */}

      <div className="introduction">
        {data.map((elem, index) => {
          return (
            <div key={index}>
              {elem.owner !== undefined ? (
                <div className="sell-card">
                  <div className="user-id">
                    {elem.owner === undefined
                      ? ""
                      : elem.owner.account.username}
                  </div>

                  <Link to={`/offer/${elem._id}`}>
                    <div className="image-container">
                      <img
                        src={
                          elem.product_image.secure_url
                            ? elem.product_image.secure_url
                            : null
                        }
                        alt="product"
                      />
                    </div>
                  </Link>

                  <div className="product-price">{elem.product_price} €</div>
                  <div className="product-info">
                    {elem.product_details[1].size}
                  </div>
                  <div className="product-info">
                    {elem.product_details[0].brand}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Offerslist;
