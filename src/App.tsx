import React, { useEffect, useState } from "react";
import shortId from "shortid";
import styled from "styled-components";
import CartSection from "~/modules/CartSection";
import { AddressProps, initAddressState, ProductProps } from "./modules/data";
import { colors } from '~/config';
import AddressForm from '~/modules/AddressForm';
import ProductForm from '~/modules/ProductForm';
import PaymentForm from '~/modules/PaymentForm';
import Checkout from '~/modules/Checkout';


const App = () => {
         useEffect(() => {
            return () => {
               setCartItem(cartItems);
            };
         }, []);

         const [cartItems, setCartItem] = useState<ProductProps[]>([
            {
               id: shortId.generate(),
               name: "👗",
               price: "20",
               isRequiringShipping: true,
            },
            {
               id: shortId.generate(),
               name: "👡",
               price: "25",
               isRequiringShipping: true,
            },
         ]);
         const handleAddToCart = (item: ProductProps) => {
            setCartItem(cartItems => [...cartItems, item]);
         };

         const [address, setAddress] = useState<AddressProps>(initAddressState);
         const handleSaveAddress = (address: AddressProps) => {
            setAddress(address);
         };

         const [shippingMethod, setShippingMethod] = useState<string>("DHL");

         const handleSaveShippingMethod = (shippingMethod: string) => {
            setShippingMethod(shippingMethod);
         };

         const [paymentMethod, setPaymentMethod] = useState<string>("Visa");

         const handleSavePaymentMethod = (paymentMethod: string) => {
            setPaymentMethod(paymentMethod);
         };

         const isAddressForm: boolean = false;
         const isPaymentForm: boolean = false;
         const isCheckout: boolean = false;

         const getCurrentStep = () => {
            if (isAddressForm) {
               return <AddressForm
                  address={address}
                  handleSaveAddress={handleSaveAddress}
                  shippingMethod={shippingMethod}
                  handleSaveShippingMethod={handleSaveShippingMethod}
               />;
            }

            if (isPaymentForm) {
               return <PaymentForm paymentMethod={paymentMethod} handleSavePaymentMethod={handleSavePaymentMethod} />;
            }

            if (isCheckout) {
               return <Checkout cartItems={cartItems} address={address} shippingMethod={shippingMethod} paymentMethod={paymentMethod} />;
            }

            return <><ProductForm handleAddToCart={handleAddToCart} /><CartSection updatedCartItems={cartItems} /></>;
         };

         return (
            <Wrapper>
               {getCurrentStep()}
            </Wrapper>
         );
      }
;

const Wrapper = styled.div`
   width: 100%;
   height: 100vh;
   background-color: ${colors.paleGreyFive};
   display: flex;
   flex-flow: row;
   justify-content: center;
   align-items: center;
   font-family: Helvetica, sans-serif;
`;

export default App;
