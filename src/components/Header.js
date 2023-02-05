import { Link } from "react-router-dom";

const Header = ({ handleToken, userToken }) => {
  return (
    <div>
      <div>
        <Link to="/">
          <img
            src="https://www.vinted.fr/assets/web-logo/default/logo.svg"
            alt="Vinted"
          />
        </Link>
      </div>

      {!userToken ? (
        <>
          <Link to="/login">
            <div className="button">Connexion</div>
          </Link>
          <Link to="/signup">
            <div className="button">S'inscrire</div>
          </Link>
        </>
      ) : (
        <div
          className="button"
          onClick={() => {
            handleToken();
          }}
        >
          Déconnexion
        </div>
      )}
      <Link to="/publish">
        <button>Vends tes articles</button>
      </Link>
      <div className="line"></div>
    </div>
  );
};

export default Header;
