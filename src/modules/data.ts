export interface ProductProps {
   id: string;
   name: string;
   price: string;
   isRequiringShipping: boolean
}

export const productInitState: ProductProps = {
   id: '',
   name: '',
   price: '',
   isRequiringShipping: false,
};

export interface AddressProps {
   street: string,
   city: string,
   country: string,
}

export const initAddressState: AddressProps = {
   street: "",
   city: "",
   country: "Poland",
};

export const paymentMethods: string[] = ["Visa", "Mastercard", "Revolut"];
export const shippingMethodsPL: string[] = ["DHL", "DPD"];
export const shippingMethodsUS: string[] = ["Fedex"];
