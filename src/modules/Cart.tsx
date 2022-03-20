import React from 'react';
import styled from 'styled-components';
import { ProductProps } from '~/modules/data';

interface CartProps {
   cartItems: ProductProps[];
   removeItem: (itemToRemove: ProductProps) => () => void;
}

const Cart = ({ cartItems, removeItem }: CartProps) => {
   return (
      <Wrapper>
         <Text>Your items:</Text>
         <ItemsWrapper>
            {cartItems && cartItems.map((cartItem, i) => {
               return (
                  <Item key={i}>
                     <ItemDetails>
                        <Name>{cartItem.name}</Name>
                        <Price>{cartItem.price}$</Price>
                        <ShippingDetails>Sent by: {cartItem.isRequiringShipping ? "📦" : "✉️"}</ShippingDetails>
                     </ItemDetails>
                     <RemoveIcon onClick={removeItem(cartItem)}>❌</RemoveIcon>
                  </Item>
               );
            })}
            <Sum>
               SUM: <b>{cartItems ? cartItems.map(item => parseInt(item.price)).reduce((prev, next) => prev + next) : 0}$</b>
            </Sum>
         </ItemsWrapper>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   display: flex;
   flex-grow: 1;
   align-items: center;
   justify-content: center;
   width: 100%;
   flex-flow: column;
`;

const Text = styled.h2`
   width: 80%;
`;

const ItemsWrapper = styled.div`
   width: 80%;
   align-items: center;
   justify-content: center;
   flex-flow: column;
   padding: 30px 30px 15px 30px;
   box-shadow: 0 8px 12px 0 #d8e0ee;
   max-height: 400px;
   overflow-y: auto;
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

const RemoveIcon = styled.span`
   margin-left: 20px;
   cursor: pointer;

   :hover {
      opacity: .5;
   }
`;

const Sum = styled.div`
   margin: 20px 0 0 0;
   width: 100%;
   text-align: right;
`;

const Name = styled.span``;

export default Cart;
