import React, { useState } from "react";
import { Input as InputBase, Label, Wrapper, Error } from "./parts";

interface InputProps {
   label?: string;
   error?: string;
   className?: any;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   name?: string;
}

const FloatingLabelInput = ({
   label,
   error,
   onChange,
   name,
   type,
   value, defaultValue, disabled, autoComplete, className,
}: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => {

   const [autoFill, setAutoFill] = useState<boolean>(false);

   const handleAutoFill = e => {
      setAutoFill(e.animationName === "onAutoFillStart");
   };

   return (
      <Wrapper>
         <InputBase
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            autoComplete={autoComplete}
            onChange={onChange}
            hasError={!!error}
            placeholder=""
            className={className}
            onAnimationStart={handleAutoFill}
            hide={autoFill}
            hasValue={!!value}
         />

         {label && (
            <Label htmlFor={name} isFloating={!!value} hasError={!!error}>
               {label}
            </Label>
         )}
         {(!!error) && <Error>{error}</Error>}
      </Wrapper>
   );
};


export default FloatingLabelInput;
