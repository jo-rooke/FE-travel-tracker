import IUser from "../interfaces/IUser";
import LogOut from "./LogOut";
import { Link } from "react-router-dom";

export default function PageHeader(props: {
  title: string;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  return (
    <>
      <div className="container-fluid align-items-center">
        <div className="row justify-content-around p-3">
          <div className="col-5 text-center">
            <h1>{props.title}</h1>
          </div>
          <div className="col-4 my-auto text-center">
            <LogOut user={props.user} setUser={props.setUser} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4 text-center">
            <Link to="/" title="Return to logIn page">
              <p>Return to Log In</p>
            </Link>
          </div>
          <div className="col-4 text-center">
            <Link to="/add-trip" title="Go to add a resource">
              <p>Add a Trip</p>
            </Link>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
