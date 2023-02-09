import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, handleToken, title, setTitle }) => {
  const navigate = useNavigate;
  return (
    <div className="sticky-header">
      <header>
        <div>
          <Link to="/">
            <img
              src="https://www.vinted.fr/assets/web-logo/default/logo.svg"
              alt="Vinted"
            />
          </Link>
        </div>
        <input
          className="search-bar"
          type="search"
          placeholder="Rechercher des articles"
          name="Vinted"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        {token ? (
          <div className="sign-up">
            <button
              onClick={() => {
                handleToken(null);
                navigate("/");
              }}
            >
              se déconnecter
            </button>
          </div>
        ) : (
          <div className="sign-up">
            <Link to="/signup">
              <button>s'inscrire</button>
            </Link>
            <Link to="/login">
              <button>se connecter</button>
            </Link>
          </div>
        )}
        <Link to="/Publish">
          <button className="button">vends tes articles</button>
        </Link>
      </header>{" "}
      <div className="line"></div>
    </div>
  );
};

export default Header;
