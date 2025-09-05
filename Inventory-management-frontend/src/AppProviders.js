// src/context/AppProviders.js
import CartProvider from './CartContext';
import InventoryProvider from './InventoryContext';
import SalesProvider from './SalesContext';

const AppProviders = ({ children }) => {
  return (
    <CartProvider>
      <InventoryProvider>
        <SalesProvider>
          {children}
        </SalesProvider>
      </InventoryProvider>
    </CartProvider>
  );
};

export default AppProviders;
