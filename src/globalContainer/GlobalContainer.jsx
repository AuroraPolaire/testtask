import styled from 'styled-components';

export const GlobalContainer = styled.div`
  //mobile

  @media screen and (min-width: 360px) {
    padding: 0 16px;
    width: 360px;
    margin-left: auto;
    margin-right: auto;
  }

  // 768px//

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  // 1024px//

  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 60px;
  }

  // 1170px//

  @media screen and (min-width: 1170px) {
    width: 1170px;
    padding: 0;
  }
`;
