import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import ApiState from "./context/apiKey/ApiState";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <ApiState>
        <NoteState>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
          </Router>
        </NoteState>
      </ApiState>
    </>
  );
}

export default App;
