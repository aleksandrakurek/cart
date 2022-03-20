import React from "react";
import styled from "styled-components";

const AddProductForm = () => {
   return (
      <Wrapper>
         <FormWrapper>
            <Title>Checkout</Title>
            <InputWrapper>
            </InputWrapper>
            <InputWrapper>
            </InputWrapper>
            <ButtonWrapper>
            </ButtonWrapper>
         </FormWrapper>
      </Wrapper>
   );
};


const Wrapper = styled.div`
   width: 50%;
   padding: 100px 0;
   display: flex;
   flex-flow: column;
   align-items: center;
`;

const FormWrapper = styled.div`
   display: flex;
   flex-flow: column;
   align-items: flex-start;
`;

const Title = styled.h2``;

const InputWrapper = styled.div`
   width: 387px;
`;

const ButtonWrapper = styled.div``;

export default AddProductForm;
