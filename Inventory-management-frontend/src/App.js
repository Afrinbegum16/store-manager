import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddProduct from './Components/AddProduct';
import ProductCatalog from './Components/product/ProductCatalog';
import Layout from './Layout';
import Cart from './Components/Cart/Cart';
import NotFound from './pages/NotFound';
import {CartProvider} from './context/CartContext';
import Inventory from './Components/Inventory/Inventory';
import {InventoryProvider} from './context/InventoryContext';
import {SalesProvider} from './context/SalesContext';
import Sales from './Components/Sales/Sale';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement:<NotFound />,
    children: [
      { path: '/', element: <ProductCatalog /> },
      { path: '/add-product', element: <AddProduct /> },
      { path: '/cart', element: <Cart /> },
      { path: '/inventory', element: <Inventory /> },
      { path: '/sales', element: <Sales /> },
      { path: '*', element: <NotFound /> }, // fallback route
    ],
  },
]);

function App() {
  return (
    <InventoryProvider>
        <CartProvider>
          <SalesProvider>
            <RouterProvider 
            router={router} />
          </SalesProvider>
        </CartProvider>
    </InventoryProvider>
  );
}

export default App;