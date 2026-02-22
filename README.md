# React Frontend with Express API – User Directory App

## 📌 Project Overview

This is a full-stack application built using:

- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **HTTP Client:** Axios
- **External Data Source:** JSONPlaceholder API

The backend fetches user data from an external API and exposes it via a custom route.  
The React frontend consumes this backend API and displays the user data in a structured format.

---

## 🏗️ Project Structure

```
API/
│
├── my-backend/
│   ├── src/
│   │   └── server.js
│   ├── package.json
│   └── node_modules/
│
├── my-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Users.js
│   │   └── App.js
│   ├── package.json
│   └── node_modules/
│
└── README.md
```

---

## ⚙️ How It Works

1. The Express backend runs on **Port 3000**.
2. It exposes a custom API route:

```
http://localhost:3000/akash
```

3. This route fetches user data from:
```
https://jsonplaceholder.typicode.com/users
```

4. The React frontend runs on **Port 3001** (or default CRA port).
5. The frontend calls the backend API using Axios.
6. The user data is rendered in a structured card layout.

---

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd API
```

---

## 🔹 Backend Setup

```bash
cd my-backend
npm install
node src/server.js
```

Backend will run on:

```
http://localhost:3000
```

---

## 🔹 Frontend Setup

Open a new terminal:

```bash
cd my-frontend
npm install
npm install axios
npm start
```

Frontend will run on:

```
http://localhost:3001
```

---

## 🌐 API Endpoint

Custom Backend Route:

```
GET /akash
```

Returns:

- id
- name
- username
- email
- phone
- website
- company
- address

---

## 🔐 CORS Configuration

CORS middleware is enabled in the backend to allow frontend API requests:

```javascript
const cors = require('cors');
app.use(cors());
```

---

## 📦 Technologies Used

- React.js
- Node.js
- Express.js
- Axios
- JSONPlaceholder API

---

## 🧠 Key Concepts Demonstrated

- REST API integration
- Backend to frontend communication
- CORS handling
- React hooks (useState, useEffect)
- Component-based architecture
- Full-stack project structure

---

## 📄 Future Improvements

- Add search functionality
- Add loading spinner
- Add error handling UI
- Add environment variables for API URLs
- Deploy to cloud (Render / Vercel / Netlify)

---

## 👨‍💻 Author

Akash Yadav  
Full Stack Developer | AI Trainer | DSA Enthusiast

---

## 📜 License

This project is open-source and available under the MIT License.