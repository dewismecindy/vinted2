import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [brand, SetBrand] = useState("");
  const [size, SetSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, SetCondition] = useState("");
  const [price, setPrice] = useState();
  const [city, SetCity] = useState("");
  const [picture, SetPicture] = useState(null);
  const navigate = useNavigate();

  return token ? (
    <div className="publish-background">
      <container className="publish-container">
        <h1>Vends ton article</h1>

        {/* FORM PUBLISHING */}

        <form
          className="publish-form"
          onSubmit={async (event) => {
            event.preventDefault();

            const formData = new FormData();

            formData.append("title", title);
            formData.append("description", description);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("color", color);
            formData.append("condition", condition);
            formData.append("price", price);
            formData.append("picture", picture);

            try {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: "Bearer " + token,
                  },
                }
              );
              console.log(response.data);
              // const objectId = response.data._id;
              navigate(`/product/${response.data._id}`);
            } catch (error) {
              console.log(error.response);
            }
          }}
        >
          <div className="publish-form-divs">
            <input
              type="file"
              onChange={(event) => {
                SetPicture(event.target.files[0]);
              }}
            ></input>
          </div>
          <div className="publish-form-divs">
            <div>
              <label id="product">Titre</label>
              <input
                id="product"
                type="text"
                placeholder="vêtement"
                value={title}
                onChange={(event) => {
                  SetTitle(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label id="description">Décris ton article</label>
              <textarea
                id="description"
                cols="40"
                rows="5"
                placeholder="ex: : portée quelques fois"
                value={description}
                onChange={(event) => {
                  SetDescription(event.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="publish-form-divs">
            <div>
              <label id="marque">Marque</label>
              <input
                id="marque"
                type="text"
                placeholder="ex : Hugo Boss"
                value={brand}
                onChange={(event) => {
                  SetBrand(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label id="taille">Taille</label>
              <input
                id="taille"
                type="text"
                placeholder="ex : par ex : taille 38"
                value={size}
                onChange={(event) => {
                  SetSize(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label id="couleur">Couleur</label>
              <input
                id="couleur"
                type="text"
                placeholder="ex : Rouge et bleue"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label id="etat">Etat</label>
              <input
                id="etat"
                type="text"
                placeholder="ex : Neuf"
                value={condition}
                onChange={(event) => {
                  SetCondition(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label id="lieu">Lieu</label>
              <input
                id="lieu"
                type="text"
                placeholder="ex : Paris"
                value={city}
                onChange={(event) => {
                  SetCity(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="publish-form-divs">
            <div>
              <label id="prix">Prix</label>
              <input
                id="prix"
                type="number"
                placeholder="ex : 120 €"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </container>
    </div>
  ) : (
    <Navigate to="/signup" />
  );
};
export default Publish;
