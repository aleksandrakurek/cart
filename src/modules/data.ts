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

export const products: ProductProps[] = [
   { id: "1", name: "👗", price: "20", isRequiringShipping: true },
   { id: "2", name: "👡", price: "25", isRequiringShipping: true },
   { id: "3", name: "👒", price: "30", isRequiringShipping: true },
   { id: "4", name: "👛", price: "50", isRequiringShipping: true },
   { id: "5", name: "📚", price: "5", isRequiringShipping: false },
];

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
