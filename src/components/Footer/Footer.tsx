/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
// import './Footer.style.css';
import './Footer.style.scss';

interface FooterProps { }


const Footer: FC<FooterProps> = () => {

   return(
   <footer className="Footer" data-testid="Footer">
      Footer Component
   </footer>
   );

}

export default Footer;
