import { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

function Scroll() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const myButton = document.getElementById("btn");

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      myButton.style.display = "flex";
    } else {
      myButton.style.display = "none";
    }
  };

  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="myBtn justify-content-center" id="btn" onClick={scrollTop}>
      <IoIosArrowUp />
    </div>
  );
}

export default Scroll;
