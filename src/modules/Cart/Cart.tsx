import React from 'react';
import { ProductProps } from '~/store/constants';;
import * as P from './parts';

interface CartProps {
   cartItems: ProductProps[];
   removeItem: (itemToRemove: ProductProps) => () => void;
}

const Cart = ({ cartItems, removeItem }: CartProps) => {
   const isEmptyItemsArr = !(cartItems && cartItems.length > 0);

   const getTotalPrice = () => {
      if (!isEmptyItemsArr) {
         return (
            <P.Total>
               Total: <b>
               {cartItems
               .map(item => parseInt(item.price))
               .reduce((prev, next) => prev + next)}$</b>
            </P.Total>
         );
      }
      return;
   };

   return (
      <P.Wrapper>
         <P.Text>{!isEmptyItemsArr && "Your items:"}</P.Text>
         <P.ItemsWrapper>
            {!isEmptyItemsArr
             ? cartItems.map((cartItem, i) => {
                  return (
                     <P.Item key={i}>
                        <P.ItemDetails>
                           <P.Name>{cartItem.name}</P.Name>
                           <P.Price>{cartItem.price}$</P.Price>
                           <P.ShippingDetails>Sent by: {cartItem.isRequiringShipping ? "📦" : "✉️"}</P.ShippingDetails>
                        </P.ItemDetails>
                        <P.RemoveIcon onClick={removeItem(cartItem)}>❌</P.RemoveIcon>
                     </P.Item>
                  );
               })
             : <P.CartPlaceholder>⭐ Your cart is empty. Add some items️ ⭐</P.CartPlaceholder>
            }
            {getTotalPrice()}
         </P.ItemsWrapper>
      </P.Wrapper>
   );
};

export default Cart;
