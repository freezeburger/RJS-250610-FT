/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { ButtonWrapper } from './Button.styled';
import { UIAccent, UIActionnable } from '@/core/types/ui.types';


interface ButtonProps extends UIAccent, UIActionnable  { 
   children: string;
}


const Button: FC<ButtonProps> = ( { children, accent, action:onClick }) => {

   return (
      <ButtonWrapper data-testid="Button" {...{onClick, accent, children}} />
   );

}


/* const Button: FC<ButtonProps> = ( { children, accent, action:onClick }) => {

   return(
      <ButtonWrapper data-testid="Button" onClick={onClick} accent={accent}>
         {children}
      </ButtonWrapper>
   );

}
 */
/**
 * USAGE: Button description to complete.
 * @example
 * <Button /> 
 */
const ButtonMemo = React.memo(Button, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
ButtonMemo.displayName = 'Button Memoized';

export default ButtonMemo;
