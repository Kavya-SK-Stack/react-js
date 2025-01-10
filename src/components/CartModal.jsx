const CartModal = ({ cart, removeFromCart, closeCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-96 shadow-lg">
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
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-300"
              >
                Remove
              </button>
            </div>
          ))
        )}
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
