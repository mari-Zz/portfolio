function AboutMe() {
  return (
    <div className="container spacing p-4 text-light bg-dark rounded">
      <h1 className="medium-size-font font ms-4">About Me</h1>
      <div className="row justify-content-md-center">
        <div className="col-4 w-25 mt-3 me-5">
          <img className="rounded img-fluid" src="./img/me.jpg" alt="me" />
        </div>
        <div className="col-8 w-50 m-5 fs-5" style={{ textAlign: "justify" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
