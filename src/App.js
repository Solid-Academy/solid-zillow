import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import { PrivateRoute } from "./routes";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </div>
  );
}

export default App;
