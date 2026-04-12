import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// Import functions to configure routing with React Router
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import AiConsulting from "./pages/AiConsulting.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Finance from "./pages/Finance.tsx";
import Habits from "./pages/Habits.tsx";
import Health from "./pages/Health.tsx";
import PastTense from "./pages/PastTense.tsx";

// Configure the application's routing structure
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Define the base route with the App component as the layout */}
      <Route index element={<Home />} />
      {/* Define the default (index) route to render the Home page */}
      <Route path="ai-consulting" element={<AiConsulting />} />
      {/* Define the default (index) route to render the Home page */}
      <Route path="dashboard" element={<Dashboard />} />
      {/* Define the default (index) route to render the Home page */}
      <Route path="finance" element={<Finance />} />
      {/* Define the default (index) route to render the Home page */}
      <Route path="habits" element={<Habits />} />
      {/* Define the default (index) route to render the Home page */}
      <Route path="health" element={<Health />} />
      {/* Define the default (index) route to render the Home page */}
      <Route path="past-tense" element={<PastTense />} />
      {/* Define the default (index) route to render the Home page */}
    </Route>,
  ),
);
