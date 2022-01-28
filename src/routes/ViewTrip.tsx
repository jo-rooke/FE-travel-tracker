import IUser from "../interfaces/IUser";
import PageHeader from "../components/PageHeader";

export default function ViewTrip(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  tripId: number;
  tripName: string;
}): JSX.Element {
  return (
    <>
      <PageHeader
        title={props.tripName}
        user={props.user}
        setUser={props.setUser}
      />
      <button className="btn btn-success">Edit trip</button>
    </>
  );
}
