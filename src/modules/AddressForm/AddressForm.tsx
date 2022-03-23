import React, { ChangeEvent, useState, useEffect } from "react";
import FloatingLabelInput from '~/components/FloatingLabelInput';
import Select from '~/components/Select/Select';
import { AddressProps } from '~/store/constants';
import * as P from "./parts";

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
      <P.Wrapper>
         <P.FormWrapper>
            <P.Title>Address form:</P.Title>
            <P.InputWrapper>
               <FloatingLabelInput
                  name="street"
                  label="Street"
                  value={street}
                  onChange={handleOnChange("street")}
               />
            </P.InputWrapper>
            <P.InputWrapper>
               <FloatingLabelInput
                  label="City"
                  onChange={handleOnChange("city")}
                  name="city"
                  value={city}
               />
            </P.InputWrapper>
            <P.InputWrapper>
               <P.Label>Country:</P.Label>
               <Select options={["Poland", "USA"]} onChange={handleOnChangeCountry} value={country} />
            </P.InputWrapper>
            <P.ButtonWrapper>
               <P.StyledButton hollow onClick={saveAddress}>Save address</P.StyledButton>
            </P.ButtonWrapper>
         </P.FormWrapper>
      </P.Wrapper>
   );
};

export default AddressForm;
