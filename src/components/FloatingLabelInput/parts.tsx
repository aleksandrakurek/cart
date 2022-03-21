import styled, { css, keyframes } from "styled-components"
import { colors } from "~/config"

const onAutoFillStart = keyframes``
const onAutoFillCancel = keyframes``

interface InputProps {
   isFloating?: boolean;
   hasError?: boolean;
   error?: boolean;
   hide?: boolean;
   hasValue?: boolean;
   hasRightIcon?: boolean;
   hasIcon?: boolean;
   disabled?: boolean;
   isHorizontal?: boolean;
}

export const Wrapper = styled.div`
   position: relative;
`

const commonTextStyles = css`
   color: ${colors.navy};
   font-size: 16px;
   line-height: 1.4;
   text-align: left;
   font-weight: normal;

   &:-webkit-autofill {
      animation-name: ${onAutoFillStart};
      transition: background-color 50000s ease-in-out 0s;
   }

   &:not(:-webkit-autofill) {
      animation-name: ${onAutoFillCancel};
   }
`

const floatingStyles = css`
   top: -7px;
   transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
   font-size: 10px;
   background: white;
   opacity: 1;
   left: 29px;
   padding: 0 3px;

   color: ${({ hasError, error }: InputProps) => (hasError || error) ? colors.reddishPink : colors.lightBlueGreyTwo};
`

export const Label = styled.label`
   ${commonTextStyles};
   pointer-events: none;
   position: absolute;
   left: ${({ hasIcon }: InputProps) => hasIcon ? 32 : 10}px;
   color: ${colors.navy};
   font-size: 16px;
   top: 0;
   text-align: left;
   display: block;
   width: 100%;
   cursor: text;
   margin: 0 auto;
   height: 100%;
   transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
   color: ${({ hasError, error }: InputProps) => (hasError || error) ? colors.reddishPink : colors.lightBlueGreyTwo};

   &:-webkit-autofill,
   &:-webkit-autofill:hover,
   &:-webkit-autofill:focus,
   &:-webkit-autofill:active {
      -webkit-box-shadow: none;
      background: none;
      font-size: 16px;
      transition: background-color 5000s ease-in-out 0s;
      color: ${colors.navy};
   }

   ${({ isFloating }: InputProps) => isFloating && floatingStyles};
`

const inputHasValueStyles = css`
   + ${Label} {
      ${floatingStyles};
   }
`


export const Input = styled.input`
   ${commonTextStyles};
   width: 100%;
   background-color: transparent;
   border: ${({
                 error,
                 hasError,
              }: InputProps) => (error || hasError) ? `1px solid ${colors.reddishPink}` : `1px solid ${colors.lightBlueGrey}`};
   transition: .2s ease all;
   padding-right: ${({ hasRightIcon }: InputProps) => hasRightIcon ? 32 : 10}px;
   padding-left: ${({ hasIcon }: InputProps) => hasIcon ? 32 : 10}px;
   color: ${({ disabled }: InputProps) => disabled ? colors.lightBlueGrey : colors.navy};
   margin-bottom: 10px;
   height: 40px;
   border-radius: 6px;

   &:-webkit-autofill,
   &:-webkit-autofill:hover,
   &:-webkit-autofill:focus,
   &:-webkit-autofill:active {
      -webkit-box-shadow: none;
      background: none;
      font-size: 16px;
      transition: background-color 5000s ease-in-out 0s;
   }

   &:focus {
      outline: none;
      border: 1px solid ${colors.navy};
   }

   + ${Label} {
      top: 9px;
      transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
      opacity: .3;
      color: ${colors.navy};
      width: auto;
      height: auto;

      ${({ hide }: InputProps) => hide && floatingStyles};
   }

   &:focus + ${Label} {
      ${floatingStyles};
      color: ${colors.navy};
   }

   &[required] + ${Label} {
      &::after {
         content: "*";
      }
   }

   &:-webkit-autofill {
      + ${Label} {
         ${floatingStyles};
      }
   }

   ${({ hasValue }: InputProps) => hasValue && inputHasValueStyles};
`

const horizontalInputInfoStyles = css`
   top: 0;
`

const commonInfoStyles = css`
   font-size: 10px;
   color: ${colors.lightBlueGrey};
   margin: 0;
   position: relative;
   top: -5px;
`

export const Error = styled.p`
   ${commonInfoStyles};
   color: ${colors.reddishPink};

   ${({ isHorizontal }: InputProps) => isHorizontal && horizontalInputInfoStyles}
`
