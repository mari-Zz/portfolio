import { useTranslation } from "react-i18next";

function Experiences({ currentLanguage }) {
  const { t } = useTranslation();

  const renderSection = (title, object) => {
    return (
      <>
        <h2
          className={`small-size-font mt-4 ms-4 text-color ${
            currentLanguage === "en" ? "heading-font" : "heading-font-ge"
          }`}
        >
          {title}
        </h2>
        <div className="d-flex flex-wrap justify-content-around mt-4">
          {object.map((item) => {
            return (
              <div
                className="card box-shadow m-4 p-2 rounded background-color"
                style={{ width: "33rem" }}
                key={item.title}
              >
                <img
                  src={item.img}
                  className="card-img-top rounded box-shadow"
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5
                    className={`card-title align-self-center ${
                      currentLanguage === "en"
                        ? "heading-font"
                        : "heading-font-ge"
                    }`}
                  >
                    {item.title}
                  </h5>
                  <p
                    className={`card-text ${
                      currentLanguage === "en" ? "text-font" : "text-font-ge"
                    }`}
                    style={{ textAlign: "justify" }}
                  >
                    {item.description}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn bttn-color ${
                      currentLanguage === "en"
                        ? "heading-font"
                        : "heading-font-ge"
                    }`}
                  >
                    {t("btn_text")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="container mt">
      <h1
        className={`medium-size-font ms-4 heading-color ${
          currentLanguage === "en" ? "heading-font" : "heading-font-ge"
        }`}
      >
        {t("experience")}
      </h1>

      {renderSection(
        t("experience_title1"),
        t("univercity", { returnObjects: true })
      )}
      {renderSection(
        t("experience_title2"),
        t("professional", { returnObjects: true })
      )}
    </div>
  );
}

export default Experiences;
