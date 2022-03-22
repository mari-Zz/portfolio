function Header() {
  return (
    <header className="container-fluid md">
      <nav className="navbar small-size-font font">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              github
            </a>
          </li>
        </ul>

        <ul className="nav">
          <li className="nav-item justify-content-end">
            <a className="nav-link" href="#">
              555 41 91 10
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt d-flex flex-column align-items-center font">
        <div className="large-size-font">MARIAM ZAQAREISHVILI</div>
        <div className="medium-size-font">WEB DEVELOPER</div>
      </div>
    </header>
  );
}

export default Header;
