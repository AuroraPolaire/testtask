import React from 'react';
import {
  StyledError,
  StyledField,
  StyledLabel,
  StyledNumberFormat,
} from './PersonalDataForm.styled';
import PropTypes from 'prop-types';

const PersonalDataForm = ({ errors, touched }) => {
  return (
    <>
      <div className="form__relative-container">
        <StyledField
          type="text"
          name="name"
          placeholder="&nbsp;"
          className={errors.name && touched.name ? 'error-label' : ''}
        />
        <StyledLabel htmlFor="name" className="label">
          Your name
        </StyledLabel>
        <StyledError name="name" component="div" />
      </div>
      <div className="form__relative-container">
        <StyledField
          type="email"
          name="email"
          placeholder="&nbsp;"
          className={errors.email && touched.email ? 'error-label' : ''}
        />
        <StyledLabel htmlFor="email" className="label">
          Email
        </StyledLabel>
        <StyledError name="email" component="div" />
      </div>
      <div className="form__relative-container">
        <StyledField
          type="tel"
          name="phone"
          placeholder="&nbsp;"
          id="phone"
          className={errors.phone && touched.phone ? 'error-label' : ''}
        />
        <StyledLabel htmlFor="phone" className="label">
          Phone
        </StyledLabel>
        <StyledError name="phone" component="div" />
        {!touched.phone && (
          <StyledNumberFormat htmlFor="phone">
            +38 (XXX) XXX - XX - XX
          </StyledNumberFormat>
        )}
      </div>
    </>
  );
};

PersonalDataForm.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default PersonalDataForm;
