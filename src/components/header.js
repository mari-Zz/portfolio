import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsGlobe2 } from "react-icons/bs";
import i18next from "i18next";

function Header({ currentLanguage, setCurrentLanguage }) {
  const { t } = useTranslation();

  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById("contact"));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="container-fluid md">
      <nav
        className={`navbar small-size-font ${
          currentLanguage === "en" ? "heading-font" : "heading-font-ge"
        }`}
      >
        <ul className="nav gradiant">
          <li className="nav-item">
            <a className="nav-link" href="#contact" onClick={handleClick}>
              {t("contact")}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mari-Zz"
            >
              {t("github")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {t("resume")}
            </a>
          </li>
        </ul>

        <ul className="nav ">
          <div className="btn-group">
            <button
              type="button"
              className="btn globe dropdown-toggle small-size-font gradiant"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ boxShadow: "none" }}
            >
              <BsGlobe2 />
            </button>
            <ul className="dropdown-menu dropdown-menu-end background-color">
              <li>
                <button
                  className="dropdown-item dropdown"
                  onClick={() => {
                    i18next.changeLanguage("en");
                    setCurrentLanguage("en");
                  }}
                >
                  <span className="flag-icon flag-icon-gb me-2"></span>
                  English
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item dropdown heading-font-ge"
                  onClick={() => {
                    i18next.changeLanguage("ka");
                    setCurrentLanguage("ka");
                  }}
                >
                  <span className="flag-icon flag-icon-ge me-2"></span>
                  ქართული
                </button>
              </li>
            </ul>
          </div>
        </ul>
      </nav>

      <div
        className={`mt d-flex flex-column align-items-center ${
          currentLanguage === "en" ? "heading-font" : "heading-font-ge"
        }`}
      >
        <div className="large-size-font heading-color">{t("name")}</div>
        <div className="medium-size-font  text-color">{t("profession")}</div>
      </div>
    </header>
  );
}

export default Header;
