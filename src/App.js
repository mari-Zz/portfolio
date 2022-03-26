import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Scroll from "./components/scroll";
import cookies from "js-cookie";

function App() {
  const currentLang = cookies.get("i18next");
  const [currentLanguage, setCurrentLanguage] = useState(currentLang);

  return (
    <div className="container-fluid">
      <Header
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
      <Main currentLanguage={currentLanguage} />
      <Footer currentLanguage={currentLanguage} />
      <Scroll />
    </div>
  );
}

export default App;
