import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import Select from '~/components/Select/Select';

interface PaymentFormProps {
   paymentMethod: string;
   handleSavePaymentMethod: (paymentMethod: string) => void;
}

const PaymentForm = ({ paymentMethod, handleSavePaymentMethod }: PaymentFormProps) => {
   const [paymentMethods, setPaymentMethods] = useState<string[]>(["Visa", "Mastercard", "Revolut"]);

   useEffect(() => {
      return () => {
         setPaymentMethods([paymentMethod]);
      };
   }, []);

   const handlePaymentMethod = (event: ChangeEvent<HTMLSelectElement>) => {
      const method = event.target.value;
      handleSavePaymentMethod(method);
   };

   return (
      <Wrapper>
         <FormWrapper>
            <InputWrapper>
               <Label>Payment method:</Label>
               <Select options={paymentMethods} onChange={handlePaymentMethod} value={paymentMethod} />
            </InputWrapper>
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

const InputWrapper = styled.div`
   width: 387px;
`;

const Label = styled.p`
   font-size: 10px;
`;

export default PaymentForm;
