import React, { useEffect, useMemo } from "react";
import Typed from "typed.js";
import "./Hero.scss";

const Hero = () => {
  const options = useMemo(
    () => ({
      strings: [
        "console.log('Hello World!');\n\n// Define and execute your vision\nconst bringIdeasToLife = (ideas, jesseMcConnell) => {\n  const app = jesseMcConnell.buildApplication(ideas);\n  app.deliverResults();\n};\n\n// User-friendly applications beyond your imagination\nbringIdeasToLife(yourIdeas, jesseMcConnell);\n \nalert('Looking forward to hearing from you');\n",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
    }),
    []
  );

  useEffect(() => {
    const typed = new Typed(".hero-typing", options);

    return () => {
      typed.destroy();
    };
  }, [options]);

  return (
    <section className="hero">
      <article className="hero__container">
        <pre
          className="hero-typing"
          style={{ whiteSpace: "pre-wrap", lineHeight: "1.5" }}
        />
      </article>
    </section>
  );
};

export default Hero;
