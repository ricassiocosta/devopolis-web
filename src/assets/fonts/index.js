import { createGlobalStyle } from 'styled-components'

import arvoWoff from './Arvo.woff2'
import arvoBoldWoff from './ArvoBold.woff2'
import robotoWoff from './Roboto.woff2'
import robotoBoldWoff from './RobotoBold.woff2'

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Arvo';
    src: local('Arvo'),
    url(${arvoWoff}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ArvoBold';
    src: local('ArvoBold'),
    url(${arvoBoldWoff}) format('woff2');
    font-weight: 700;
    font-style: bold;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
    url(${robotoWoff}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'RobotoBold';
    src: local('RobotoBold'),
    url(${robotoBoldWoff}) format('woff2');
    font-weight: 700;
    font-style: bold;
  }
`

export default GlobalFonts
