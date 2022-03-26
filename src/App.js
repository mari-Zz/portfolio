import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Scroll from "./components/scroll";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Main />
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
