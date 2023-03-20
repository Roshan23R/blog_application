import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/setting";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/posts" element={<Home />}/>
          <Route path="/register" element={user ? <Home/> : <Register />}/>
            <Route path="/login" element={user ? <Home /> : <Login />}/>
          <Route path="/post/:id" element={<Single />}/>
          <Route path="/write" element={user ? <Write /> : <Login />}/>
          <Route path="/settings" element={user ? <Settings /> : <Login />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
