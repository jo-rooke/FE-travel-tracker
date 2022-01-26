import LogIn from "../components/LogIn";
import IUser from "../interfaces/IUser";

export default function LogInPage(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  allUsers: IUser[];
}): JSX.Element {
  return (
    <div>
      <LogIn
        user={props.user}
        setUser={props.setUser}
        allUsers={props.allUsers}
      />
    </div>
  );
}
