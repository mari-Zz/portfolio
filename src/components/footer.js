function Footer() {
  return (
    <div className="container-bg spacing d-flex flex-column align-items-center">
      <form className="container">
        <h1 id="contact" className="heading-font heading-color">
          Contact
        </h1>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-font text-color"
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control text-font"
            placeholder="Gmail"
          />
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlTextarea1"
            className="form-label text-font text-color"
          >
            Example textarea
          </label>
          <textarea className="form-control text-font" rows="3"></textarea>
        </div>
        <input type="submit" className="btn submit heading-font" />
      </form>
      <p className="text-font text-color">
        crated by &copy; MARIAM ZAQAREISHVILI
      </p>
    </div>
  );
}

export default Footer;
