import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";


const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Navbar/>
      
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* <Route path="*" element={<h1>Not Found</h1>} /> */}

        {/* <Route path="*" element={<LoginPage/>} /> */}

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default MainApp;
