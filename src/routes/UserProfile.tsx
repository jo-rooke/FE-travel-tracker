import IUser from "../interfaces/IUser";
import PageHeader from "../components/PageHeader";

export default function UserProfile(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  return (
    <>
      <PageHeader
        title="Your Profile"
        user={props.user}
        setUser={props.setUser}
      />
    </>
  );
}
