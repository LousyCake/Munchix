# Munchix

**Munchix** is a full-stack food ordering system built using the **MERN** stack (MongoDB, Express, React, Node.js). The platform allows users to browse restaurants, select items, add them to their cart, and proceed to checkout using various integrations. Munchix is designed to be user-friendly and includes key features such as payments, cloud storage, and password recovery. Below is a breakdown of the main features and components.

## Features

- **Restaurant Listings**: Users can explore available restaurants with filters for vegetarian, review-based, and rating-based sorting.
- **Order Management**: Users can add items to the cart, manage orders, and view order history.
- **User Profile Management**: Users can update their profile information, including their name, email, and profile picture.
- **Payment Integration**: Secure payment processing is integrated using **Stripe**.
- **Image Storage**: Profile images are handled using **Cloudinary** for efficient cloud storage.
- **Password Recovery**: Users can reset their passwords via email using **Mailtrap**.
  
## Integrations

- **Stripe**: Stripe is used to handle payments securely within the app. You can upgrade this integration by adding more payment methods, such as Google Pay or Apple Pay.
- **Cloudinary**: Cloudinary stores and manages user profile images efficiently. Future improvements could involve expanding Cloudinary for storing restaurant and menu images.
- **Mailtrap**: Used for sending emails related to password resets. This integration can be extended to send order confirmations and notifications.

## How Munchix Works

### 1. Restaurant Filters
   - Filter restaurants by:
     - **Pure Veg**
     - **Sort by Review**
     - **Sort by Ratings**

### 2. Profile and Account Management
   - Users can log in, view their profile, and update personal information. 
   - The profile page includes features like updating avatars using Cloudinary.

### 3. Order Management
   - Users can track their current orders in the “My Orders” section.
   - Order status is updated in real-time.

### 4. Cart and Checkout
   - Users can add items to the cart and proceed to checkout, where **Stripe** handles the payment.
   - Upon successful payment, the user receives an order confirmation.

### 5. Password Recovery
   - If a user forgets their password, the recovery process is handled via **Mailtrap**.

## How to Improve

- **Enhanced Payment Methods**: Support for multiple currencies and additional payment gateways.
- **Advanced Filtering**: Adding more filters for users, such as price range, delivery speed, and availability.
- **Push Notifications**: Implement notifications for order updates and special offers.
- **User Feedback**: Add a system to gather user reviews and ratings on food and restaurants.

## Future Upgrades

- **Social Media Integration**: Allow users to sign in using Google or Facebook.
- **Loyalty Program**: Add a feature that rewards users with points on every order.
- **Multi-language Support**: Expand the platform to support multiple languages, making it accessible to a wider audience.

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/LousyCake/Munchix.git
   ```
2. Install dependencies for both backend and frontend:
   ```
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Set up environment variables:

- **Stripe Keys**
- **Cloudinary Credentials**
- **Mailtrap SMTP**

4. Run the application:
   ```
   cd frontend && npm start
   cd ../backend && npm start
   ```
5. Access the app at http://localhost:3000.

## Screenshots

- **Restaurant Listing**: Displays the list of restaurants with options to filter by "Pure Veg", "Sort by Review", and "Sort by Ratings".
  ![Restaurant Listing](https://github.com/LousyCake/Munchix/raw/main/Screenshots/2.png)

- **Menu Page**: Showcases the dishes from a selected restaurant with an option to add them to the cart.
  ![Menu Page](https://github.com/LousyCake/Munchix/raw/main/Screenshots/9.png)

- **Login Page**: The login screen where users can enter their credentials to sign in.
  ![Login Page](https://github.com/LousyCake/Munchix/raw/main/Screenshots/8.png)

- **User Profile**: The profile page where users can view and edit their profile information.
  ![User Profile](https://github.com/LousyCake/Munchix/raw/main/Screenshots/6.png)

- **Update Profile Page**: Users can update their name, email, and avatar on this page.
  ![Update Profile Page](https://github.com/LousyCake/Munchix/raw/main/Screenshots/7.png)

- **Order History**: Displays the user's past orders along with the order details and status.
  ![Order History](https://github.com/LousyCake/Munchix/raw/main/Screenshots/5.png)

- **Contact Us and Map**: A footer section with the contact information and an embedded map to show the restaurant's location.
  ![Contact Us and Map](https://github.com/LousyCake/Munchix/raw/main/Screenshots/3.png)

- **Checkout Page**: The checkout screen where users can review their orders before final payment.
  ![Checkout Page](https://github.com/LousyCake/Munchix/raw/main/Screenshots/1.png)

- **User Dropdown Menu**: The user dropdown menu, where users can access their "Orders", "Profile", and the option to "Logout".
  ![User Dropdown Menu](https://github.com/LousyCake/Munchix/raw/main/Screenshots/4.png)


## Contributing
We welcome contributions from the community. Feel free to fork the repo, submit pull requests, or raise issues. Let's build a better food ordering system together!

## License

This project is licensed under the [MIT License](./LICENSE).
