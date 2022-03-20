import { createGlobalStyle } from "styled-components";
import { colors, fonts } from '~/config';

const GlobalStyles = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap');

   :root {
      --primary-color: ${colors.navy};
      --white: ${colors.white};
   }

   * {
      box-sizing: border-box;
   }

   html {
      font-family: ${fonts.ibm};
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      touch-action: manipulation;
      height: 100%;
      background: ${colors.paleGrey};
   }

   body {
      background: #fff;
      margin: 0;
      padding: 0;
      height: 100%;
      box-sizing: border-box;
   }

   * {
      box-sizing: border-box;
      font-family: ${fonts.ibm}, sans-serif;
   }

   .StripeElement--webkit-autofill {
      background: transparent !important;
   }

   .StripeElement {
      width: 100%;
      padding: 11px 15px 11px 0;
   }
`;

export default GlobalStyles;
