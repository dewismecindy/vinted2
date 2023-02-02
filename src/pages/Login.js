import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email, password }
      );
      console.log(response.data);
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
