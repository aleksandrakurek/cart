import React, { ChangeEvent } from 'react';
import * as P from './parts';

interface SelectProps {
   options: string[];
   onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
   value: string;
}

const Select = ({ options = [], onChange, value }: SelectProps) => {
   const optionsArr = options.map((option, i) => (
      <option value={option} key={i}>{option}</option>
   ));

   return (
      <P.Wrapper>
         <P.Select onChange={onChange} value={value}>
            {optionsArr}
         </P.Select>
      </P.Wrapper>
   );
};

export default Select;
