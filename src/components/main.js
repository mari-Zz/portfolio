import AboutMe from "./aboutMe";
import Experiences from "./experiences";
import Tools from "./tools";

function Main({ currentLanguage }) {
  return (
    <div className="container-bg">
      <AboutMe currentLanguage={currentLanguage} />
      <Tools currentLanguage={currentLanguage} />
      <Experiences currentLanguage={currentLanguage} />
    </div>
  );
}

export default Main;
