# AI SaaS Chat - University Project

A modern AI-powered chat application built with **React.js** and **Node.js**, designed as a university project. This project demonstrates a full-stack SaaS (Software as a Service) AI chat platform, where users can interact with an AI assistant for learning, productivity, or experimentation purposes.

---

## 🌟 Project Features

- **Real-time AI Chat** – Users can send messages and receive responses from an AI assistant.
- **User Authentication** – JWT-based login and registration system.
- **Persistent Chat History** – All chats are saved for each user.
- **Modular Architecture** – Clean separation of frontend (React) and backend (Node.js/Express).
- **Easy Integration** – Designed for AI APIs (OpenAI, DeepSeek, or any compatible AI service).
- **Responsive Design** – Works on desktop and mobile devices.

---

## 📖 Project Description

This project is part of a **university advanced web development**, showcasing:

- **Full-stack development** with React.js for frontend and Node.js/Express for backend.
- **API integration** with AI services for chat completion.
- **Database management** using MongoDB to store user data and chat history.
- **Authentication** using JWT tokens to secure user accounts.

The application allows students or users to interact with an AI assistant, demonstrating SaaS capabilities in a learning environment.

---

## 🛠️ Setup Instructions

Follow these steps to run the project locally:

### **1. Clone the repository**

```bash
git clone https://github.com/alimoghrabi-dev/Ai-mern-uni-project.git
cd ai-mern-saas
```

### **1. Configure environment variables**

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
DEEPSEEK_API_KEY=your_deepseek_api_key

cd backend
npm run dev

cd ../frontend
npm run dev
```

ai-mern-saas/
├─ backend/ # Node.js + Express API
│ ├─ controllers/ # Chat and user controllers
│ ├─ models/ # MongoDB schemas
│ ├─ routes/ # API routes
│ └─ index.ts # Entry point
├─ frontend/ # React application
│ ├─ src/
│ │ ├─ components/ # Reusable UI components
│ │ ├─ pages/ # Chat page, login, register
│ │ └─ App.tsx
└─ README.md
