import React, { useState } from "react";
import { AddressProps, ProductProps } from '~/store/constants';;
import * as P from './parts';

interface CheckoutProps {
   cartItems: ProductProps[];
   address: AddressProps;
   shippingMethod: string;
   paymentMethod: string;
}

const Checkout = ({ cartItems, address, shippingMethod, paymentMethod }: CheckoutProps) => {
   const [success, setSuccess] = useState<boolean>(false);
   const [error, setError] = useState<boolean>(false);
   const [isFetching, setIsFetching] = useState<boolean>(false);

   const handleSubmit = e => {
      e.preventDefault();

      setError(false);
      setSuccess(false);
      setIsFetching(true);
      fetch("https://eo2a2zgr32q6sd4.m.pipedream.net", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         mode: "cors",
         body: JSON.stringify({
            cartItems,
            address,
            shippingMethod,
            paymentMethod,
         }),
      }).then((response) => {
         if (!response.ok) {
            setIsFetching(false);
            setError(true);
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         if (response.ok) {
            setSuccess(true);
            setIsFetching(false);
         }
      });
   };

   return (
      <P.Wrapper>
         <P.Title>
            Checkout
            <P.ButtonWrapper>
               <P.StyledButton onClick={handleSubmit}>
                  {isFetching ? "..." : " Buy 💸"}
               </P.StyledButton>
               {success && "success!"}
               {error && "Error!"}
            </P.ButtonWrapper>
         </P.Title>

         <P.DetialsWrapper>
            <P.ItemsWrapper>
               <P.Text>Your items:</P.Text>
               {cartItems && cartItems.map((cartItem, i) => {
                  return (
                     <P.Item key={i}>
                        <P.ItemDetails>
                           <P.Name>{cartItem.name}</P.Name>
                           <P.Price>{cartItem.price}$</P.Price>
                           <P.ShippingDetails>Sent by: {cartItem.isRequiringShipping ? "📦" : "✉️"}</P.ShippingDetails>
                        </P.ItemDetails>
                     </P.Item>
                  );
               })}
               <P.Total>
                  Total: <b>{cartItems ? cartItems.map(item => parseInt(item.price)).reduce((prev, next) => prev + next) : 0}$</b>
               </P.Total>
            </P.ItemsWrapper>
            <P.ItemsWrapper>
               <P.Text>Your address:</P.Text>
               <P.AddressItem>Street: {address.street}</P.AddressItem>
               <P.AddressItem>City: {address.city}</P.AddressItem>
               <P.AddressItem>Country: {address.country}</P.AddressItem>
            </P.ItemsWrapper>
            <P.ItemsWrapper>
               <P.Text>Shipping method:</P.Text>
               <P.AddressItem>{shippingMethod}</P.AddressItem>
               <P.Text>Payment method:</P.Text>
               <P.AddressItem>{paymentMethod}</P.AddressItem>
            </P.ItemsWrapper>
         </P.DetialsWrapper>
      </P.Wrapper>
   );
};

export default Checkout;
