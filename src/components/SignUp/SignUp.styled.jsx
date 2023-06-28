import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  Form {
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: relative;
    z-index: 1;

    & .form__relative-container {
      position: relative;
      z-index: 2;
    }

    .form__sign-up-btn__container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .form__sign-up-btn {
      margin: 0 0 100px;
      padding: 4px 22px;
      color: rgba(255, 255, 255, 0.87);
      border-radius: 80px;
      border: 0;
      background: var(--btn-normal);
      line-height: 1.6;

      :hover {
        background-color: var(--btn-hover);
      }

      :disabled {
        background-color: var(--bnt-disabled);
      }
    }
  }
`;
