import React from "react";
import { GlobalContainer } from "../../globalContainer/GlobalContainer";
import { StyledTitle } from "./Title.styled";

const Title = ({ title }) => {
  return (
    <GlobalContainer>
      <StyledTitle>{title}</StyledTitle>
    </GlobalContainer>
  );
};

export default Title;
