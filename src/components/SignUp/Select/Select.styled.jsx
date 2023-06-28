import styled from "styled-components";
import { ErrorMessage } from "formik";

export const SelectContainer = styled.div`
  position: relative;
  .form__positions-list {
    margin-top: 11px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    line-height: 1.6;
  }

  .form__select-input {
    margin-right: 12px;
  }
`;

export const StyledError = styled(ErrorMessage)`
  position: absolute;
  top: 158px;
  left: 18px;
  color: var(--error);
  font-size: 12px;
`;
