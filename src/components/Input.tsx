import React from "react";
import styled from "styled-components";

interface InputComponentProps {
   label: string;
   name: string;
   value: string | number;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   onClick?: (event?: React.MouseEvent) => void;
}

const InputComponent = ({ label, name, value, onChange }: InputComponentProps) => {
   return (
      <Wrapper>
         <Label>{label}</Label>
         <Input
            onChange={onChange}
            value={value}
            name={name}
         />
      </Wrapper>
   );
};

const Wrapper = styled.div`
   width: 100%;
   position: relative;
`;

const Label = styled.p`
`;

const Input = styled.input``;

export default InputComponent;
