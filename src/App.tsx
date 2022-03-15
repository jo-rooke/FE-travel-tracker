import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import AddTrip from "./routes/AddTrip";
import LogInPage from "./routes/LogInPage";
import UserProfile from "./routes/UserProfile";
import ViewTrip from "./routes/ViewTrip";
import IUser from "./interfaces/IUser";
import getFullUser from "./utils/getFullUser";
import { baseUrl } from "./reference_variables/baseUrl";
import getData from "./utils/getData";
import ITrip from "./interfaces/ITrip";

function App(): JSX.Element {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [user, setUser] = useState<IUser | undefined>();
  const [individualTrip, setIndividualTrip] = useState<ITrip | undefined>();

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
    <div className="p-5">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LogInPage user={user} setUser={setUser} allUsers={allUsers} />
            }
          />
          <Route
            path="/profile"
            element={
              user !== undefined && (
                <UserProfile
                  user={user}
                  setUser={setUser}
                  individualTrip={individualTrip}
                  setIndividualTrip={setIndividualTrip}
                />
              )
            }
          />
          <Route
            path="/view-trip"
            element={
              <ViewTrip
                user={user}
                setUser={setUser}
                individualTrip={individualTrip}
                setIndividualTrip={setIndividualTrip}
              />
            }
          />
          <Route
            path="/add-trip"
            element={
              user !== undefined && <AddTrip user={user} setUser={setUser} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
