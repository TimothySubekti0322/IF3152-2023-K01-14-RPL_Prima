# RPL PRIMA Web Application

## Overview

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

## Tech Stack

**Framework:** NEXT.JS, TailwindCSS

**ORM:** Prisma

**Database:** Supabase

**Testing:** Jest, Postman

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: This project requires Node.js version 20.0.0 or higher. To check your Node.js version, run `node -v` in your terminal. If you need to update or install Node.js, visit [Node.js Download](https://nodejs.org/en/download/).
- **Cloud Database Access**: Ensure you have access to a cloud database. This project uses Supabase as the cloud database. Set up an account or log in to your existing Supabase account to connect the application to the database.

### Installation

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
