import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import ApiState from "./context/apiKey/ApiState";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthState from "./context/authentication/AuthState";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Router>
        <ApiState>
          <AuthState>
            <NoteState>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<Signup />}></Route>
                <Route exact path="/main" element={<Main />}></Route>
              </Routes>
            </NoteState>
          </AuthState>
        </ApiState>
      </Router>
    </>
  );
}

export default App;
