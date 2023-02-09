/* eslint-disable no-sequences */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

/// ----------- FUNCTION & USETATES ----------- ///

const Signup = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [infos, setInfos] = useState(false);
  const navigate = useNavigate();

  const reDirection = () => {
    navigate("/");
  };

  /// ----------- FORM SIGN ----------- ///

  return (
    <div className="formulaire">
      <div className="App">
        <div>{infos ? <h1>Merci !</h1> : <h1>Rejoins-nous !</h1>}</div>
        {infos === false ? (
          <div className="input-block">
            <div>
              <p className="input-text">Pseudo</p>
              <input
                className="input"
                onChange={(username) => setName(username.target.value)}
                type="text"
                placeholder="Utilisateur"
                name="name"
                value={username}
              />
            </div>
            <div>
              <p className="input-text">Email</p>
              <input
                className="input"
                onChange={(elem) => setEmail(elem.target.value)}
                type="email"
                placeholder="youraddress@mail.com"
                name="email"
                value={email}
              />
            </div>
            <div>
              <p className="input-text">Mot de passe</p>
              <input
                className="input"
                onChange={(elem) => setPassword(elem.target.value)}
                type="password"
                name="password"
                value={password}
              />
            </div>
            <div className="upload-avatar">
              <p className="input-text">Avatar</p>{" "}
              <div>
                <input
                  className="upload-button"
                  type="file"
                  onChange={(event) => setAvatar(event.target.files[0])}
                  files={avatar}
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                ></input>
              </div>
            </div>

            <div></div>
            <div>
              <button
                className="button-join"
                onClick={() => {
                  if (!username || !email || !password) {
                    alert(`Vos informations ne sont pas complètes`);
                  } else {
                    const data = async () => {
                      const formdata = new FormData();
                      formdata.append("username", username);
                      formdata.append("email", email);
                      formdata.append("password", password);
                      formdata.append("newsletter", newsletter);
                      formdata.append("avatar", avatar);

                      try {
                        const response = await axios.post(
                          "https://site--backend-vinted--6qn7tv96v7tt.code.run/user/signup",
                          formdata
                        );
                        const token = response.data.token;
                        Cookies.set("token", token, { expires: 1 });
                        token ? setInfos(true) : <p>une erreur est survenue</p>;
                      } catch (error) {
                        console.log(error.message);
                      }
                    };
                    data();
                  }

                  /// ----------- SETIMEOUT FUNCTION ----------- ///

                  setTimeout(() => reDirection, "2000");
                }}
              >
                Créer un compte
              </button>
              <div className="oldMember">
                Vous avez déjà un compte ?{" "}
                <Link to="/Login">
                  <span>Se connecter</span>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Signup;
