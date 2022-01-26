import IUser from "../interfaces/IUser";
import { Link } from "react-router-dom";
import getFullUser from "../utils/getFullUser";

export default function LogIn(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  allUsers: IUser[];
}): JSX.Element {
  return (
    <>
      <label>Login: </label>
      <select
        defaultValue={""}
        onChange={(e) => {
          props.setUser(getFullUser(props.allUsers, parseInt(e.target.value)));
          localStorage.setItem("userId", e.target.value);
        }}
      >
        <option value="" disabled>
          Please select your name
        </option>
        {props.allUsers.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <Link to="/profile">
        <button>Submit</button>
      </Link>
    </>
  );
}
