import React from "react";
import { GlobalContainer } from "../../globalContainer/GlobalContainer";
import { ReactComponent as Logo } from "../../img/Logo.svg";
import { StyledHeader } from "./Header.styled";

const Header = () => {
  const handleButtonClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <GlobalContainer>
      <StyledHeader>
        <Logo />
        <div className="header__button-group">
          <button
            className="header__button"
            type="button"
            onClick={() => handleButtonClick("users")}
          >
            Users
          </button>
          <button
            className="header__button"
            type="button"
            onClick={() => handleButtonClick("signup")}
          >
            Sign Up
          </button>
        </div>
      </StyledHeader>
    </GlobalContainer>
  );
};

export default Header;
