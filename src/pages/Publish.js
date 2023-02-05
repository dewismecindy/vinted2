import { Navigate } from "react-router-dom";
import { useState } from "react";

const Publish = ({ userToken }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", state);
      formData.append("city", location);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);
    } catch (error) {
      console.log(error);
    }
  };

  return userToken ? (
    <form className="signup-container">
      <input
        type="file"
        onChange={(event) => {
          setPicture(event.target.files[0]);
        }}
      />
      <input
        value={title}
        type="text"
        placeholder="Titre"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <textarea
        value={description}
        placeholder="Description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></textarea>
      <input
        value={brand}
        type="text"
        placeholder="Marque"
        onChange={(event) => {
          setBrand(event.target.value);
        }}
      />
      <input
        value={size}
        type="text"
        placeholder="Taille"
        onChange={(event) => {
          setSize(event.target.value);
        }}
      />
      <input
        value={color}
        type="text"
        placeholder="Couleur"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <input
        value={state}
        type="text"
        placeholder="Etat"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <input
        value={location}
        type="text"
        placeholder="Lieu"
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      />
      <input
        value={price}
        type="number"
        placeholder="Prix"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <button onClick={handleSubmit}>Ajouter</button>
    </form>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
