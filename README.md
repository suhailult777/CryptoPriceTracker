# Cryptocurrency Price Tracker

A real-time cryptocurrency price tracker built with React, Redux Toolkit, and Express.js.

## Live Demo

The application is deployed and can be accessed at:
[https://crypto-price-tracker-k9e7dv7l1-suhailult777s-projects.vercel.app/](https://crypto-price-tracker-k9e7dv7l1-suhailult777s-projects.vercel.app/)

### Video Demo

[![Cryptocurrency Price Tracker Demo](https://img.youtube.com/vi/l9WIsdmoeks/0.jpg)](https://youtu.be/l9WIsdmoeks)

## Features

- Real-time cryptocurrency price tracking
- Price change visualization
- Responsive design
- Favorites functionality
- Search and filter capabilities

## Tech Stack

- React for the frontend UI
- Redux Toolkit for state management
- Express.js for the backend
- Tailwind CSS for styling
- Vercel for deployment

## Architecture

### Frontend Architecture

The application follows a modern React architecture with the following key components:

1. **Redux Store**: Central state management using Redux Toolkit

   - Slices for different data domains (cryptocurrencies, UI state)
   - Thunks for asynchronous operations
   - Selectors for efficient data access

2. **Component Structure**:

   - Container components connected to Redux
   - Presentational components for UI rendering
   - Custom hooks for shared logic

3. **Data Flow**:
   - Unidirectional data flow from Redux store to components
   - Actions dispatched to update state
   - Selectors used to access and filter data

### Backend Architecture

The server is built with Express.js and provides:

1. **API Routes**: Endpoints for data access
2. **Static File Serving**: Serves the React frontend in production
3. **Middleware**: For request processing and error handling

### Simulation Logic

The application uses a price simulation algorithm that:

1. Generates realistic price movements
2. Updates at regular intervals
3. Maintains historical data for trends
4. Simulates market volatility

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```
5. Start the production server:
   ```
   npm start
   ```

## Deployment

This project is deployed on Vercel. To deploy your own version:

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
2. Login to Vercel:
   ```
   vercel login
   ```
3. Deploy to production:
   ```
   vercel deploy --prod
   ```
