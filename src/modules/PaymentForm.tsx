import React from "react";
import styled from "styled-components";

/*interface PaymentFormProps {
 paymentMethod: string;
 handlePaymentMethod: (paymentMethod: string) => void;
 }*/

const PaymentForm = () => {

   return (
      <Wrapper>
         <FormWrapper>
            PaymentForm
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
   background: white;
   padding: 30px;
   box-shadow: 0 8px 12px 0 #d8e0ee;
   width: 400px;
   border-radius: 6px;
`;

export default PaymentForm;
