import React from "react";
import { GlobalContainer } from "../../globalContainer/GlobalContainer";
import { BackgroundContainer } from "./Hero.styled";

const Hero = () => {
  const handleButtonClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <BackgroundContainer>
      <GlobalContainer>
        <div className="hero__container">
          <h1 className="hero__heading">
            Test assignment for front-end developer
          </h1>
          <p className="hero__description">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <button
            className="hero__button"
            type="button"
            onClick={() => handleButtonClick("signup")}
          >
            Sign up
          </button>
        </div>
      </GlobalContainer>
    </BackgroundContainer>
  );
};

export default Hero;
