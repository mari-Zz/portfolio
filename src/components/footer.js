import { useTranslation } from "react-i18next";

function Footer({ currentLanguage }) {
  const { t } = useTranslation();
  return (
    <div className="container-bg spacing d-flex flex-column align-items-center">
      <form className="container">
        <h1
          id="contact"
          className={`heading-color ${
            currentLanguage === "en" ? "heading-font" : "heading-font-ge"
          }`}
        >
          {t("contact_header")}
        </h1>
        <div
          className={`mb-3 ${
            currentLanguage === "en" ? "text-font" : "text-font-ge"
          }`}
        >
          <label
            for="exampleFormControlInput1"
            className="form-label text-color"
          >
            {t("email_address")}
          </label>
          <input type="email" className="form-control" placeholder="Gmail" />
        </div>
        <div
          className={`mb-3 ${
            currentLanguage === "en" ? "text-font" : "text-font-ge"
          }`}
        >
          <label
            for="exampleFormControlTextarea1"
            className="form-label text-color"
          >
            {t("contact_me")}
          </label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <input
          type="submit"
          className={`btn submit ${
            currentLanguage === "en" ? "heading-font" : "heading-font-ge"
          }`}
          value={t("submit")}
        />
      </form>
      <p
        className={`text-color ${
          currentLanguage === "en" ? "text-font" : "text-font-ge"
        }`}
      >
        crated by &copy; MARIAM ZAQAREISHVILI
      </p>
    </div>
  );
}

export default Footer;
