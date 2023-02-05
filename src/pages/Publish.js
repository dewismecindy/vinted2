import { Navigate } from "react-router-dom";
import { useState } from "react";

const Publish = ({ userToken }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setsize] = useState("");
  const [color, setColor] = useState("");

  return userToken ? (
    <form className="signup-container">
      <input type="text" />
      <input type="file" />
      <input type="text" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="number" />
    </form>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
