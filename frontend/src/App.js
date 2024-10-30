import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Users />}></Route>
          <Route path="/places/new" exact element={<NewPlace />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
