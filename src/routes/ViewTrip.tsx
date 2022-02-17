import IUser from "../interfaces/IUser";
import PageHeader from "../components/PageHeader";
import ITrip from "../interfaces/ITrip";
import Stop from "../components/Stop";
import IStop from "../interfaces/IStop";
import { useState, useEffect } from "react";
import getData from "../utils/getData";
import { baseUrl } from "../baseUrl";

export default function ViewTrip(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  individualTrip: ITrip | undefined;
  setIndividualTrip: React.Dispatch<React.SetStateAction<ITrip | undefined>>;
}): JSX.Element {
  const [allStops, setAllStops] = useState<IStop[] | undefined>();
  useEffect(() => {
    props.individualTrip !== undefined &&
      getData(baseUrl + `/stops/${props.individualTrip.id}`, setAllStops);
  }, [props.individualTrip]);
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
      <button className="btn btn-success me-2 btn-sm">Edit trip</button>
      <br />
      {allStops?.map((stop) => (
        <Stop
          key={stop.id}
          stop={stop}
          user={props.user}
          setAllStops={setAllStops}
        />
      ))}
    </>
  );
}
