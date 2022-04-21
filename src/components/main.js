import { useEffect } from "react";
import AboutMe from "./aboutMe";
import Experiences from "./experiences";
import Tools from "./tools";

function Main({ currentLanguage }) {
  useEffect(() => {
    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  return (
    <div className="container-bg">
      <AboutMe currentLanguage={currentLanguage} />
      <Tools currentLanguage={currentLanguage} />
      <Experiences currentLanguage={currentLanguage} />
    </div>
  );
}

export default Main;
