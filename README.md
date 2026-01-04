Customer Management Application

Overview

This is a simple Customer Management Application built as part of an assignment to demonstrate basic-to-intermediate skills in React JS, Node.js with Express, and SQLite.
The application allows users to manage customers and their multiple addresses using essential CRUD operations with smooth page navigation.

The focus of this project is on core functionality, clean code, proper database design, and API integration, rather than advanced UI styling.

Tech Stack:

Frontend
React JS
React Router
Axios
HTML & basic CSS

Backend
Node.js
Express.js
SQLite

Nodemon (for development)

Features Implemented
Customer Management

Create a new customer with basic validation

View list of all customers

View individual customer details

Update customer information (name, phone)

Delete a customer with confirmation

Multiple Address Management

Add multiple addresses for a single customer

Store addresses in a separate table linked by customer ID

View all addresses for a customer

Display clear indicators:

“Only One Address”

“Multiple Addresses”

Search & Filter

Search customers by:

City

State

Pin Code

Clear filters and reload full customer list

Navigation

Customer List page

Create Customer page

Customer Details page

Implemented using React Router

Database Design
Customers Table

id (Primary Key)

first_name

last_name

phone

city

state

pincode

Addresses Table

id (Primary Key)

customer_id (Foreign Key → customers.id)

address_line

city

state

pincode

This structure supports a one-to-many relationship between customers and addresses.

Steps to Run Locally
1️⃣ Clone the Repository
git clone <(https://github.com/Laharivanaja/customer-management-app.git)>
cd Energetic

2️⃣ Run Backend
cd backend
npm install
npm run dev


Backend will run on:

http://localhost:5000

3️⃣ Run Frontend

Open a new terminal:

cd frontend
npm install
npm start


Frontend will run on:

http://localhost:3000



Addresses

POST /addresses/:customerId – Add address

GET /addresses/:customerId – Get addresses for customer

PUT /addresses/edit/:id – Update address

Screenshots  
<img width="1149" height="157" alt="image" src="https://github.com/user-attachments/assets/5d461d0a-68c6-4e4a-aa95-cb2a3c22362f" /> 
<img width="791" height="183" alt="image" src="https://github.com/user-attachments/assets/de5ed8a1-5e28-4d4f-854e-eeebae6019fd" /> 

Customer List Page

Create Customer Page

Customer Details Page

Multiple Addresses View



Notes

UI is intentionally kept simple as per assignment requirements.

Focus was placed on clean code, correct data flow, and proper API integration.

Conclusion

This project demonstrates a complete working flow of a customer management system using React, Node.js, and SQLite, covering all required CRUD operations with proper database relationships and navigation.
