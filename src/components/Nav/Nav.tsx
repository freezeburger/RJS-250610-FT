/* Global Imports */
import React, { FC } from 'react';
import { NavLink } from 'react-router';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { NavWrapper } from './Nav.styled';


interface NavProps { }


const Nav: FC<NavProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <NavWrapper data-testid="Nav">
      <h3>Navigation</h3>
      <hr />
      <NavLink to="/">Home</NavLink> | 
      <NavLink to="/products">Products</NavLink> | 
      <NavLink to="/flights">Flights</NavLink> | 
      <NavLink to="/users">Users</NavLink> | 
   </NavWrapper>
   );

}

/**
 * USAGE: Navigation générale.
 * DOIT EXISTER DANS LE CONTEXTE DU ROUTER
 * @example
 * <Nav /> 
 */
const NavMemo = React.memo(Nav, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
NavMemo.displayName = 'Nav Memoized';

export default NavMemo;
