import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsGlobe2, BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import i18next from "i18next";

function Header({ currentLanguage, setCurrentLanguage }) {
  const { t } = useTranslation();

  const [anchorTarget, setAnchorTarget] = useState(null);
  const [backColor, setBackColor] = useState("hsla(206, 31%, 84%, 0.411)");

  useEffect(() => {
    setAnchorTarget(document.getElementById("contact"));
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = backColor;
  }, [backColor]);

  const handleClick = (e) => {
    e.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleBackgroundColor = () => {
    if (backColor === "hsla(206, 31%, 84%, 0.411)") {
      setBackColor("#0A090D");
    } else {
      setBackColor("hsla(206, 31%, 84%, 0.411)");
    }
  };

  return (
    <header className="container-fluid md">
      <nav
        className={`navbar small-size-font ${
          currentLanguage === "en" ? "heading-font" : "heading-font-ge"
        }`}
      >
        <ul className="nav gradiant nav-bigScreen">
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
        </ul>

        {/* for responsive navbar */}
        <ul className="nav nav-smallScreen">
          <li className="btn-group">
            <button
              type="button"
              className="btn globe small-size-font gradiant"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ boxShadow: "none" }}
            >
              <GiHamburgerMenu />
            </button>
            <ul className="dropdown-menu background-color">
              <li>
                <a
                  className="dropdown-item dropdown"
                  href="#contact"
                  onClick={handleClick}
                >
                  <div className="d-flex align-items-center">
                    <GrMail className="me-2" />
                    {t("contact")}
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item dropdown"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/mari-Zz"
                >
                  <div className="d-flex align-items-center">
                    <AiFillGithub className="me-2" />
                    {t("github")}
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="nav ">
          <li className="btn-group">
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
                  className="dropdown-item dropdown heading-font"
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
          </li>
          <li className="ms-2">
            <button
              type="button"
              className="btn small-size-font"
              aria-expanded="false"
              style={{ boxShadow: "none", color: "#f2de79" }}
              onClick={toggleBackgroundColor}
            >
              {backColor === "hsla(206, 31%, 84%, 0.411)" ? (
                <BsFillMoonFill />
              ) : (
                <BsFillSunFill />
              )}
            </button>
          </li>
        </ul>
      </nav>

      <div
        className={`mt d-flex flex-column align-items-center justify-content-center ${
          currentLanguage === "en" ? "heading-font" : "heading-font-ge"
        }`}
      >
        <div className="large-size-font heading-color text-center">
          {t("name")}
        </div>
        <div className="medium-size-font text-color text-center">
          {t("profession")}
        </div>
      </div>
    </header>
  );
}

export default Header;
