import React from 'react';
import Title from '../Title/Title';
import successImg from '../../img/success-image.svg';
import { SuccessRegistrationStyled } from './SuccessRegistration.styled';

const SuccessRegistration = () => {
  return (
    <SuccessRegistrationStyled>
      <Title title="User successfully registered" />
      <img
        src={successImg}
        alt="User successfully registered"
        className="success__img"
      />
    </SuccessRegistrationStyled>
  );
};

export default SuccessRegistration;
