import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>Logo</p>
      <Link to="/login">
        <button>Connexion</button>
      </Link>
      <Link to="/signup">
        <button>S'inscrire</button>
      </Link>
      <button>Déconnexion</button>
    </div>
  );
};

export default Header;
