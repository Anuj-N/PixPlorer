import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" exact element={<Users />}></Route>
            <Route path="/places/new" exact element={<NewPlace />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
