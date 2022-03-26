import { useTranslation } from "react-i18next";

function AboutMe({ currentLanguage }) {
  const { t } = useTranslation();
  return (
    <div className="container spacing p-4 rounded background-color">
      <h1
        className={`medium-size-font  ms-4 ${
          currentLanguage === "en" ? "heading-font" : "heading-font-ge"
        }`}
      >
        {t("about_me")}
      </h1>
      <div className="row justify-content-md-center mb-3">
        <div className="col-4 w-25 mt-3 me-5">
          <img className="rounded img-fluid" src="./img/me.jpg" alt="me" />
        </div>
        <div
          className={`col-8 w-50 m-5 fs-5 ${
            currentLanguage === "en" ? "text-font" : "text-font-ge"
          }`}
          style={{ textAlign: "justify" }}
        >
          {t("about_me_text")}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
