import React, { ChangeEvent } from "react";
import styled from "styled-components";
import Select from '~/components/Select/Select';
import Button from '~/components/Button/Button';

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
      <Wrapper>
         <FormWrapper>
            <Title>Shipment form:</Title>
            <InputWrapper>
               <Label>Shipping method:</Label>
               <Select options={shippingMethods} onChange={handleShippingMethod} value={shippingMethod} />
            </InputWrapper>
         </FormWrapper>
         <ButtonsWrapper>
            <StyledButton hollow onClick={handleGoBack}>Go back to Address</StyledButton>
            <StyledButton onClick={handleConfirm}>Confirm</StyledButton>
         </ButtonsWrapper>
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

const ButtonsWrapper = styled.div`
   display: flex;
   flex-flow: row;
   align-items: center;
   justify-content: space-around;
   width: 450px;
   margin-top: 20px;
`;

const StyledButton = styled(Button)`
   width: 180px;
`;

const Title=styled.h3``

export default ShipmentForm;
