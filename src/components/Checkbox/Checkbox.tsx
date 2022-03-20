import React from "react";
import * as P from "./parts";

interface CheckboxProps {
   checked: boolean;
   onClick?: () => void;
   className?: any;
   label?: string;
}

const Checkbox = ({ checked, onClick, className, label }: CheckboxProps) => (
   <P.CheckboxWrapper onClick={onClick} className={className}>
      <P.CheckboxUnchecked isChecked={checked}>
         {checked && (<P.CheckboxChecked src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8AAADDw8OdnZ1ERETi4uL7+/v4+PgwMDAtLS0hISE3Nzc0NDQpKSkmJibt7e0dHR0ZGRm8vLzq6urz8/MPDw87Ozus9ko/AAACh0lEQVR4nO3ZV3IcMRAEUUASKW9ImfsfVROypLg7roDo6lbmASbqRWO/tjUiIiIiIiIiIiIiIiIiIiIiIqrV/U30gsk96/1z9IapLcDaxB/A3j9G75jWL2Bd4h9gVeIDYE3iI2DvX6L3DO8fYL0rPgFWu+IFYC3iRWAl4hVgHeJVYP9ag3gdWIS4BixBXAf2/jx6oBrA6IFqAKMHqgGMHqgGMHqgGsDogWoAoweqAYweqAYweqAawOiBagCjB6oBjB6oBjB6oBrA6IFqAKMHqgGMHqgGMHqgGsDogWoAoweqAYweqAYweqAawOiBagCjB6oBjB6oBjB6oBrA6IFqAKMHqgGMHqhmALy5nfl1B2B/MfHrFsA+kWgCnEe0Ac4iGgHnEK2AM4hmwPFEO+BooiFwLNESOJJoChxHtAWOIhoDxxCtgSOI5kCdaABs39YnaEQH4FSiB7C1t7OILsBpRB/gpIfqBJxyRS/gBKIbcDjRD9jau5FER+BQoidw4EN1BQ67oi9wENEZOIToDWztlUp0B8pEf6D4UDMApSvmAArELMDTDzUP8OQVMwFbe32cmAt44orZgIevmA/Ybg8REwLboYeaE3jgoWYF7n6oaYF7iYmBC/H9NjE1cA8xOXD7oW78H+AP3L5ieqBGTAHcfqjpgQvxQ3HgWWIi4LnfYirgmSsmAx4npgMefagJgceumBLY2ss3xYH7r5gWuBB3XTExcN9DTQ1ciJsPNTlw+4rpgVvEAsB1YgngGrEIcCF+Kg68dsVCwMtXLAW8RCwGfPpQywEX4l1x4GNiSeDD32JR4N8rlgX+JhYG/nyopYELsTpwIUYPICIiIiIiIiIiIiIiIiL6n/sONLQexB4BMC8AAAAASUVORK5CYII=" />)}
      </P.CheckboxUnchecked>
      {label && <P.Label>{label}</P.Label>}
   </P.CheckboxWrapper>
);

export default Checkbox;
