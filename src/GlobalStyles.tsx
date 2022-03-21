import { createGlobalStyle } from "styled-components";
import { colors } from '~/config';

const GlobalStyles = createGlobalStyle`
   :root {
      --primary-color: ${colors.navy};
      --white: ${colors.white};
   }

   * {
      box-sizing: border-box;
   }

   html {
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
   }
`;

export default GlobalStyles;
