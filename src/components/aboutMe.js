function AboutMe() {
  return (
    <div className="container spacing p-4 rounded background-color">
      <h1 className="medium-size-font heading-font ms-4 ">About Me</h1>
      <div className="row justify-content-md-center mb-3">
        <div className="col-4 w-25 mt-3 me-5">
          <img className="rounded img-fluid" src="./img/me.jpg" alt="me" />
        </div>
        <div
          className="col-8 w-50 m-5 fs-5 text-font"
          style={{ textAlign: "justify" }}
        >
          I am resently gradueted front-end developer, I have worked on
          front-end projects and wordpress web-sites. Although, I do not have
          much experience with working on many projects, I think I have
          necessary skills to start my career and over time, improve myself by
          learning and building more difficult applications. I am very
          determined and learn very quikly. I am in the process of learning
          back-end development as well. My overall goal is to become best
          web-developer I could be and bring something new to this industry.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
