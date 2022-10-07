import "./App.css";
import Header from "./components/header/Header";
import { Routes } from "react-router-dom";
import Main from "./components/header/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Routes> </Routes>
    </div>
  );
}

export default App;
