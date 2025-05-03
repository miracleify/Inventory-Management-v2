# Inventory-Management-v2
Improved version of Ineventory-management by me.

=======
# Inventory Management v2

This is an improved and production-ready version of the Inventory Management System built with Node.js, Express, PostgreSQL, Sequelize ORM, and Docker. The focus of this version is on **securing the database** and ensuring smooth, reliable database connections. It includes user authentication, product management, sales tracking, and admin features. This version ensures better database security, a well-structured project, and smoother database connection handling.

## Features

- ✅ **Secure Database Connection:** Utilizes environment variables for credentials and connections.
- ✅ **User Registration & Login** (JWT-based auth)
- ✅ **Role-based Access** (Admin vs Regular users)
- ✅ **Product Management** (Create, Update, Delete, View)
- ✅ **Sales Tracking**
- ✅ **Category Management**
- ✅ **Email Notification on Registration**
- ✅ **PostgreSQL with Sequelize ORM**
- ✅ **Dockerized for easy deployment**
- ✅ **GitHub Actions workflow** (CI/CD-ready)

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT for Authentication
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Nodemailer (Email service)

## Getting Started

### 1. Clone the repo

```bash
git clone git@github.com:yourusername/Inventory-management-v2.git
cd Inventory-management-v2


2. Set up environment variables
Create a .env file in the root with the following details to securely manage your database connection and other app configurations:



PORT=3000
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=invm-db
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password




docker-compose up --build



API ENDPOINT

| Method | Endpoint            | Description               |
| ------ | ------------------- | ------------------------- |
| POST   | /api/auth/register  | Register a new user       |
| POST   | /api/auth/login     | Login and receive JWT     |
| GET    | /api/products       | Get all products          |
| POST   | /api/products       | Add a new product (Admin) |
| PUT    | /api/products/\:id  | Update a product (Admin)  |
| DELETE | /api/products/\:id  | Delete a product (Admin)  |
| ...    | (More endpoints...) |                           |


5. Deployment
This project supports CI/CD using GitHub Actions. On every push to the main/master branch, the app will automatically build and deploy (see .github/workflows/deploy.yml).
License
MIT

Built with 💻 by Miracleify
>>>>>>> origin/master
