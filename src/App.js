import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ApiState from "./context/apiKey/ApiState";
import Addnote from "./components/Addnote";

function App() {
  return (
    <>
      <ApiState>
        <NoteState>
          <Router>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/addnote" element={<Addnote />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<Signup />}></Route>
              </Routes>
            </div>
          </Router>
        </NoteState>
      </ApiState>
    </>
  );
}

export default App;
