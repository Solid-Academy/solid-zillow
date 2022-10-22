import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./routes";
import HomePage from "./components/home/HomePage";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
      </Routes>
    </div>
  );
}

export default App;
