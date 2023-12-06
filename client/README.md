Project Documentation
Project Overview
This project is a Pet Adoption site, allowing users to adopt pets or post pets for adoption. Users can interact with pets through comments and questions. The application is built using React with Vite as the development server.

Project Architecture
The project follows a React app architecture. The main components include:

PetList: Displays a list of pets available for adoption.
Add Pet: Allows users to post pets for adoption.
Register: User registration component.
Login: User login component.
Logout: Handles user logout.
Additional components for pet details, comments, and more.
Technology Stack
The technology stack includes:

JavaScript (JS)
JSX for React components
CSS for styling
React with Vite for development
Database Structure
The project uses a practice server provided by SoftUni. It doesn't involve a traditional database.

Authentication and Authorization
Authentication and authorization are handled using access tokens. Users need to log in to perform certain actions, ensuring secure access to features.

Routing and Navigation
Routing and navigation are implemented using React Router's Routes and Route components. Route guards are employed to control access to certain pages.

State Management
State management is primarily handled using React's built-in state management features like useState and useContext. Although there is a future plan for Redux implementation, it's not currently integrated.

APIs and Services
The project interacts with the api.open-meteo.com API to retrieve weather information, including the current temperature, max/min temperature, and weather predictions for the next 3 hours.

Error Handling
Error handling is implemented through the usage of try-catch structures for asynchronous code. Additionally, an ErrorBoundary is in place to capture errors within the application.

Project Structure
The project structure includes:

src folder
components folder: Houses all React components along with their respective CSS files.
contexts folder: Contains AuthContext for handling authentication context.
modals folder: Manages modal components.
hooks folder: Contains a custom hook, usePersistedState.
services folder: Houses service files for authService, petService, and commentService.
utils folder: Holds utility functions like formatDateString and getCurrentHour.
App component: The main component orchestrating the application.
Deployment
The project is planned for deployment on Firebase.