import React from "react";
import Home from "./components/Home";
import Course from "./components/Course";
import {Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/course" element={<Course/>}/>
    </Routes>
    </>
  );
};

export default App;
