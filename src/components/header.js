function Header() {
  return (
    <header className="container-fluid md">
      <nav className="navbar small-size-font heading-font">
        <ul className="nav gradiant">
          <li className="nav-item">
            <a className="nav-link" href="#">
              contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mari-Zz"
            >
              github
            </a>
          </li>
        </ul>

        <ul className="nav gradiant">
          <li className="nav-item justify-content-end">
            <a className="nav-link" href="#">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt d-flex flex-column align-items-center heading-font">
        <div className="large-size-font heading-color">
          MARIAM ZAQAREISHVILI
        </div>
        <div className="medium-size-font  text-color">WEB DEVELOPER</div>
      </div>
    </header>
  );
}

export default Header;
