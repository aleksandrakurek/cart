import React from "react";
import * as P from "./parts";

interface ButtonProps {
   href?: string,
   onClick?: () => void,
   children?: any,
   external?: boolean,
   disabled?: boolean,
   hollow?: boolean,
   type?: any,
   className?: any,
}

const Button = ({ href, onClick, children, external, disabled, type, className, hollow, }: ButtonProps) => {

   const handleClick = event => {
      event.preventDefault();
      onClick();
   };

   if (typeof onClick !== "undefined") {
      return (
         <P.PlainButton onClick={handleClick} disabled={disabled} type={type} className={className} hollow={hollow}>
            {children}
         </P.PlainButton>
      );
   }

   if (external) {
      return (
         <P.ExternalButton href={href} target="_blank" rel="noopener noreferrer" className={className} hollow={hollow}>
            {children}
         </P.ExternalButton>
      );
   }

   return (
      <P.LinkButton to={href} className={className} hollow={hollow} disabled={disabled}>
         {children}
      </P.LinkButton>
   );
};

export default Button;
