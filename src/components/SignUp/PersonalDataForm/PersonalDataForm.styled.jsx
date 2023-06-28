import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const StyledLabel = styled.label`
  position: absolute;
  pointer-events: none;
  left: 16px;
  top: 20px;
  color: #7e7e7e;
  transition: all var(--transition-dur-and-func);
`;

export const StyledField = styled(Field)`
  height: 54px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #d0cfcf;
  background: var(--background-color);
  padding-left: 16px;
  transition: all var(--transition-dur-and-func);
  outline: none;

  @media screen and (min-width: 768px) {
    width: 328px;
  }

  :focus + .label,
  :not(:placeholder-shown) + .label {
    top: -10px;
    left: 15px;
    background: var(--background-color);
    padding: 0 2px;
  }

  &.error-label {
    border: 2px solid var(--error);
  }
`;

export const StyledError = styled(ErrorMessage)`
  position: absolute;
  top: 58px;
  left: 18px;
  color: var(--error);
  font-size: 12px;
`;

export const StyledNumberFormat = styled.div`
  position: absolute;
  top: 60px;
  left: 15px;
  font-size: 12px;
  color: var(--placeholder);
`;
