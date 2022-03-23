import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   flex-flow: column;
`;

export const Text = styled.h2`
   width: 80%;
`;

export const ItemsWrapper = styled.div`
   width: 80%;
   align-items: center;
   justify-content: center;
   flex-flow: column;
   padding: 30px 30px 15px 30px;
   box-shadow: 0 8px 12px 0 #d8e0ee;
   max-height: 400px;
   overflow-y: auto;
`;

export const Item = styled.div`
   padding: 10px;
   border: 1px solid #edf2fa;
   display: flex;
   flex-flow: row;
   align-items: center;
   border-radius: 3px;
   margin-bottom: 5px;
   justify-content: space-between;
`;

export const ItemDetails = styled.div`
   display: flex;
   align-items: center;
   flex-flow: row;
   justify-content: space-between;
`;

export const Price = styled.div`
   margin-left: 20px;
   font-weight: bold;
`;

export const ShippingDetails = styled.span`
   width: 100px;
   display: inline-block;
   margin-left: 20px;
   color: grey;
`;

export const RemoveIcon = styled.span`
   margin-left: 20px;
   cursor: pointer;

   :hover {
      opacity: .5;
   }
`;

export const Total = styled.div`
   margin: 20px 0 0 0;
   width: 100%;
   text-align: right;
`;

export const Name = styled.span``;
export const CartPlaceholder = styled.div`
   width: 100%;
   text-align: center;
`;
