import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";
import HomePage from "./components/home/HomePage";
import Dashboard from "./components/dashboard/Dashboard";
import AboveFooter from "./components/aboveFooter/AboveFooter";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PublicRoute Component={HomePage} />} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
      </Routes>
      <AboveFooter />
    </div>
  );
}

export default App;
