import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;
  }
`;

interface CheckboxStyleProps {
   isChecked?: boolean;
}

export const CheckboxWrapper = styled.div`
  cursor: pointer;
  outline: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 13px;
  margin-left: 6px;
`;

export const CheckboxChecked = styled.img`
  animation: ${fadeIn} .2s ease-in-out;
  height: 18px;
  width: 18px;
  position: absolute;
  top: 0;
  left: 0;
`;

const checkedStyles = css`
  background-color: #e47712;
  border: 1px solid #e47712;
  transition: all .2s ease-in-out;
`;

export const CheckboxUnchecked = styled.div`
  animation: ${fadeIn} .2s ease-in;
  vertical-align: middle;
  background-color: white;
  border: 1px solid #a7bde5;
  border-radius: 4px;
  height: 20px;
  width: 20px;
  position: relative;
  overflow: hidden;
  transition: all .2s ease-in-out;

  ${({ isChecked }: CheckboxStyleProps) => isChecked && checkedStyles}
`;
