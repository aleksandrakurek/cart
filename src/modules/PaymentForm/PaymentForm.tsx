import React, { ChangeEvent } from "react";
import Select from '~/components/Select/Select';
import { paymentMethods } from '~/utils';
import * as P from './parts';

interface PaymentFormProps {
   paymentMethod: string;
   handleSavePaymentMethod: (paymentMethod: string) => void;
   handleGoBack: () => void;
}

const PaymentForm = ({ paymentMethod, handleSavePaymentMethod, handleGoBack }: PaymentFormProps) => {
   const handlePaymentMethod = (event: ChangeEvent<HTMLSelectElement>) => {
      const method = event.target.value;
      handleSavePaymentMethod(method);
   };

   const handleConfirm = () => {
      handleSavePaymentMethod(paymentMethod);
   };

   return (
      <P.Wrapper>
         <P.FormWrapper>
            <P.Title>Payment Form:</P.Title>
            <P.InputWrapper>
               <P.Label>Payment method:</P.Label>
               <Select options={paymentMethods} onChange={handlePaymentMethod} value={paymentMethod} />
            </P.InputWrapper>
         </P.FormWrapper>
         <P.ButtonsWrapper>
            <P.StyledButton hollow onClick={handleGoBack}>Go back to Address</P.StyledButton>
            <P.StyledButton onClick={handleConfirm}>Confirm</P.StyledButton>
         </P.ButtonsWrapper>
      </P.Wrapper>
   );
};


export default PaymentForm;
