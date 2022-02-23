import IUser from "../interfaces/IUser";
import { Link } from "react-router-dom";

export default function LogOut(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  return (
    <>
      {props.user !== undefined && (
        <div className="container-fluid ">
          <div className="row">
            <p className="col my-auto align-items-end">
              Hello, {props.user.name}{" "}
            </p>{" "}
            <Link to="/">
              <button
                className="btn btn-danger p-2 me-2 btn-sm col my-auto align-items-center"
                onClick={() => {
                  props.setUser(undefined);
                  localStorage.removeItem("userId");
                }}
              >
                Log out
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
