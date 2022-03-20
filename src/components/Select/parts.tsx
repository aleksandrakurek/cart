import styled from 'styled-components';
import { colors } from '~/config';

export const Wrapper = styled.div`
   position: relative;
   width: 410px;

   ::after {
      content: '▾';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
   }
`;

export const Select = styled.select`
   width: 100%;
   background-color: #fff;
   font-size: 12px;
   color: ${colors.navy};
   line-height: 32px;
   padding-left: 10px;
   transition: .2s ease all;
   cursor: pointer;
   -webkit-appearance: none;
   border: 1px solid ${colors.lightBlueGrey};
   border-radius: 6px;
   height: 40px;

   ::placeholder {
      color: ${colors.navy};
   }

   &:focus {
      outline: none;
   }
`;
