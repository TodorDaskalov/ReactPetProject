Pet Adoption Site

Overview

Pet Adoption Site is a web application designed to facilitate pet adoption. Users can explore pets available for adoption, post pets for adoption, and engage in discussions by commenting or asking questions about pets.

Project Details

Tech Stack: The project is developed using React with Vite as the build tool. JavaScript (JS) is primarily used, and JSX is employed for React components. Styling is done with CSS.

Key Components:

PetList: Displays a list of pets available for adoption.
Add Pet: Allows users to post pets for adoption.
Register/Login/Logout: Handles user authentication.
Routing: Utilizes React Router for navigation with route guards for authorization.
External API Integration: Fetches weather data from api.open-meteo.com.

Server and Database:

The project uses a development server provided by the course provider. A database is not employed; instead, practice data is served from the server.

Authentication and Authorization:

Authentication is managed using access tokens. Users can register, login, and logout.
Route guards are implemented to ensure authorized access to specific routes.

State Management:

React's built-in state management tools like useState and useContext are employed.

Error Handling:

The project features an ErrorBoundary component to catch errors.
Asynchronous code incorporates try-catch structures for error handling.
Services:

A services folder contains modules like authService, petService, and commentService to handle specific functionalities.

Contexts:

The contexts folder houses an AuthContext file.

Modals and Hooks:

Modal functionality is implemented, and a hooks folder contains custom hooks, including usePersistedState.

Utils:

A utils folder hosts utility functions like formatDateString and getCurrentHour.

Deployment:

The application has been successfully deployed on Firebase Hosting. Firebase CLI and Hosting were utilized for the deployment process.

Additional Notes
The project will be further enhanced with Redux implementation in the future.
External API api.open-meteo.com is integrated to fetch weather data.
