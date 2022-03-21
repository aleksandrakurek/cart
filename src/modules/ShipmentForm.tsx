import React, { ChangeEvent } from "react";
import styled from "styled-components";
import Select from '~/components/Select/Select';

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

   const confirm = () => {
      handleSaveShippingMethod(shippingMethod);
   };

   return (
      <Wrapper>
         <FormWrapper>
            <InputWrapper>
               <Label>Shipping method:</Label>
               <Select options={shippingMethods} onChange={handleShippingMethod} value={shippingMethod} />
            </InputWrapper>
         </FormWrapper>
         <button onClick={confirm}>Confirm</button>
         <button onClick={handleGoBack}>Go back to Address</button>
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

export default ShipmentForm;
