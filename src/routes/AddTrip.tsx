import PageHeader from "../components/PageHeader";
import IUser from "../interfaces/IUser";

export default function AddTrip(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  return (
    <>
      <PageHeader
        title="Add a trip"
        user={props.user}
        setUser={props.setUser}
      />
    </>
  );
}
