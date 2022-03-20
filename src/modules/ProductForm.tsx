import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import shortId from 'shortid';
import Checkbox from "~/components/Checkbox/Checkbox";
import { productInitState, ProductProps } from "./data";
import Button from "~/components/Button/Button";
import FloatingLabelInput from '~/components/FloatingLabelInput';
import { isNumber } from '~/utils';

interface ProductFormProps {
   handleAddToCart: (item: ProductProps) => void;
}

const ProductForm = ({ handleAddToCart }: ProductFormProps) => {
   const [name, setProductName] = useState<string>("");
   const [price, setProductPrice] = useState<string>("");
   const [isRequiringShipping, setRequiringShipping] = useState<boolean>(false);
   const [newItem, setNewItem] = useState<ProductProps>({ ...productInitState, id: shortId.generate() });
   const [priceError, setPriceError] = useState<string>("");
   const [nameError, setNameError] = useState<string>("");

   const handleOnChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value;

      const isNameInput: boolean = field === 'name';
      const isPriceInput: boolean = field === 'price';

      if (isNameInput && value.length > 20) {
         setNameError('Name should be max 20 characters');
      }

      if (isNameInput && value.length <= 20) {
         setProductName(value);
         setNewItem({ ...newItem, name: name });
         setNameError("");
      }

      if (isPriceInput && !isNumber(value) || (isNumber(value) && parseInt(value) < 0)) {
         setPriceError('Price should be an positive number');
      }

      if (isPriceInput && isNumber(value) && parseInt(value) > 0) {
         setProductPrice(value);
         setNewItem({ ...newItem, price: value });
         setPriceError("");
      }
   };

   const handleOnChangeShipping = () => {
      setRequiringShipping(!isRequiringShipping);
      setNewItem({ ...newItem, isRequiringShipping: !isRequiringShipping });
   };

   const addProduct = () => {
      if (name && price) {
         handleAddToCart(newItem);
         clearForm();
      }
   };

   const clearForm = () => {
      setNewItem({ ...productInitState, id: shortId.generate() });
      setProductName("");
      setProductPrice("");
      setRequiringShipping(false);
   };

   const isFormDirty: boolean = !!(nameError || priceError);

   return (
      <Wrapper>
         <FormWrapper>
            <InputWrapper>
               <FloatingLabelInput
                  name="name"
                  label="name"
                  value={name}
                  onChange={handleOnChange("name")}
                  error={nameError}
               />
            </InputWrapper>
            <InputWrapper>
               <FloatingLabelInput
                  label="product price"
                  onChange={handleOnChange("price")}
                  name="price"
                  value={price}
                  error={priceError}
               />
            </InputWrapper>
            <InputWrapper>
               <Checkbox checked={isRequiringShipping} label="is requiring shipping" onClick={handleOnChangeShipping} />
            </InputWrapper>
            <ButtonWrapper>
               <StyledButton disabled={isFormDirty} hollow onClick={addProduct}>Add product to 🛒 </StyledButton>
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

export default ProductForm;
