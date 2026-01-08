# Node.js + MongoDB User Management API

A simple **Node.js + Express + MongoDB** project to manage users with **versioned APIs (v1 & v2)**.  
This project demonstrates **CRUD operations** (Create, Read, Update, Delete) using **MVC architecture** and a **simple HTML form**.

---

## **Features**

- Submit user details via a **form**
- Store users in **MongoDB**
- **View all users** in the frontend
- **Edit / Update / Delete users** via API
- Supports **API versioning**:
  - **v1** → name + email
  - **v2** → name + email + phone
- Fully structured in **MVC pattern**:
  - **Models** → Database schema
  - **Controllers** → API logic
  - **Routes** → Endpoint definitions
  - **Public** → Frontend HTML form

---

## **Project Structure**

```

project/
│
├─ controllers/
│   ├─ v1/userController.js
│   └─ v2/userController.js
│
├─ models/
│   └─ userModel.js
│
├─ routes/
│   ├─ v1/userRoutes.js
│   └─ v2/userRoutes.js
│
├─ config/
│   └─ db.js
│
├─ public/
│   └─ index.html
│
└─ server.js

````

---

## **Setup Instructions**

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
````

2. **Install dependencies**

```bash
npm install
```

3. **Start MongoDB** (locally)

```bash
mongod
```

4. **Start the server**

```bash
node server.js
```

5. **Open in browser**

Go to [http://localhost:3000](http://localhost:3000) to see the **user submission form**.

---

## **API Endpoints**

### **v1 (name + email)**

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| POST   | /api/v1/submit | Create user    |
| GET    | /api/v1/all    | Get all users  |
| GET    | /api/v1/:id    | Get user by ID |
| PUT    | /api/v1/:id    | Update user    |
| DELETE | /api/v1/:id    | Delete user    |

### **v2 (name + email + phone)**

| Method | Endpoint       | Description                    |
| ------ | -------------- | ------------------------------ |
| POST   | /api/v2/submit | Create user (phone required)   |
| GET    | /api/v2/all    | Get all users (includes phone) |
| GET    | /api/v2/:id    | Get user by ID                 |
| PUT    | /api/v2/:id    | Update user (includes phone)   |
| DELETE | /api/v2/:id    | Delete user                    |

> **Tip:** Switch the version in the frontend by changing:

```js
const API_VERSION = 'v1'; // or 'v2'
```

---

## **Database**

* **Database Name:** `formdb`
* **Collection Name:** `users`
* MongoDB creates database and collection automatically on first insert.

**Example document:**

```json
{
  "_id": "64a7f2c1e1b4b2d9f5a2c123",
  "name": "Alice",
  "email": "alice@example.com",
  "phone": "1234567890",
  "createdAt": "2026-01-08T10:00:00.000Z"
}
```

---

## **Frontend**

* A simple **HTML form** is included in `public/index.html`
* Submits user data to the selected **API version**
* Displays **success/error messages**

---

## **Technologies Used**

* Node.js
* Express.js
* MongoDB & Mongoose
* HTML, CSS, JavaScript (Frontend)

---

## **License**

This project is **open-source** and free to use.
