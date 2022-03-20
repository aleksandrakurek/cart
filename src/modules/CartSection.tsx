import React, { useState, useEffect } from "react";
import styled from "styled-components";
import shortId from "shortid";
import Cart from '~/modules/Cart';
import { products, ProductProps } from "./data";

interface CartSectionProps {
   updatedCartItems: ProductProps[];
}

const CartSection = ({ updatedCartItems }: CartSectionProps) => {
   useEffect(() => {
      return () => {
         setCartItem([...updatedCartItems]);
      };
   }, [updatedCartItems]);


   const [cartItems, setCartItem] = useState<ProductProps[]>(updatedCartItems);
   const handleAddToCart = (item: ProductProps) => () => {
      const newItem = { ...item, id: shortId.generate() };
      setCartItem(cartItems => [...cartItems, newItem]);
   };

   const removeItem = (itemToRemove: ProductProps) => () => {
      setCartItem(cartItems => cartItems.filter(cartItems => cartItems.id !== itemToRemove.id));
   };

   return (
      <Wrapper>
         <Cart cartItems={cartItems} removeItem={removeItem} />
         <ProductsSection>
            <ProductsText>Add to cart</ProductsText>
            <ProductsWrapper>
               {products.map((item, i) => (
                  <SingleProduct onClick={handleAddToCart(item)} key={i}>
                     <ProductDetails>
                        <Name>{item.name}</Name>
                     </ProductDetails>
                     <Button>Add <b>{item.price}$</b></Button>
                  </SingleProduct>
               ))}
            </ProductsWrapper>
         </ProductsSection>
      </Wrapper>
   );
};


const Wrapper = styled.div`
   width: 50%;
   height: 100%;
   background-color: white;
   display: flex;
   flex-flow: column;
   justify-content: center;
   align-items: center;
   border-left: 1px solid #E3E3E6;
`;

const ProductsSection = styled.div`;
   display: flex;
   flex-flow: column;
   background: #edf2fa;
   width: 100%;
   height: 200px;
   align-items: center;
`;

const ProductsWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-flow: row;
   align-items: center;
   justify-content: space-between;
`;

const ProductsText = styled.h3`
   width: calc(100% - 60px);
   margin: 20px 0 0 0;
`;

const SingleProduct = styled.div`;
   height: 100px;
   width: 100px;
   display: flex;
   flex-flow: column;
   align-items: center;
   justify-content: center;
   margin: 30px;
   background: white;
   cursor: pointer;

   :hover {
      opacity: .8;
      transition: .2s ease;
   }
`;

const ProductDetails = styled.div`;
   display: flex;
   flex-flow: column;
   flex-grow: 1;
   align-items: center;
   justify-content: center;
`;

const Button = styled.div`;
   width: 100%;
   height: 30px;
   color: white;
   background: lightblue;
   cursor: pointer;
   opacity: 1;
   text-align: center;
   line-height: 30px;
`;

const Name = styled.span``;

export default CartSection;
