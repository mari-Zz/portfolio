import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Footer({ currentLanguage }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { t } = useTranslation();

  const form = useRef();
  const alert = useRef();
  const error = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (inputs.name !== "" && inputs.email !== "" && inputs.message !== "") {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_KEY,
          process.env.REACT_APP_TEMPLATE_KEY,
          form.current,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      alert.current.style.display = "block";
      setTimeout(() => {
        alert.current.style.display = "none";
      }, 3000);
    } else {
      error.current.style.display = "block";
      setTimeout(() => {
        error.current.style.display = "none";
      }, 3000);
    }

    setInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputs({
      ...inputs,
      [e.target.name]: value,
    });
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <div
            className={`mb-3 ${
              currentLanguage === "en" ? "text-font" : "text-font-ge"
            }`}
          >
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
            />
          </div>
          <div
            className={`mb-3 ${
              currentLanguage === "en" ? "text-font" : "text-font-ge"
            }`}
          >
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Gmail"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div
            className={`mb-3 ${
              currentLanguage === "en" ? "text-font" : "text-font-ge"
            }`}
          >
            <label className="form-label text-color">{t("contact_me")}</label>
            <textarea
              name="message"
              className="form-control"
              rows="3"
              value={inputs.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <input
            type="submit"
            className={`btn submit ${
              currentLanguage === "en" ? "heading-font" : "heading-font-ge"
            }`}
            value={t("submit")}
          />
          <div
            ref={alert}
            id="alert"
            className={`alert alert-primary mt-3 ${
              currentLanguage === "en" ? "text-font" : "text-font-ge"
            }`}
            role="alert"
          >
            {t("alert_success")}
          </div>

          <div
            ref={error}
            id="error"
            className={`alert alert-danger mt-3 ${
              currentLanguage === "en" ? "text-font" : "text-font-ge"
            }`}
            role="alert"
          >
            {t("alert_error")}
          </div>
        </form>
      </div>
      <p
        className={`mt-3 text-center text-size-font ${
          currentLanguage === "en" ? "text-font" : "text-font-ge"
        }`}
      >
        MARIAM ZAQAREISHVILI &copy; 2022 / All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
