import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";
import Dashboard from "./components/dashboard/Dashboard";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PublicRoute Component={HomePage} />} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
      </Routes>
    </div>
  );
}

export default App;
