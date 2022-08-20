import { createGlobalStyle } from 'styled-components';
import { GRAY_50 } from '../utils/color';

const GlobalStyles = createGlobalStyle` 
    a {
        text-decoration: none;
        color: inherit;
    }
    html {
        background: ${GRAY_50};
    }
`;

export default GlobalStyles;