import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
import UserDashboard from "./components/userDashboard";
import AdminDashboard from "./components/adminDashboard";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage/>}></Route>
        <Route exact path="/login" element={<LoginPage/>}></Route>
        <Route exact path="/signup" element={<SignupPage/>}></Route>
        <Route exact path="/userDashboard" element={<UserDashboard/>}></Route>
        <Route exact path="/adminDashboard" element={<AdminDashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
