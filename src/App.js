import "./App.css";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="problems/two-sum" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;