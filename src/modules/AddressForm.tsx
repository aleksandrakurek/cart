import React, { ChangeEvent, useState, useEffect } from "react";
import styled from "styled-components";
import Button from "~/components/Button/Button";
import FloatingLabelInput from '~/components/FloatingLabelInput';
import Select from '~/components/Select/Select';
import { AddressProps } from '~/modules/data';

interface AddressFormProps {
   address: AddressProps;
   handleSaveAddress: (address: AddressProps) => void;
}

const AddressForm = ({
   address,
   handleSaveAddress,
}: AddressFormProps) => {
   const [street, setStreetName] = useState<string>("");
   const [city, setCityName] = useState<string>("");
   const [country, setCountryName] = useState<string>("Poland");

   useEffect(() => {
      return () => {
         setStreetName(address.street);
         setCityName(address.city);
         setCountryName(address.country);
      };
   }, []);


   const handleOnChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value;

      const isStreetInput: boolean = field === 'street';
      const isCityInput: boolean = field === 'city';

      if (isStreetInput) {
         setStreetName(value);
      }

      if (isCityInput) {
         setCityName(value);
      }
   };

   const handleOnChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
      const country = event.target.value;
      setCountryName(country);
   };

   const saveAddress = () => {
      if (street && city) {
         const addressToSave = {
            ...address,
            street,
            city,
            country,
         };
         handleSaveAddress(addressToSave);
         clearForm();
      }
   };

   const clearForm = () => {
      setStreetName("");
      setCityName("");
      setCountryName("Poland");
   };

   return (
      <Wrapper>
         <FormWrapper>
            <InputWrapper>
               <FloatingLabelInput
                  name="street"
                  label="Street"
                  value={street}
                  onChange={handleOnChange("street")}
               />
            </InputWrapper>
            <InputWrapper>
               <FloatingLabelInput
                  label="City"
                  onChange={handleOnChange("city")}
                  name="city"
                  value={city}
               />
            </InputWrapper>
            <InputWrapper>
               <Label>Country:</Label>
               <Select options={["Poland", "USA"]} onChange={handleOnChangeCountry} value={country} />
            </InputWrapper>
            <ButtonWrapper>
               <StyledButton hollow onClick={saveAddress}>Save address</StyledButton>
               {/*<StyledButton hollow onClick={goToStateSkipShipping}>Skip</StyledButton>*/}
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
   background: white;
   padding: 30px;
   box-shadow: 0 8px 12px 0 #d8e0ee;
   width: 400px;
   border-radius: 6px;
`;

const InputWrapper = styled.div`
   width: 387px;
`;

const ButtonWrapper = styled.div`
   margin: 20px 0;
   width: 100%;
`;

const StyledButton = styled(Button)`
   width: 100%;
`;

const Label = styled.p`
   font-size: 10px;
`;

export default AddressForm;
