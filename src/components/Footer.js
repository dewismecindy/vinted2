const Footer = () => {
  return (
    <footer>
      <div className="footer-flex">
        <div className="navBar">
          <div className="buttonOfNavbar">Politique de Confidentialité</div>
          <div className="buttonOfNavbar">Politique de cookies</div>
          <div className="buttonOfNavbar">Paramètres des cookies</div>
          <div className="buttonOfNavbar">Termes et Conditions</div>
          <div className="buttonOfNavbar">Notre plateforme</div>
          <div className="buttonOfNavbar">Conditions de vente pro</div>
          <div className="buttonOfNavbar">Conditions d'utilisation Pro</div>
        </div>
      </div>
      <div className="signature">
        {" "}
        <p>
          {" "}
          <a href="https://www.linkedin.com/in/cindy-dewisme-b7951b251/">
            🫅🏻 By Cindewi 🫅🏻
          </a>{" "}
        </p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
