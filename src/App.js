import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

// import { useCookies } from "react-cookie";
// import { useEffect } from 'react';

function App() {
  // const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  // useEffect(() => {
  //   setCookie('access_token','')
  // },[])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
