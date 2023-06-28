import { Field } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectPositions } from '../../../redux/usersSelector';
import Spinner from '../../Spinner/Spinner';
import { SelectContainer, StyledError } from './Select.styled';
import PropTypes from 'prop-types';

const Select = ({ setFieldValue }) => {
  const positions = useSelector(selectPositions);
  return (
    <SelectContainer>
      <div id="my-radio-group">Select your position</div>

      <div
        role="group"
        aria-labelledby="my-radio-group"
        className="form__positions-list"
      >
        {positions.length !== 0 ? (
          positions.map(({ id, name }) => {
            return (
              <label key={id}>
                <Field
                  type="radio"
                  name="position_id"
                  value={id}
                  onChange={() => setFieldValue('position_id', id)}
                  className="form__select-input"
                />
                {name}
              </label>
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
      <StyledError name="position_id" component="div" />
    </SelectContainer>
  );
};

Select.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
};

export default Select;
