import IUser from "../interfaces/IUser";
import PageHeader from "../components/PageHeader";
import ITrip from "../interfaces/ITrip";
import Stop from "../components/Stop";
import { IStopSubmitted } from "../interfaces/IStop";
import { useState, useEffect } from "react";
import getData from "../utils/getData";
import { baseUrl } from "../reference_variables/baseUrl";
import { Link } from "react-router-dom";

export default function ViewTrip(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  individualTrip: ITrip | undefined;
  setIndividualTrip: React.Dispatch<React.SetStateAction<ITrip | undefined>>;
}): JSX.Element {
  const [allStops, setAllStops] = useState<IStopSubmitted[] | undefined>();
  useEffect(() => {
    props.individualTrip !== undefined &&
      getData(baseUrl + `/stops/${props.individualTrip.id}`, setAllStops);
  }, [props.individualTrip]);
  const obj = { pathname: "/add-trip", trip: props.individualTrip };
  return (
    <>
      <PageHeader
        title="View a trip"
        user={props.user}
        setUser={props.setUser}
      />
      <h1>
        {" "}
        {props.individualTrip !== undefined && props.individualTrip.name}
      </h1>
      {props.individualTrip?.contacts.length === 0 ? (
        "Not shared with any contacts"
      ) : (
        <>
          Shared with:{" "}
          {props.individualTrip?.contacts.map((contact) => (
            <button className="btn btn-primary p-2 btn-sm" key={contact.name}>
              {contact.name}
            </button>
          ))}
        </>
      )}

      <br />
      <Link to={obj}>
        <button className="btn btn-success me-2 btn-sm">Edit trip</button>
      </Link>
      <br />
      <br />
      {allStops?.length === 0
        ? "No stops yet"
        : allStops?.map((stop) => (
            <Stop
              key={stop.id}
              stop={stop}
              user={props.user}
              setAllStops={setAllStops}
              tripId={props.individualTrip?.id}
            />
          ))}
    </>
  );
}
