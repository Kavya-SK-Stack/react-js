# E-commerce Add to Cart Task Using Modal

##  Features
  Core Functionality

1. Fetch Products from Fake Store API
* Displays a list of products with details like images, titles, and prices.

2. Add to Cart
* Users can add products to the cart using the "Add to Cart" button.
* If a product is already in the cart, an alert message ("Item already added to the cart") is displayed.

3. View Cart in Modal
* Clicking on the Cart button in the Navbar opens a modal displaying all the cart items.
* The modal shows the product image, name, price, and includes a "Remove from Cart" button.

4. Remove from Cart
* Users can remove specific items from the cart via the modal.

  User Interface
* Responsive Layout: Works seamlessly on both desktop and mobile devices.
* Clean Styling with Tailwind CSS: Ensures a professional and user-friendly design


## Tech Stack

Frontend
1. React.JS: Framework used to build the app.
2. Tailwind CSS: For modern, responsive, and utility-first styling.



## Application Flow

1. Product List:

* Products are fetched from the Fake Store API and displayed in a grid format.

2. Add to Cart:

* Each product has an "Add to Cart" button. When clicked, the product is added to the cart unless it's already present.

3. Navbar:

* Displays the total number of items in the cart.

4. Cart Modal:

* Clicking the Cart button opens a modal that shows all items in the cart.
* Each cart item has a "Remove" button to delete it from the cart.
