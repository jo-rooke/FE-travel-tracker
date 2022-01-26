import IUser from "../interfaces/IUser";
import { Link } from "react-router-dom";

export default function LogIn(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  allUsers: IUser[];
}): JSX.Element {
  return (
    <>
      {props.user !== undefined && (
        <div className="row">
          <p>Hello, {props.user.name}</p>
          <Link to="/">
            <button
              onClick={() => {
                props.setUser(undefined);
                localStorage.removeItem("userId");
              }}
            >
              Log out
            </button>
          </Link>
        </div>
      )}
    </>
  );
}