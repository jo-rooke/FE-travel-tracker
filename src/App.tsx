import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import AddTrip from "./routes/AddTrip";
import LogInPage from "./routes/LogInPage";
import UserProfile from "./routes/UserProfile";
import ViewTrip from "./routes/ViewTrip";
import IUser from "./interfaces/IUser";
import getFullUser from "./utils/getFullUser";
import { baseUrl } from "./baseUrl";
import getData from "./utils/getData";

function App(): JSX.Element {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [user, setUser] = useState<IUser | undefined>();

  useEffect(() => {
    getData(baseUrl + "/users", setAllUsers);
  }, []);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("userId");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(getFullUser(allUsers, foundUser));
    }
  }, [allUsers]);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LogInPage user={user} setUser={setUser} allUsers={allUsers} />
            }
          />
          <Route path="/profile" element={<UserProfile user={user} />} />
          <Route path="/view-trip" element={<ViewTrip />} />
          <Route path="/add-trip" element={<AddTrip />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
