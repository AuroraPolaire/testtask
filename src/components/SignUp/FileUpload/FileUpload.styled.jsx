import styled from "styled-components";
import { ErrorMessage } from "formik";

export const FileContainer = styled.div`
  position: relative;
  width: 328px;

  .form__file-input-field {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
  }

  .form__file-input-label {
    display: inline-block;
    padding: 14px;
    line-height: 1.6;
    text-align: center;
    border-radius: 4px 0px 0px 4px;
    border: 1px solid var(--font-color);
  }

  .form__file-input-label-placeholder {
    display: inline-block;
    width: 245px;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 16px;
    line-height: 1.6;
    border-radius: 0 4px 4px 0;
    border: 1px solid #d0cfcf;
    background: var(--background-color);
    color: var(--placeholder);
  }

  .error-upload {
    border: 2px solid var(--error);
  }

  .error {
    border: 2px solid var(--error);
  }

  .form__file-input-label.error-upload {
    border-right: 0;
  }
`;

export const StyledError = styled.div`
  position: absolute;
  top: 58px;
  left: 18px;
  color: var(--error);
  font-size: 12px;
`;
