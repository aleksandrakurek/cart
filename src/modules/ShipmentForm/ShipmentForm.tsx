import React, { ChangeEvent } from "react";
import Select from '~/components/Select/Select';
import * as P from './parts';

interface ShipmentFormProps {
   shippingMethod: string;
   shippingMethods: string[];
   handleSaveShippingMethod: (shippingMethod: string) => void;
   handleGoBack: () => void;
}

const ShipmentForm = ({
   shippingMethod,
   shippingMethods,
   handleSaveShippingMethod,
   handleGoBack,
}: ShipmentFormProps) => {

   const handleShippingMethod = (event: ChangeEvent<HTMLSelectElement>) => {
      const method = event.target.value;
      handleSaveShippingMethod(method);
   };

   const handleConfirm = () => {
      handleSaveShippingMethod(shippingMethod);
   };

   return (
      <P.Wrapper>
         <P.FormWrapper>
            <P.Title>Shipment form:</P.Title>
            <P.InputWrapper>
               <P.Label>Shipping method:</P.Label>
               <Select options={shippingMethods} onChange={handleShippingMethod} value={shippingMethod} />
            </P.InputWrapper>
         </P.FormWrapper>
         <P.ButtonsWrapper>
            <P.StyledButton hollow onClick={handleGoBack}>Go back to Address</P.StyledButton>
            <P.StyledButton onClick={handleConfirm}>Confirm</P.StyledButton>
         </P.ButtonsWrapper>
      </P.Wrapper>
   );
};


export default ShipmentForm;
