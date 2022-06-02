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
                  {item.src_url ? (
                    <a
                      href={item.src_url}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn bttn-color my-3 ${
                        currentLanguage === "en"
                          ? "heading-font"
                          : "heading-font-ge"
                      }`}
                    >
                      {t("btn_src_text")}
                    </a>
                  ) : null}

                  {item.web_url ? (
                    <a
                      href={item.web_url}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn bttn-color ${
                        currentLanguage === "en"
                          ? "heading-font"
                          : "heading-font-ge"
                      }`}
                    >
                      {t("btn_web_text")}
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="container mt reveal">
      <h1
        className={`medium-size-font ms-4 heading-color ${
          currentLanguage === "en" ? "heading-font" : "heading-font-ge"
        }`}
      >
        {t("experience")}
      </h1>

      {renderSection(
        t("experience_title1"),
        t("full_project", { returnObjects: true })
      )}
      {renderSection(
        t("experience_title2"),
        t("nonFull_project", { returnObjects: true })
      )}
    </div>
  );
}

export default Experiences;
