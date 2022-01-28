import IUser from "../interfaces/IUser";
import PageHeader from "../components/PageHeader";
import safeAlertEmail from "../utils/safeAlertEmail";
import { useEffect, useState } from "react";
import getData from "../utils/getData";
import { baseUrl } from "../baseUrl";
import { ISafeAlert } from "../interfaces/IEmailTemplate";
import AllTrips from "../components/AllTrips";
import AllContacts from "../components/AllContacts";

export default function UserProfile(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  const initialValue = {
    contact_email: "",
    from_name: "",
    to_name: "",
    stop_name: "",
    stop_location_link: "",
    stop_last_seen: "",
    stop_phone: "",
    stop_email: "",
    trip_name: "",
    arr_or_dep: "",
  };

  const [lastSeen, setLastSeen] = useState<ISafeAlert>(initialValue);
  useEffect(() => {
    console.log("UE 1");
    props.user !== undefined &&
      getData(baseUrl + `/lastSeen/${props.user.id}`, setLastSeen);
    console.log("UE 2");
  }, [props.user]);
  console.log(lastSeen);
  return (
    <>
      <PageHeader
        title="Your Profile"
        user={props.user}
        setUser={props.setUser}
      />
      <button onClick={() => safeAlertEmail(lastSeen)}> I'm safe </button>
      <p>
        <em>Alerts all your saved contacts that you are safe</em>
      </p>
      <br />
      <AllTrips user={props.user} />
      <br />
      <AllContacts user={props.user} />
    </>
  );
}
