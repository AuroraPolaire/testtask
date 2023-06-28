import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalContainer } from '../../globalContainer/GlobalContainer';
import { getUsers } from '../../redux/usersOperations';
import { selectTotalPages, selectUsers } from '../../redux/usersSelector';
import Spinner from '../Spinner/Spinner';
import UserCard from '../UserCard/UserCard';
import { MoreButton, UsersContainer } from './Users.styled';

const Users = () => {
  const [page, setPage] = useState(2);

  const users = useSelector(selectUsers);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  const getMoreUsers = () => {
    dispatch(getUsers({ page }));
    setPage(page + 1);
  };

  return (
    <GlobalContainer>
      <UsersContainer id="users">
        {users.length !== null ? (
          users.map(user => {
            return <UserCard key={user.id} user={user} />;
          })
        ) : (
          <Spinner />
        )}
      </UsersContainer>
      {page !== totalPages && (
        <MoreButton>
          <button
            className="users__more-btn"
            type="button"
            onClick={getMoreUsers}
          >
            Show more
          </button>
        </MoreButton>
      )}
    </GlobalContainer>
  );
};

export default Users;
