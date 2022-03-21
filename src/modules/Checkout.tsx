import React, { useState } from "react";
import styled from "styled-components";
import { AddressProps, ProductProps } from '~/modules/data';
import { sharedButtonStyles } from '~/components/Button/parts';

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
      <Wrapper>
         <Title>
            Checkout
            <ButtonWrapper>
               <StyledButton onClick={handleSubmit}>
                  {isFetching ? "..." : " Buy 💸"}
               </StyledButton>
               {success && "success!"}
               {error && "Error!"}
            </ButtonWrapper>
         </Title>

         <DetialsWrapper>
            <ItemsWrapper>
               <Text>Your items:</Text>
               {cartItems && cartItems.map((cartItem, i) => {
                  return (
                     <Item key={i}>
                        <ItemDetails>
                           <Name>{cartItem.name}</Name>
                           <Price>{cartItem.price}$</Price>
                           <ShippingDetails>Sent by: {cartItem.isRequiringShipping ? "📦" : "✉️"}</ShippingDetails>
                        </ItemDetails>
                     </Item>
                  );
               })}
               <Total>
                  Total: <b>{cartItems ? cartItems.map(item => parseInt(item.price)).reduce((prev, next) => prev + next) : 0}$</b>
               </Total>
            </ItemsWrapper>
            <ItemsWrapper>
               <Text>Your address:</Text>
               <AddressItem>Street: {address.street}</AddressItem>
               <AddressItem>City: {address.city}</AddressItem>
               <AddressItem>Country: {address.country}</AddressItem>
            </ItemsWrapper>
            <ItemsWrapper>
               <Text>Shipping method:</Text>
               <AddressItem>{shippingMethod}</AddressItem>
               <Text>Payment method:</Text>
               <AddressItem>{paymentMethod}</AddressItem>
            </ItemsWrapper>
         </DetialsWrapper>
      </Wrapper>
   );
};


const Wrapper = styled.div`
   width: 80%;
   padding: 100px 0;
   display: flex;
   flex-flow: column;
   align-items: center;
`;

const DetialsWrapper = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: flex-start;
`;

const Title = styled.h2``;

const ItemsWrapper = styled.div`
   width: 200px;
   align-items: center;
   justify-content: center;
   flex-flow: column;
   padding: 30px 30px 15px 30px;
   box-shadow: 0 8px 12px 0 #d8e0ee;
   max-height: 400px;
   overflow-y: auto;
   margin: 20px;
   height: 250px;
`;

const Item = styled.div`
   padding: 10px;
   border: 1px solid #edf2fa;
   display: flex;
   flex-flow: row;
   align-items: center;
   border-radius: 3px;
   margin-bottom: 5px;
   justify-content: space-between;
`;

const ItemDetails = styled.div`
   display: flex;
   align-items: center;
   flex-flow: row;
   justify-content: space-between;
`;

const Text = styled.h2`
   width: 80%;
`;

const Name = styled.span``;
const AddressItem = styled.p``;

const Price = styled.div`
   margin-left: 20px;
   font-weight: bold;
`;

const ShippingDetails = styled.span`
   width: 100px;
   display: inline-block;
   margin-left: 20px;
   color: grey;
`;

const Total = styled.div`
   margin: 20px 0 0 0;
   width: 100%;
   text-align: right;
`;

const ButtonWrapper = styled.div`
   margin: 10px 0;
`;

const StyledButton = styled.button`
   ${sharedButtonStyles};
   width: 100px;
   margin: 0 auto;
`;

export default Checkout;
