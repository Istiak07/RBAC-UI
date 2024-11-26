# RBAC-UI

This project is a **Role-Based Access Control (RBAC)** User Interface built using **React** and **React-Admin**. It provides an intuitive, user-friendly interface for managing users, roles, and permissions efficiently.

## Features

- **User Management**:
  - Add, edit, and delete user details such as Name, Email, Status, and Permissions.
  - Responsive design for seamless usage across devices.

- **Role-Based Access Control**:
  - Assign permissions to users based on roles.
  - Permissions include `Read (R)`, `Write (W)`, and `Delete (D)`.

- **Interactive Notifications**:
  - Real-time notifications on successful actions like user creation or updates.

- **Custom Styling**:
  - Clean and modern design with custom CSS for a polished UI.
  - Fields arranged intuitively to save space and improve usability.

- **Built with React-Admin**:
  - Efficient data management using React-Admin components for forms and data grids.

## Folder Structure

RBAC-UI/ │ ├── src/ │ ├── components/ │ │ ├── CategoryList.js // List view for users │ │ ├── CategoryEdit.js // Edit user details │ │ ├── CategoryCreate.js // Add new user form │ │ └── FilterList.js // Sidebar filters │ ├── App.js // Main application file │ └── styles/ │ └── CategoryCreate.css // Custom styles for the create user form │ ├── server/ │ ├── index.js // Backend server entry point │ ├── public/ │ └── index.html │ ├── package.json ├── README.md └── ...


## Installation and Running the Project
## In bash
To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Istiak07/RBAC-UI.git
   cd RBAC-UI
Setup the React Admin App:

Navigate to the ra-app directory:

cd ra-app
Install dependencies:

npm install
Start the development server:

npm run dev
The React Admin app will be running at http://localhost:5173 (default Vite port).

Setup the Backend Server:
Open a new terminal and navigate to the project root directory:

cd RBAC-UI
Install backend dependencies:

npm install
Start the backend server:

nodemon index.js
The server will be running at http://localhost:3000.
Access the Application:

Open the React Admin app in your browser and test the RBAC functionality.
