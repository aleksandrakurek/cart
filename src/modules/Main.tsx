import React, { useState } from "react";
import { useMachine } from '@xstate/react';
import { paymentMachine } from '~/store/paymentMachine';
import { AddressProps, initAddressState, ProductProps } from "~/store/constants";
import CartSection from "~/modules/CartSection";
import AddressForm from '~/modules/AddressForm';
import PaymentForm from '~/modules/PaymentForm';
import Checkout from '~/modules/Checkout';
import ShipmentForm from '~/modules/ShipmentForm';
import { shippingMethodsPL, shippingMethodsUS } from '~/utils';
import * as P from './parts';

const Main = () => {
   const [state, send] = useMachine(paymentMachine);
   const [cartItems, setCartItem] = useState<ProductProps[]>([]);
   const [address, setAddress] = useState<AddressProps>(initAddressState);
   const [shippingMethods, setShippingMethods] = useState<string[]>(shippingMethodsPL);
   const [shippingMethod, setShippingMethod] = useState<string>("DHL");
   const [paymentMethod, setPaymentMethod] = useState<string>("Visa");

   const handleSaveItems = (items: ProductProps[]) => {
      setCartItem(items);
      send('ADDRESS');
   };

   const handleSaveAddress = (address: AddressProps) => {
      if (address.country === "Poland") {
         setShippingMethod(shippingMethodsPL[0]);
         setShippingMethods(shippingMethodsPL);
      }

      if (address.country === "USA") {
         setShippingMethod(shippingMethodsUS[0]);
         setShippingMethods(shippingMethodsUS);
      }

      setAddress(address);
      const shouldBeShipped: boolean = (cartItems && cartItems.length > 0) && cartItems.some(item => item.isRequiringShipping);

      if (shouldBeShipped) {
         send('SELECT_SHIPPING');

      } else {
         send('SKIP_SHIPPING');
      }
   };

   const handleSaveShippingMethod = (shippingMethod: string) => {
      setShippingMethod(shippingMethod);

      const totalCost: number = (cartItems && cartItems.length > 0) && cartItems.map(item => parseInt(item.price)).reduce((prev, next) => prev + next);
      const shouldBePaid: boolean = totalCost > 0;

      if (shouldBePaid) {
         send('SELECT_PAYMENT');
      } else {
         send('SKIP_PAYMENT');
      }
   };

   const handleGoToAddress = () => send('ADDRESS');

   const handleSavePaymentMethod = (paymentMethod: string) => {
      setPaymentMethod(paymentMethod);
      send('COMPLETE');
   };

   const isAddressForm: boolean = state.matches('addressed');
   const isShipmentForm: boolean = state.matches('shipping_selected');
   const isPaymentForm: boolean = state.matches('payment_selected');
   const isCheckout: boolean = state.matches('completed') || state.matches('payment_skipped');

   const getCurrentStep = () => {
      if (isAddressForm) {
         return (
            <AddressForm
               address={address}
               handleSaveAddress={handleSaveAddress}
            />
         );
      }

      if (isPaymentForm) {
         return <PaymentForm paymentMethod={paymentMethod} handleSavePaymentMethod={handleSavePaymentMethod} handleGoBack={handleGoToAddress} />;
      }

      if (isShipmentForm) {
         return (
            <ShipmentForm
               shippingMethod={shippingMethod}
               shippingMethods={shippingMethods}
               handleSaveShippingMethod={handleSaveShippingMethod}
               handleGoBack={handleGoToAddress}
            />
         );
      }

      if (isCheckout) {
         return <Checkout cartItems={cartItems} address={address} shippingMethod={shippingMethod} paymentMethod={paymentMethod} />;
      }

      return <CartSection handleSaveItems={handleSaveItems} />;
   };

   return (
      <P.Wrapper>
         {getCurrentStep()}
      </P.Wrapper>
   );
};

export default Main;
