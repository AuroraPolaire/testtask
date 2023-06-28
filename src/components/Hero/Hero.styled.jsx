import styled from 'styled-components';

import backgroundMobile from '../../img/mob_bg1x.webp';
import backgroundMobileRetina from '../../img/mob_bg2x.webp';

import backgroundTablet from '../../img/tab_bg1x.webp';
import backgroundTabletRetina from '../../img/tab_bg2x.webp';

import backgroundDesktop from '../../img/desktop_bg1x.webp';
import backgroundDesktopRetina from '../../img/desktop_bg2x.webp';

export const BackgroundContainer = styled.section`
  width: 100%;
  background-image: url(${backgroundMobile}),
    linear-gradient(0deg, #000 0%, #000 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundMobileRetina});

    @media screen and (min-width: 768px) {
      background-image: url(${backgroundTablet});
    }
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundTabletRetina});

    @media screen and (min-width: 1024px) {
      background-image: url(${backgroundDesktop});

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${backgroundDesktopRetina});
      }
    }

    @media screen and (min-width: 1170px) {
      background-image: url(${backgroundDesktop});
      background-size: 1170px;
    }
  }

  & .hero__container {
    padding: 40px 0 71px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
      padding: 89px 0 88px;
    }

    @media screen and (min-width: 1024px) {
      padding: 164px 0 163px;
    }
  }

  & .hero__heading {
    font-size: 40px;
    color: #fff;
    text-align: center;
    line-height: 1;

    @media screen and (min-width: 768px) {
      width: 380px;
    }
  }

  & .hero__description {
    margin-top: 20px;
    color: #fff;
    text-align: center;
    line-height: 1.6;

    @media screen and (min-width: 768px) {
      width: 380px;
    }
  }

  & .hero__button {
    margin-top: 32px;
    background-color: var(--btn-normal);
    border: 0;
    border-radius: 80px;
    padding: 4px 0;
    width: 100px;
    line-height: 1.6;
    transition: background-color var(--transition-dur-and-func);

    :hover {
      background-color: var(--btn-hover);
    }
  }
`;
