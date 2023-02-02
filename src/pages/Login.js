import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (handleToken) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email, password }
      );
      /* console.log(response.data); */
      handleToken = response.data.tokken;
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="signup-container" onSubmit={handleSubmit}>
      {" "}
      <h1>Se connecter</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input type="submit" value="connection" />{" "}
    </form>
  );
};

export default Login;
