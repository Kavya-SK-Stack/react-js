import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import Hero from "./components/Hero";

const App = () => {
  // State to manage the cart items
  const [cart, setCart] = useState([]);
  // State to manage whether the cart modal is open or closed
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    if (cart.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  // Function to handle removing a product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Render the app
  return (
    <div>
      {/* Navbar: Displays app title and cart count */}
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />

      <Hero />

      {/* Product List: Displays fetched products */}
      <ProductList addToCart={addToCart} />

      {/* Cart Modal: Shows when the cart is open */}
      {isCartOpen && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          closeCart={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
