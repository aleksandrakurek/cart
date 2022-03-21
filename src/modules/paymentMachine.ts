import { createMachine } from 'xstate';

export const paymentMachine = createMachine({
   id: 'shoppingcart',
   initial: 'cart',
   states: {
      cart: {
         on: {
            ADDRESS: 'addressed',
         },
      },
      addressed: {
         on: {
            SKIP_SHIPPING: 'shipping_skipped',
            SELECT_SHIPPING: 'shipping_selected',
         },
      },
      shipping_skipped: {
         on: {
            SKIP_PAYMENT: 'payment_skipped',
            SELECT_PAYMENT: 'payment_selected',
            ADDRESS: 'addressed',
         },
      },
      shipping_selected: {
         on: {
            SELECT_PAYMENT: 'payment_selected',
            SKIP_PAYMENT: 'payment_skipped',
            ADDRESS: 'addressed',
         },
      },
      payment_skipped: {
         on: {
            COMPLETE: 'completed',
            ADDRESS: 'addressed',
            SELECT_SHIPPING: 'shipping_selected',
            SKIP_SHIPPING: 'shipping_skipped',
         },
      },
      payment_selected: {
         on: {
            COMPLETE: 'completed',
            ADDRESS: 'addressed',
            SKIP_SHIPPING: 'shipping_skipped',
            SELECT_SHIPPING: 'shipping_selected',
         },
      },
      completed: { type: 'final' },
   },

});

/*const promiseService = interpret(paymentMachine).onTransition((state) =>
 console.log(state.value),
 );*/

/*
 promiseService.start();

 promiseService.send({ type: 'final' });*/
