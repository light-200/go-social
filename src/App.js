import "./style/App.css";
import { Feed } from "./pages/feed";
import Navbar from "./components/navbar";
import Signup from "./pages/Signup";
import { Routes, Route, useParams } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path=":user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
