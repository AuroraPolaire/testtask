import styled from 'styled-components';
import { ErrorMessage } from 'formik';

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
    display: inline-flex;
    align-items: center;
    vertical-align: sub;
    position: relative;
    margin-right: 12px;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid #d0cfcf;
    outline: none;
    transition: border-color 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      height: 10px;
      width: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: transparent;
      transition: background-color 0.3s ease;
    }

    &:checked::before {
      background-color: #00bdd3;
    }

    &:checked {
      border-color: #00bdd3;
    }
  }
`;

export const StyledError = styled(ErrorMessage)`
  position: absolute;
  top: 158px;
  left: 18px;
  color: var(--error);
  font-size: 12px;
`;
