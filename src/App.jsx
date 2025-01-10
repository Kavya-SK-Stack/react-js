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
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      alert("Item already exist");
      // Update the quantity of the existing item
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity  }
            : item
        )
      );
    } else {
      // Add the product to the cart with an initial quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to handle removing a product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (id, delta) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0) // Remove items with a quantity of 0
    );
  };

  // Function to calculate the total price with a 10% discount
  const calculateDiscountedTotal = () => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total * 0.9; // Apply a 10% discount
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
          updateQuantity={updateQuantity}
          totalPrice={calculateDiscountedTotal()}
        />
      )}
    </div>
  );
};

export default App;
