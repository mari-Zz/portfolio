import { useTranslation } from "react-i18next";

function Footer({ currentLanguage }) {
  const { t } = useTranslation();
  return (
    <div className="container spacing">
      <h1
        id="contact"
        className={`heading-color ${
          currentLanguage === "en" ? "heading-font" : "heading-font-ge"
        }`}
      >
        {t("contact_header")}
      </h1>
      <div>
        {/* TODO
        <div className="d-flex justify-content-around flex-wrap">
          <div className="d-flex align-items-center">
            <GrMail className="me-2" />
            mail
          </div>
          <div className="d-flex align-items-center ">
            <GrMail className="me-2" />
            phone
          </div>
          <div className="d-flex align-items-center">
            <GrMail className="me-2" />
            fb
          </div>
        </div> */}
        <form className="">
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
      </div>
      <p
        className={`fw-bold mt-3 text-center ${
          currentLanguage === "en" ? "text-font" : "text-font-ge"
        }`}
      >
        MARIAM ZAQAREISHVILI &copy; 2022 / All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
