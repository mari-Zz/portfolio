function Header() {
  return (
    <header className="container-fluid md">
      <nav className="navbar small-size-font font">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              github
            </a>
          </li>
        </ul>

        <ul class="nav">
          <li class="nav-item justify-content-end">
            <a class="nav-link" href="#">
              555 41 91 10
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt ml font">
        <div className="large-size-font">WEB DEVELOPER</div>
        <div className="medium-size-font">MARIAM ZAQAREISHVILI</div>
      </div>
    </header>
  );
}

export default Header;
