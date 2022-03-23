export const isNumber = (number: string): boolean => {
   const regex = /^[0-9]*$/;
   return regex.test(number);
};

export const paymentMethods: string[] = ["Visa", "Mastercard", "Revolut"];
export const shippingMethodsPL: string[] = ["DHL", "DPD"];
export const shippingMethodsUS: string[] = ["Fedex"];
