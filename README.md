# RPL PRIMA Web Application

# Overview

Welcome to the GitHub repository for the RPL PRIMA web application. This project is a comprehensive web solution for RPL PRIMA, a company specializing in providing offline driving training services. Our application offers an intuitive interface for customers to explore the company's services and register for driving classes, and a robust backend for admins and owners to manage company data and activities.

## Features

### For Customers

- **Company Profile** and Services Overview: A detailed landing page showcasing RPL PRIMA's services, including various driving class packages.
- **Student Registration:** A user-friendly form allowing prospective students to register and enroll in driving classes.

### For Admin and Owner

- **Data Management:** Both admins and owners have access to tools for managing company data.
- **Secure Login:** Admin accounts are created by the owner, ensuring a secure management system.
- **Change Password:** Provide flexibility for both admins and owners to change their password
- **Remember Me:** Both admin and owner accounts have access to a "Remember Me" option for easier and faster subsequent logins.

### Tech Stack

**Framework:** NEXT.JS, TailwindCSS

**ORM:** Prisma

**Database:** Supabase

**Testing:** Jest, Postman

# Getting Started

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: This project requires Node.js version 20.0.0 or higher. To check your Node.js version, run `node -v` in your terminal. If you need to update or install Node.js, visit [Node.js Download](https://nodejs.org/en/download/).
- **Cloud Database Access**: Ensure you have access to a cloud database. This project uses Supabase as the cloud database. Set up an account or log in to your existing Supabase account to connect the application to the database.

## Installation

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

First of all you need to clone this project or **donwload the file**

```bash
  git clone https://github.com/TimothySubekti0322/Init-RPL-K01-G14
```

Go to the project directory

```bash
  cd Path/to/Init-RPL-K01-G14
```

Then install all the dependencies by simply run this code on the terminal

```bash
  npm install
```

Next, Create a .env file that contains your Database URL connection and your personal JWT SECRET. Copy this code below, paste it on your .env file, change **YOUR_DATABASE_CONNECTION_URL** with your own database url connection and **YOUR_JWT_SECRET_KEY_HERE** with your JWT Secret for encryption

```bash
DATABASE_URL=YOUR_DATABASE_CONNECTION_URL
JWT_SECRET=YOUR_JWT_SECRET
NODE_ENV="development"
```

Next, in Schema.prisma , you could change db provider to anything you want. but it would be recomended if you are using postgresql

Then, Run migration to create database in your local database that using this command bellow

```bash
npx prisma migrate dev
```

Then run this command below to filled initial data in your database

```bash
npx prisma db seed
```

then to run the website locally , you need to run this command below

```bash
  npm run start
```

Now you can access the server in http://localhost:3000/

## Route

**customer** : http://localhost:3000/

**Owner/Admin** : http://localhost:3000/auth/signin

## Notes

Owner Account

**email :** owner@gmail.com

**password :** owner




# Use Cases
The RPL Prima web application implements the following use cases:
1. *View Class Packages* PIC: Nadira (18221059)
  ![landing page](doc/layout/1.1.jpg)

2. *Register as Student* PIC: Nadira (18221059)
  ![register page](doc/layout/1.2.jpg)

3. *Log In* PIC: Timothy (18221063)
  ![log in page](doc/layout/2.1.jpg)

4. *View Dashboard* PIC: Timothy (18221063)
  ![dashboard](doc/layout/2.0.jpg)
   
5. *Manage Classes* PIC: Carissa (18221093)
    ![class](doc/layout/2.2.1.jpg)
    ![class](doc/layout/2.2.2.jpg)
    ![class](doc/layout/2.2.3.jpg)
    ![class](doc/layout/2.2.4.jpg)
   
6. *Manage Instructors. PIC: Carissa (18221093)
    ![instructor](doc/layout/2.3.1.jpg)
    ![instructor](doc/layout/2.3.2.jpg)
    ![instructor](doc/layout/2.3.3.jpg)
    ![instructor](doc/layout/2.3.4.jpg)
    
7. *Manage Students* PIC: Nadine (18221081)
    ![dashboard](doc/layout/2.4.1.jpg)
    ![dashboard](doc/layout/2.4.2.jpg)
    ![dashboard](doc/layout/2.4.3.jpg)

5. *Manage Users* PIC: Nadine (18221081)
   ![user](doc/layout/2.5.1.jpg)
   ![user](doc/layout/2.5.2.jpg)
   ![user](doc/layout/2.5.3.jpg)
   ![user](doc/layout/2.5.4.jpg)

9. *Manage Vehicles* PIC: Jodi (18221147)
10. *Manage Vehicle Status* PIC: Jodi (18221147)
    ![vehicle](doc/layout/2.6.1.jpg)
    ![vehicle](doc/layout/2.6.2.jpg)
    ![vehicle](doc/layout/2.6.3.jpg)
    ![vehicle](doc/layout/2.6.4.jpg)
    
11. *Change Password* PIC: Timothy (18221063)
    ![dashboard](doc/layout/2.7.jpg)

12. *Manage Errors* PIC: Nadira (18221059)
    ![errors](doc/layout/3.1.jpg)
    ![errors](doc/layout/3.2.jpg)

    


# Database
Here are the details of the database used in the RPL Prima web application.
1. Class - manages the different types of classes offered by RPL Prima. The Class
```
   - id: int
   - price: int
   - duration: int
   - session: int
   - transmission: string
   - vehicle type: string
```
2. Instructor - manages the details of the different instructors registered in RPL Prima.
```
   - id: int
   - name: string
   - nik: string
   - address: string
   - phone: string
```
3. Student - Student manages all the registrants, current students, and past students that have passed the driving course.
```
   - id: number
   - name: string
   - classId: int
   - phone: string
   - address: string
   - status: string
```
4. User - manages the accounts for the admins and owners of RPL Prima.
```
   - id: int
   - email: string
   - password: string
   - phone: string
   - location: string
   - role: string
```
5. Vehicle - manages the details of each vehicle and its status of availability.
```
    - id: int
    - plate: string
    - vehicleType": string
    - transmission: string
    - distance: int
    - lastService: date
```
