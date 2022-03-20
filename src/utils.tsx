export const isNumber = (number: string): boolean => {
   const regex = /^[0-9]*$/;
   return regex.test(number);
};
