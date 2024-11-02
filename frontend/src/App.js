import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" exact element={<Users />}></Route>
            <Route
              path="/:userId/places"
              exact
              element={<UserPlaces />}
            ></Route>
            <Route path="/places/new" exact element={<NewPlace />}></Route>
            <Route path="/places/:placeId" element={<UpdatePlace />}></Route>
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
