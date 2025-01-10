const CartModal = ({ cart, removeFromCart, closeCart, updateQuantity }) => {
  // Calculate total price before discount
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Apply 10% discount
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-[600px] shadow-lg">
        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-12 object-contain"
              />

              <div className="flex-1 mx-2">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p>${item.price}</p>
              </div>

              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400 "
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400 mr-14"
                >
                  +
                </button>
              </div>
            
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-300"
              >
                Remove
              </button>
            </div>
          ))
        )}

        {/* Display total price and discounted price */}
            <div className="mt-4 border-t pt-4">
              <p className="text-[16px] font-semibold">
                 Total Price: ${totalPrice.toFixed(2)}
              </p>
              <p className="text-xl font-semibold text-green-600">
                Final Price (10% Discount): ${discountedPrice.toFixed(2)}
              </p>
            </div>
          {/* </> */}
        {/* )} */}
      
        <button
          onClick={closeCart}
          className="bg-purple-800 text-white px-4 py-2 rounded mt-4 w-full hover:bg-purple-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
