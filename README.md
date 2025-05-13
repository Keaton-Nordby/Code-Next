# Code-Next API

A simple Node.js API built using [Express](https://expressjs.com/) and [Mongoose](https://mongoosejs.com/). This project is set up for development with `nodemon` and follows basic modularization for scalability.

## Features

- REST API built with Express
- MongoDB integration via Mongoose
- Live-reload development with Nodemon

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

## Getting Started

Clone the repository
git clone https://github.com/your-username/code-next-api.git
cd code-next-api


Install dependencies
npm install

Run the server
Development mode (with Nodemon)
npm run dev

Production mode

npm run serve
The server will start on http://localhost:3000 (or your configured port).

Project Structure
bash
Copy code
├── server.js         # Main server entry point
├── package.json      # Project configuration
├── .gitignore        # Git ignored files
└── README.md         # Project documentation
Scripts
npm run dev — Start with live reload (nodemon)

npm run serve — Start server normally

Technologies Used
Backend: Express.js
Database: MongoDB + Mongoose
Dev Tools: Nodemon
