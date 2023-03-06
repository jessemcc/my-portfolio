import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = window.location.hash.replace("#", "");
    console.log(sectionId);
    if (sectionId) {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        console.log("go to contact");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
      console.log("Go to top of page");
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
