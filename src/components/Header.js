import { Link } from "react-router-dom";

const Header = ({ token, handleToken, title, setTitle }) => {
  return (
    <div className="enTete">
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
        <div className="header-style">
          {token === null ? (
            <Link to="/Signup">
              <div className="button">S'inscrire | Se connecter</div>
            </Link>
          ) : (
            <div
              className="button"
              onClick={() => {
                handleToken(null);
              }}
            >
              Déconnecter
            </div>
          )}
          <Link to="/Publish">
            <div className="forPublish">Vendre tes articles</div>
          </Link>
        </div>
      </header>{" "}
      <div className="line"></div>
    </div>
  );
};

export default Header;
