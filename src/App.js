import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

import Cart from './components/Cart/Cart'
import { hide } from './../../moodle/lib/amd/src/local/aria/aria-hidden';

function App() {
  //Define initial states
  const [cartIsShown, setCartIsShown] = useState(false);
  //Define methods that use states
  function showCartHandler() {
    setCartIsShown(true);
  }
  function hideCartHandler() {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
