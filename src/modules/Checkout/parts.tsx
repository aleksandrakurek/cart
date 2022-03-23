import styled from 'styled-components';
import { sharedButtonStyles } from '~/components/Button/parts';

export const Wrapper = styled.div`
   width: 80%;
   padding: 100px 0;
   display: flex;
   flex-flow: column;
   align-items: center;
`;

export const DetialsWrapper = styled.div`
   display: flex;
   flex-flow: row wrap;
   align-items: flex-start;
`;

export const Title = styled.h2``;

export const ItemsWrapper = styled.div`
   width: 250px;
   align-items: center;
   justify-content: center;
   flex-flow: column;
   padding: 30px 30px 15px 30px;
   box-shadow: 0 8px 12px 0 #d8e0ee;
   max-height: 400px;
   overflow-y: auto;
   margin: 20px;
   height: 250px;
   background: white;
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

export const Text = styled.h2`
   width: 80%;
`;

export const Name = styled.span``;
export const AddressItem = styled.p``;

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

export const Total = styled.div`
   margin: 20px 0 0 0;
   width: 100%;
   text-align: right;
`;

export const ButtonWrapper = styled.div`
   margin: 10px 0;
`;

export const StyledButton = styled.button`
   ${sharedButtonStyles};
   width: 100px;
   margin: 0 auto;
`;
