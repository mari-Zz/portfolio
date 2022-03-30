import { useTranslation } from "react-i18next";

function AboutMe({ currentLanguage }) {
  const { t } = useTranslation();
  return (
    <div className="container spacing p-4 rounded background-color">
      <h1
        className={`medium-size-font  ms-3 ${
          currentLanguage === "en" ? "heading-font" : "heading-font-ge"
        }`}
      >
        {t("about_me")}
      </h1>

      <div
        className="row justify-content-md-center clearfix m-2 mb-3"
        style={{ "--gap": "2rem" }}
      >
        <div className="col-sm-4">
          <img className="rounded img-size" src="./img/me.jpg" alt="me" />
        </div>
        <div
          className={`col-sm-8 text-size-font mt-2 ${
            currentLanguage === "en" ? "text-font" : "text-font-ge"
          }`}
        >
          {t("about_me_text")}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
