import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import { PrivateRoute, PublicRoute } from "./routes";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PublicRoute Component={HomePage} />} />
        <Route exact path="/help" element={<PublicRoute Component={HelpPage} />} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
      </Routes>
    </div>
  );
}

export default App;
