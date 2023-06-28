import styled from 'styled-components';

export const TooltipBox = styled.div`
  position: relative;
  cursor: pointer;

  & .tooltip {
    /* white-space: nowrap; */
    visibility: hidden;
    position: absolute;
    z-index: 100;
    top: 35px;
    left: -50px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.87);
    border-radius: 10px;
    padding: 8px;
  }

  & .hover-tooltip:hover .tooltip {
    visibility: visible;
  }
`;
