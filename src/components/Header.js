function Header() {
  return (
    <div className="">
      <div className="header-container mobile-container">
        <div className="d-flex justify-content-between">
          <a
            className="header-title"
            href="#"
            style={{ color: "#f2f2f2", textDecoration: "none" }}
          >
            <img
              src="images/logo-header.png"
              alt="Logo"
              width="150"
              height="50"
            ></img>
          </a>
        </div>
        <div
          className="text-dark"
          style={{ color: "#f2f2f2", textDecoration: "none" }}
        >
          Hola <b>Tomas. </b>&nbsp;
          <span>
            <a
              style={{ color: "0.2s ease-out 0s" }}
              href="#"
              className="login-btn"
              style={{ color: "#f2f2f2", textDecoration: "none" }}
            >
              Sign Out
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
