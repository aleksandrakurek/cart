import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "~/config";

interface ButtonProps {
   hollow?: boolean;
   disabled?: boolean;
}

export const sharedButtonStyles = `
   font-size: 14px;
   background: ${colors.orange};
   border-radius: 6px;
   color: ${colors.white};
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all .2s ease-in;
   cursor: pointer;
   height: 40px;
   line-height: 42px;
   border: none;
   border-bottom: 2px solid ${colors.orange};
   width: 100%;
   text-decoration: none;
   font-weight: 500;
   text-align: center;

   :active, :focus {
     outline: none;
     text-decoration: none;
   }

   :hover {
      opacity: .8;
      transition: all .2s ease-in;
   }
`;

export const HollowButtonStyles = `
   background: ${colors.white};
   border: 1px solid ${colors.orange};
   color: ${colors.orange};
   width: 320px;
   height: 42px;
   line-height: 42px;
   font-size: 16px;
`;

export const DisabledButtonStyles = `
   pointer-events: none;
   opacity: 0.8;
`;

export const PlainButton = styled.button`
   ${sharedButtonStyles};
   ${({ hollow }: ButtonProps) => hollow && HollowButtonStyles};
`;

export const ExternalButton = styled.a`
   ${sharedButtonStyles};
   height: auto;
   display: block;

   :hover {
      opacity: .6;
      transition: all .2s ease-in;
   }

   ${({ hollow }: ButtonProps) => hollow && HollowButtonStyles};
`;

export const LinkButton = styled(Link)`
   ${sharedButtonStyles};
   ${({ hollow }: ButtonProps) => hollow && HollowButtonStyles};
   ${({ disabled }: ButtonProps) => disabled && DisabledButtonStyles};
`;
