import "./App.css";
import Dashboard from "./components/Dashboard";
import SandboxWindow from "./components/SandboxWindow";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="problems/two-sum" element={<SandboxWindow />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;