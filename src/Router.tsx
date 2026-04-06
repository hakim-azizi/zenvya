import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// Import functions to configure routing with React Router
import App from "./App.tsx";
import Home from "./pages/Home.tsx";

// Configure the application's routing structure
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Define the base route with the App component as the layout */}
      <Route index element={<Home />} />
      {/* Define the default (index) route to render the Home page */}
    </Route>,
  ),
);
