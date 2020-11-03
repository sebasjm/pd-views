import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* devanagari */
@font-face {
  font-family: 'Martel';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Martel'), local('Martel-Regular'), url(https://fonts.gstatic.com/s/martel/v4/PN_xRfK9oXHga0XdZ8g_rz7b_sDa.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Martel';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Martel'), local('Martel-Regular'), url(https://fonts.gstatic.com/s/martel/v4/PN_xRfK9oXHga0XdaMg_rz7b_sDa.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Martel';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Martel'), local('Martel-Regular'), url(https://fonts.gstatic.com/s/martel/v4/PN_xRfK9oXHga0XdZsg_rz7b_g.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nFrXyw023e1Ik.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* hebrew */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nDrXyw023e1Ik.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* latin-ext */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nPrXyw023e1Ik.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v9/iJWKBXyIfDnIV7nBrXyw023e.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Rubik Medium'), local('Rubik-Medium'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7EyjmmZ8WD07oB-98o.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* hebrew */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Rubik Medium'), local('Rubik-Medium'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Eyjmmf8WD07oB-98o.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* latin-ext */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Rubik Medium'), local('Rubik-Medium'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7EyjmmT8WD07oB-98o.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Rubik Medium'), local('Rubik-Medium'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7Eyjmmd8WD07oB-.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Rubik Bold'), local('Rubik-Bold'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmZ8WD07oB-98o.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* hebrew */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Rubik Bold'), local('Rubik-Bold'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmf8WD07oB-98o.woff2) format('woff2');
  unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
}
/* latin-ext */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Rubik Bold'), local('Rubik-Bold'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmT8WD07oB-98o.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Rubik Bold'), local('Rubik-Bold'), url(https://fonts.gstatic.com/s/rubik/v9/iJWHBXyIfDnIV7F6iGmd8WD07oB-.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

  :root {
    --colorPrimary: #5500FF;
    --color-primary-dark: #050038;
    --gray: #050038;
    --gray2: #434063;
    --yellow: #FFC93D;
    --mid-light-gray: #E0DFE8;
    --light-gray: #BABCC6;
    --ultra-light-gray: #F7F7F7;
    --error: #DA1616;
    --error-red: #AF0000;
    --marginBottom: 32px;
    --white: #FFF;
    --alert: #FF9111;
    --success-green: #62C762;

    --boxShadow: 0px 0px 16px rgba(44, 50, 73, 0.15);
    zoom: 5; 
  }

  

  html {
    scroll-behavior: smooth;
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: Rubik;
    -webkit-font-smoothing: antialiased;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  #nprogress .bar {
    background: #5500FF;
  }

  .sb-show-main {
  padding: 0 !important;
  } 

  /* Styles for the tooltip are loaded on document ready, creating a reflow */
  .__react_component_tooltip {
    position: fixed;
    visibility: hidden;
    padding: 8px 10px;
  }

  .text-primary {
    color:#5500FF;
  }
`;
export default GlobalStyle;
