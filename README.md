# <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="w-14 h-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M1 22h4V11H1v11zm19-5h-7l-2.09-.73.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L8.97 11H7v9.02L14 22l8-3c-.01-1.1-.89-2-2-2zM14 1.5l-7 5V9h2l8.14 3.26C18.26 12.71 19 13.79 19 15h2V6.5l-7-5zm-.5 8.5h-1V9h1v1zm0-2h-1V7h1v1zm2 2h-1V9h1v1zm0-2h-1V7h1v1z"></path></svg>   ESTATERY - Real Estate Platform

## **Live Demo**

[https://real-estate-6251e.web.app](https://real-estate-6251e.web.app/)

## **Project Overview**

Estatery is a modern real estate platform designed to revolutionize the way people buy, sell, and rent properties. Our mission is to transform the real estate journey into an inspiring, empowering, and rewarding experience for everyone involved.

The platform offers a user-friendly interface where users can explore thousands of property listings, access detailed information about each property, and connect with real estate professionals for guidance. Whether you're searching for your dream home, looking to sell your property, or seeking the perfect rental, Estatery provides a seamless and personalized experience tailored to your needs.

## **Key Features**

### **1. User Authentication & Account Management**

- **Secure Sign Up & Login:** Robust user registration and authentication system using email and password
- **Social Login Integration:** Convenient login options via Google and GitHub accounts
- **Profile Management:** Personal profile customization and settings control
- **Error Handling:** Clear error notifications using toast messages

### **2. Property Exploration & Details**

- **Property Listings:** Browse through curated properties based on location
- **Detailed Property Pages:** Access comprehensive property information including:
  - High-quality images
  - Pricing and status (for sale/rent)
  - Specifications (bedrooms, bathrooms, area, year built)
  - Amenities and facilities
  - Location details and surrounding area information
  - Nearby points of interest (schools, hospitals, subway stations, airports, etc.)

### **3. User Experience Enhancements**

- **Interactive Image Slider:** Auto-transitioning image gallery on the homepage
- **Responsive Design:** Seamless adaptation to various devices (desktop, tablets, mobile)
- **Interactive Maps:** Property location visualization using interactive maps
- **Custom Error Page:** Dedicated error page for handling unexpected situations
- **User-friendly Navigation:** Intuitive header and footer for easy site navigation

### **4. Real Estate Services**

- **Property Insurance:** Protection and liability coverage options
- **Competitive Pricing:** Best price guarantees and market analysis
- **Low Commission Rates:** Affordable 2% commission structure
- **Virtual Tours:** Preview properties before physical visits

## **Technology Stack**

### **Frontend**

- **React**: JavaScript library for building the user interface
- **Vite**: Next-generation frontend tooling for faster development
- **React Router**: For declarative routing and navigation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **DaisyUI**: Component library for Tailwind CSS

### **UI Enhancements**

- **React Icons**: Icon library for visual elements
- **React Helmet**: Document head manager for dynamic page titles
- **React Lottie**: For engaging animations and loading states
- **React Toastify**: For attractive notification messages
- **Swiper**: Modern touch slider for image galleries
- **Animate.css**: For cross-browser animations

### **Maps & Visualization**

- **React Leaflet & Leaflet**: For interactive map integration

### **Authentication & Hosting**

- **Firebase**: For authentication, hosting, and database services

## **Getting Started**

### **Prerequisites**

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/estatery-real-estate.git
   cd estatery-real-estate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:

   ```
   VITE_apiKey=your-firebase-api-key
   VITE_authDomain=your-firebase-auth-domain
   VITE_projectId=your-firebase-project-id
   VITE_storageBucket=your-firebase-storage-bucket
   VITE_messagingSenderId=your-firebase-messaging-sender-id
   VITE_appId=your-firebase-app-id
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## **Project Structure**

```
src/
  ├── assets/          # Images, icons, and other static assets
  ├── components/      # Reusable components
  │   ├── Estate/        # Property card and listing components
  │   ├── Footer/        # Footer component
  │   ├── Header/        # Navigation bar
  │   ├── Hero/          # Hero section with image slider
  │   ├── Section/       # Various section components
  │   ├── Subscribe/     # Newsletter subscription component
  │   └── Title/         # Page title component
  ├── firebase/        # Firebase configuration and setup
  ├── layout/          # Page layouts
  │   ├── AboutUs/       # About us page
  │   ├── Contact/       # Contact page with interactive map
  │   ├── ErrorPage/     # Custom error page
  │   ├── EstateDetail/  # Property details page
  │   ├── Home/          # Home page
  │   ├── Login/         # Login page
  │   ├── Profile/       # User profile page
  │   ├── Services/      # Services page
  │   └── SignUp/        # Registration page
  ├── provider/        # Context providers
  ├── routers/         # Routing configuration
  ├── App.jsx          # Main application component
  ├── index.css        # Global styles
  └── main.jsx         # Application entry point
```

## **Future Enhancements**

- **Advanced Search & Filters**: Implement comprehensive search functionality with multiple filtering options
- **Favorites & Saved Searches**: Allow users to save favorite properties and search criteria
- **Mortgage Calculator**: Add tools to estimate mortgage payments
- **Agent Directory**: Create profiles for real estate agents with ratings and reviews
- **Messaging System**: Implement direct communication between users and property agents
- **Appointment Scheduling**: Enable scheduling of property viewings through the platform

## **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.

## **Contact**

For inquiries, please contact [faysalfahim3@gmail.com](mailto:faysalfahim3@gmail.com)
