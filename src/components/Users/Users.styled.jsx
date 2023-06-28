import styled from 'styled-components';

export const UsersContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 33.33%));
    gap: 29px;
  }
`;

export const MoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .users__more-btn {
    margin-top: 50px;
    padding: 4px 18px;
    background-color: var(--btn-normal);
    border: 0;
    border-radius: 80px;
    line-height: 1.6;
    transition: background-color var(--transition-dur-and-func);

    :hover {
      background-color: var(--btn-hover);
    }
  }
`;
