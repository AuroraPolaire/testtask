import styled from 'styled-components';

export const UserCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 328px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;

  color: rgba(0, 0, 0, 0.87);
  line-height: 1.6;

  @media screen and (min-width: 768px) {
    width: 344px;
  }

  @media screen and (min-width: 1024px) {
    width: 282px;
  }

  @media screen and (min-width: 1170px) {
    width: 370px;
  }

  & .user__photo {
    border-radius: 70px;
  }

  & .user__info-list {
    text-align: center;
  }
`;
