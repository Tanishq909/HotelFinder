# HotelFinder 🏨

An advanced full-stack web application for hotel bookings and property management.

Live demo at [hotelfinder-mb1d.onrender.com](https://hotelfinder-mb1d.onrender.com)


## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)


## Overview
HotelFinder provides a platform where users can:
- Browse and book hotel accommodations
- List their own properties for rent
- Manage bookings and listings
- Leave reviews and ratings
- View property locations on interactive maps


## Features
- 🔐 User Authentication & Authorization
  - Login/Signup system
  - Protected routes
  - Role-based access control
- 📝 Property Management
  - CRUD operations for listings
  - Image upload and storage
  - Location mapping
- 🏨 Booking System
  - Real-time availability checking
  - Booking management
  - Date range selection
- 📍 Maps Integration
  - Interactive property maps
  - Location-based search
  - Geocoding support
- 💬 Reviews & Ratings
  - Star rating system
  - User reviews
  - Owner responses
- 🎨 Modern UI/UX
  - Responsive design
  - Filter & search functionality
  - Interactive elements
  - Flash messages


## Tech Stack
### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- EJS Templates

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM


### APIs & Services
- Cloudinary (Image Storage)
- Maptiler (Maps)
- MongoDB Atlas (Database)
- Passport.js (Authentication)

### DevOps
- Git
- Render (Hosting)
- MongoDB Atlas (Cloud Database)


## Prerequisites
- Node.js (v20.17.0)
- MongoDB
- Git

## Installation
1. Clone repository
  ```sh
  git clone https://github.com/Tanishq909/HotelFinder.git
  cd HotelFinder
  ```

2. Install dependencies
  ```sh
     npm install
  ```

3. Set up environment variables
  ```sh
    cp .env.example .env
  ```

4. Start development server
   ```sh
      npm start
   ```

   Environment Variables
   ```sh
    CLOUD_NAME=your_cloudinary_name
    CLOUD_API_KEY=your_cloudinary_key
    CLOUD_API_SECRET=your_cloudinary_secret
    MAP_TOKEN=your_maptiler_token
    ATLASDB_URL=your_mongodb_url
    SECRET=your_session_secret
   ```

## Project Structure
```sh
HotelFinder/
├── controllers/       # Route controllers
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/           # Database models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/           # Express routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/            # EJS templates
│   ├── layouts/
│   ├── listings/
│   └── includes/
├── public/           # Static files
│   ├── css/
│   ├── js/
│   └── img/
├── utils/           # Helper functions
├── middleware.js    # Custom middleware
├── app.js          # Main application file
└── package.json    # Project metadata
```

## API Routes

### Listings
- **GET /listings** - View all listings  
- **POST /listings** - Create listing  
- **GET /listings/:id** - View single listing  
- **PUT /listings/:id** - Update listing  
- **DELETE /listings/:id** - Delete listing  

### Reviews
- **POST /listings/:id/reviews** - Add review  
- **DELETE /listings/:id/reviews/:reviewId** - Delete review  

### Users
- **GET /signup** - Signup form  
- **POST /signup** - Create account  
- **GET /login** - Login form  
- **POST /login** - Authenticate  
- **GET /logout** - Logout  

---

## Database Schema

### Listing Model
- **title** (String)  
- **description** (String)  
- **image** (Object)  
- **price** (Number)  
- **location** (String)  
- **reviews** (Array)  
- **owner** (ObjectId)  
- **geometry** (Object)  

### Review Model
- **comment** (String)  
- **rating** (Number)  
- **author** (ObjectId)  

### User Model
- **username** (String)  
- **email** (String)  
- **password** (String)  

## Contributing

1. Fork the repository  
2. Create a feature branch  
   ```bash
   git checkout -b feature/NewFeature
   ```
3. Commit changes
   ```bash
   git commit -m 'Add NewFeature'
   ```
4. Push to branch
   ```bash
   git push origin feature/NewFeature
   ```
5. Open pull request

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

**Tanishq Kumar**  

- **Portfolio**: [https://tanishqkumar.vercel.app/](https://tanishqkumar.vercel.app/)  
- **GitHub**: [@Tanishq909](https://github.com/Tanishq909)


    

   
