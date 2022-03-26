import { professional, univercity } from "../projects-info";

function Experiences() {
  const renderSection = (title, object) => {
    return (
      <>
        <h2 className="small-size-font mt-4 ms-4 heading-font text-color">
          {title}
        </h2>
        <div className="d-flex flex-wrap justify-content-around mt-4">
          {object.map((item) => {
            return (
              <div
                class="card box-shadow m-3 p-2 rounded background-color"
                style={{ width: "20rem" }}
              >
                <img
                  src={item.img}
                  class="card-img-top rounded box-shadow"
                  alt={item.title}
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title heading-font align-self-center">
                    {item.title}
                  </h5>
                  <p
                    class="card-text text-font"
                    style={{ textAlign: "justify" }}
                  >
                    {item.description}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    class="btn bttn-color heading-font"
                  >
                    See project
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
      <h1 className="medium-size-font heading-font ms-4 heading-color">
        My experience
      </h1>

      {renderSection("Projects I worked on in univercity", univercity)}
      {renderSection("Projects I worked on after graduating", professional)}
    </div>
  );
}

export default Experiences;
