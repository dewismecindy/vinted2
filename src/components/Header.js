import { Link } from "react-router-dom";

const Header = (handleToken) => {
  return (
    <div>
      <p>Logo</p>
      <Link to="/login">
        <button>Connexion</button>
      </Link>
      <Link to="/signup">
        <button>S'inscrire</button>
      </Link>
      <button
        onClick={() => {
          handleToken();
        }}
      >
        Déconnexion
      </button>
    </div>
  );
};

export default Header;
