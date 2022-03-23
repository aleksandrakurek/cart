import styled from 'styled-components';
import Button from '~/components/Button';

export const Wrapper = styled.div`
   width: 50%;
   padding: 100px 0;
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

export const Label = styled.p`
   font-size: 10px;
`;

export const Title = styled.h3``;
