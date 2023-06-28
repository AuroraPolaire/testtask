import React from 'react';
import { Tooltip } from '../Tooltip/Tooltip';
import { UserCardStyled } from './UserCard.styled';
import IMG from '../../img/photo-cover.svg';
import { formatNumber } from '../../utils/formatNumber';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  const missingImg =
    'https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png';
  const { email, name, phone, photo, position } = user;
  return (
    <UserCardStyled>
      {photo === missingImg ? (
        <img
          className="user__photo"
          src={IMG}
          alt={name}
          width="70px"
          height="70px"
        />
      ) : (
        <img
          className="user__photo"
          src={photo}
          alt={name}
          width="70px"
          height="70px"
        />
      )}

      <div>
        <Tooltip info={name} />
      </div>
      <ul className="user__info-list">
        <li>
          <Tooltip info={position} />
        </li>
        <li>
          <Tooltip info={email} />
        </li>
        <li>{formatNumber(phone)}</li>
      </ul>
    </UserCardStyled>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
