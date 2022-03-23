import styled from 'styled-components';
import { colors } from '~/config';

export const Wrapper = styled.div`
   width: 100%;
   height: 100vh;
   background-color: ${colors.paleGreyFive};
   display: flex;
   flex-flow: row;
   justify-content: center;
   align-items: center;
   font-family: Helvetica, sans-serif;
`;
