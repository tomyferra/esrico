function Footer() {
  return (
    <div className="container-footer">
      <div className="donations">
        <h2 style={{ color: "white", textDecoration: "none" }}>Donaciones</h2>
        <div className="bubbles">
          <a
            rel="noreferrer"
            href="https://linktr.ee/tomasferrari"
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
          >
            <i className="fa fa-bitcoin" aria-hidden="true"></i>&nbsp;
            Cripto&nbsp;
          </a>
          <div style={{ display: "flex" }}>
            <img
              src="https://cdn.cafecito.app/imgs/cafecito_logo.svg"
              alt="cafecito"
            ></img>
            <a
              href="https://cafecito.app/tomyferra"
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: 2, color: "white", textDecoration: "none" }}
            >
              &nbsp; Cafecito
            </a>
          </div>
        </div>
      </div>
      <div
        className="agradecimientos"
        style={{ color: "white", textDecoration: "none" }}
      >
        Gracias por su ayuda!
        <div
          className="bubbles"
          style={{ color: "white", textDecoration: "none" }}
        ></div>
      </div>
      <div className="social-network">
        <h2 style={{ color: "white", textDecoration: "none" }}>
          Redes Sociales
        </h2>
        <div className="bubbles">
          <a
            href="mailto:ferra.tomy@gmail.com"
            style={{ color: "white", textDecoration: "none" }}
          >
            <i className="fa fa-google" aria-hidden="true"></i>&nbsp; Mail
          </a>
          <a
            href="https://instagram.com/tomyferra"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#FFFFFF", textDecoration: "none", marginLeft: 2 }}
          >
            <i class="fa fa-instagram"></i>&nbsp; Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
