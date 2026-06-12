/* Global Imports */
import { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Products.style.css';


interface ProductsProps { }

const Products: FC<ProductsProps> = () => {

   Hooks.useDocumentTitle('Products View');

   Hooks.useProductApiReducer(true);

   return (
      <div className="Products" data-testid="Products">
         <UI.Main>
            <h1>Products Content</h1>
            <UI.Button
               accent='primary'
               action={() => console.log('Button Clicked')}>
               Click Me
            </UI.Button>
            <UI.Button
               accent='secondary'
               action={() => console.log('Button Clicked')}>
               Click Me
            </UI.Button>
         </UI.Main>
      </div>
   )
};

export default Products;
