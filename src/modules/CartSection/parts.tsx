import styled from 'styled-components';
import Button from '~/components/Button';

export const Wrapper = styled.div`
   width: 80%;
   height: 100%;
   background-color: white;
   display: flex;
   flex-flow: column;
   justify-content: center;
   align-items: center;
   border-left: 1px solid #E3E3E6;
`;

export const ProductForm = styled.div`
   width: 50%;
   padding: 30px 0;
   display: flex;
   flex-flow: column;
   align-items: center;
`;

export const FormWrapper = styled.div`
   display: flex;
   flex-flow: column;
   align-items: flex-start;
   background: white;
   padding: 30px;
   box-shadow: 0 8px 12px 0 #d8e0ee;
   width: 400px;
   border-radius: 6px;
`;

export const InputWrapper = styled.div`
   width: 387px;
`;

export const ButtonWrapper = styled.div`
   margin: 20px 0;
   width: 100%;
`;

export const StyledButton = styled(Button)`
   width: 100%;
`;

export const ConfirmButton = styled(Button)`
   margin: 10px 0;
   width: 200px;
`;
