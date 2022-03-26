function Footer({ currentLanguage }) {
  return (
    <div className="container-bg spacing d-flex flex-column align-items-center">
      <form className="container">
        <h1
          id="contact"
          className={`heading-color ${
            currentLanguage === "en" ? "heading-font" : "heading-font-ge"
          }`}
        >
          Contact
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
            Email address
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
            Example textarea
          </label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <input type="submit" className="btn submit heading-font" />
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
