import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";
import Dashboard from "./components/dashboard/Dashboard";
import HomePage from "./pages/HomePage";
import SearchSection from "./pages/SearchSection/SearchSection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PublicRoute Component={HomePage} />} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
        <Route path="/SearchSection" element={<SearchSection />} />
      </Routes>
    </div>
  );
}

export default App;
