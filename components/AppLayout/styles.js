import css from "styled-jsx/css";

import { fonts, colors, breakpoints } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/util";

const backgroundColor = addOpacityToColor(colors.primary, 0.3);

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, #fafafa 1px),
      radial-gradient(${backgroundColor} 1px, #fafafa 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }

  * {
    box-sizing: border-box;
  }
`;

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    height: 100%;
    position: relative;
    width: 100%;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      max-width: ${breakpoints.mobile};
      width: 100%;
    }
  }
`;
