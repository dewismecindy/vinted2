import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Publish = ({ baseUrl }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [file, setFile] = useState(null);
  const [city, setCity] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const token = Cookies.get("token");

  return token ? (
    <div className="publish">
      <form
        className="container"
        onSubmit={async (event) => {
          event.preventDefault();

          const formData = new FormData();
          formData.append("title", title);
          formData.append("description", description);
          formData.append("price", price);
          formData.append("condition", condition);
          formData.append("city", city);
          formData.append("brand", brand);
          formData.append("size", size);
          formData.append("color", color);
          formData.append("picture", file);

          try {
            const response = await axios.post(
              `${baseUrl}/offer/publish`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: "Bearer " + token,
                },
              }
            );
            console.log(response);
          } catch (error) {
            setError("Un champ est mal renseigné, Veuillez recommencer");
          }
        }}
      >
        <h3>Vends ici ton article</h3>
        <section className="background-publish">
          <div className="add-photo">
            <div>
              <label htmlFor="file"> Ajouter une photo</label>
            </div>
            <input
              className="input-add-photo"
              name="file"
              id="file"
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </div>
        </section>
        <section className="background-publish">
          <div>
            <label htmlFor="title">Titre</label>
            <input
              className="input-publish"
              type="text"
              name="title"
              id="title"
              placeholder="Pull de Noël"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <p className="separation-publish"></p>
          <div>
            <label htmlFor="description">Décris ton article</label>
            <textarea
              className="input-publish"
              name="description"
              id="description"
              rows="5"
              value={description}
              placeholder="Article neuf, offert par mamie en 1992"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            ></textarea>
          </div>
        </section>
        <section className="background-publish">
          <div>
            <label htmlFor="brand">Marque</label>
            <input
              className="input-publish"
              type="text"
              name="brand"
              id="brand"
              placeholder="Disney"
              value={brand}
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <p className="separation-publish"></p>
          <div>
            <label htmlFor="size">Taille</label>
            <input
              className="input-publish"
              type="text"
              name="size"
              id="size"
              placeholder="XXXXXL"
              value={size}
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <p className="separation-publish"></p>
          <div>
            <label htmlFor="color">Couleur</label>
            <input
              className="input-publish"
              type="text"
              name="color"
              id="color"
              placeholder="Rouge père Noël"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <p className="separation-publish"></p>
          <div>
            <label htmlFor="condition">Etat</label>
            <input
              className="input-publish"
              type="text"
              name="condition"
              id="condition"
              placeholder="Porté 10 min à Noël 1992"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
          <p className="separation-publish"></p>
          <div>
            <label htmlFor="city">Lieu</label>
            <input
              className="input-publish"
              type="text"
              name="city"
              id="city"
              placeholder="Lille"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
        </section>
        <section className="background-publish">
          <div>
            <label htmlFor="price">Prix</label>
            <input
              className="input-publish"
              type="number"
              name="price"
              id="price"
              placeholder="Valeur sentimentale :P"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="background-publish">
            <label></label>
            <div className="checkbox-publish">
              <input type="checkbox" id="exchange" name="exchange" />
              <label className="info-publish" htmlFor="exchange">
                Je suis intéressé(e) par les échanges
              </label>
            </div>
          </div>
        </section>
        <div className="submit-publish">
          <button>Ajouter</button>
        </div>
        <p>{error}</p>
      </form>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: "/publish" }} />
  );
};

export default Publish;
