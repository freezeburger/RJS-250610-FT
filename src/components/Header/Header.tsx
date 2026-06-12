/* Global Imports */
import React, { FC, PropsWithChildren } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';
import { UIAccent } from '@/core/types/ui.types';

/* Local Imports */



interface HeaderProps extends PropsWithChildren, Partial<UIAccent> {
}

const styles = {
   display: 'flex',
   justifyContent: 'center', // 'justify-content' centers the content horizontally
   alignItems: 'center',      // 'align-items' centers the content vertically
   height: '100px',
   backgroundColor: 'cornflowerblue',
   color: 'white',
   fontSize: '24px',
   fontWeight: 'bold',
};

const getStyles = (accent:  HeaderProps['accent'] ) => {
   switch (accent) {
      case 'primary':
         return {
            ...styles,
            backgroundColor: 'cornflowerblue',
         };
      case 'secondary':
         return {
            ...styles,
            backgroundColor: 'lightcoral',
         };
      case 'tertiary':
         return {
            ...styles,
            backgroundColor: 'lightseagreen',
         };
      default:
         return styles;
   }
};

const Header: FC<HeaderProps> = ({ accent = 'primary' , children}) => {

   return (
      <header data-testid="Header" style={getStyles(accent)}>
         <h1>Header Component</h1>
         <h2>{children}</h2>
      </header>
   );

}

export default Header;
