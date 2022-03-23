import React, { ChangeEvent, useState } from "react";
import shortId from 'shortid';
import Cart from '~/modules/Cart';
import FloatingLabelInput from '~/components/FloatingLabelInput';
import Checkbox from '~/components/Checkbox';
import { isNumber } from '~/utils';
import { productInitState, ProductProps } from '~/store/constants';;
import * as P from './parts';

const CartSection = ({ handleSaveItems }: { handleSaveItems: (items: ProductProps[]) => void }) => {
   const [cartItems, setCartItem] = useState<ProductProps[]>([]);
   const [name, setProductName] = useState<string>("");
   const [price, setProductPrice] = useState<string>("");
   const [isRequiringShipping, setRequiringShipping] = useState<boolean>(false);
   const [newItem, setNewItem] = useState<ProductProps>({ ...productInitState, id: shortId.generate() });
   const [priceError, setPriceError] = useState<string>("");
   const [nameError, setNameError] = useState<string>("");

   const removeItem = (itemToRemove: ProductProps) => () => {
      setCartItem(cartItems => cartItems.filter(cartItems => cartItems.id !== itemToRemove.id));
   };

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

      if (isPriceInput && isNumber(value) && parseInt(value) >= 0) {
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
      if (!!(name && price)) {
         setCartItem(cartItems => [...cartItems, newItem]);
         clearForm();
      }
   };

   const clearForm = () => {
      setNewItem({ ...productInitState, id: shortId.generate() });
      setProductName("");
      setProductPrice("");
      setRequiringShipping(false);
   };

   const isFormDirty: boolean = !!(nameError || priceError) || !(name && price);

   const handleSubmit = () => {
      handleSaveItems(cartItems);
   };

   return (
      <P.Wrapper>
         <Cart cartItems={cartItems} removeItem={removeItem} />
         <P.ProductForm>
            <P.FormWrapper>
               <P.InputWrapper>
                  <FloatingLabelInput
                     name="name"
                     label="name"
                     value={name}
                     onChange={handleOnChange("name")}
                     error={nameError}
                  />
               </P.InputWrapper>
               <P.InputWrapper>
                  <FloatingLabelInput
                     label="product price"
                     onChange={handleOnChange("price")}
                     name="price"
                     value={price}
                     error={priceError}
                  />
               </P.InputWrapper>
               <P.InputWrapper>
                  <Checkbox checked={isRequiringShipping} label="is requiring shipping" onClick={handleOnChangeShipping} />
               </P.InputWrapper>
               <P.ButtonWrapper>
                  <P.StyledButton disabled={isFormDirty} hollow onClick={addProduct}>Add product to 🛒 </P.StyledButton>
               </P.ButtonWrapper>
            </P.FormWrapper>
         </P.ProductForm>
         {cartItems && cartItems.length > 0 && (
            <P.ConfirmButton onClick={handleSubmit}>Confirm</P.ConfirmButton>
         )}
      </P.Wrapper>
   );
};

export default CartSection;
