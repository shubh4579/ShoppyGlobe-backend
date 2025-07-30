# ShoppyGlobe - Backend

This is the backend server for the **ShoppyGlobe** project built using **Node.js**, **Express.js**, and **MongoDB**. It handles product listings, cart management, user authentication, and secure API access.

---

## Project Structure

```
├── Controller/
│   └── products.controller.js, cart.controller.js, auth.controller.js
├── Middleware/
│   └── auth.middleware.js
├── Model/
│   └── products.model.js, cart.model.js, user.model.js
├── Routes/
│   └── products.routes.js, cart.routes.js, auth.routes.js
├── ScreenShots/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
```

---

## Features

- Register & login using JWT
- Passwords hashed with bcrypt
- Add/Delete/Fetch products
- Add/Delete/Fetch items in cart
- Middleware protected routes (`/cart`)
- MongoDB connection with Mongoose
- RESTful API with JSON response
- Tested with Thunder Client

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/shoppyglobe-backend.git
cd shoppyglobe-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
```

### 4. MongoDB

Make sure MongoDB is running locally at:  
`mongodb://localhost:27017`

---

## API Testing

Use **Thunder Client** (VS Code Extension) or Postman to test:

- `POST /register` – register user
- `POST /login` – login and receive token
- `GET /products` – fetch all products
- `POST /products` – add new product
- `GET /cart` – get items (token required)
- `POST /cart` – add to cart (token required)
- `DELETE /cart/:id` – remove cart item

---

## 📸 Screenshots

All screenshots are saved inside the `/ScreenShots` folder.

---
