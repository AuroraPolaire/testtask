import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;

  @media screen and (min-width: 768px) {
  }

  & .header__button-group {
    display: flex;
    gap: 10px;
  }
  & .header__button {
    background-color: var(--btn-normal);
    border: 0;
    border-radius: 80px;
    padding: 4px 0;
    line-height: 1.6;
    width: 100px;
    transition: background-color var(--transition-dur-and-func);

    :hover {
      background-color: var(--btn-hover);
    }
  }
`;
