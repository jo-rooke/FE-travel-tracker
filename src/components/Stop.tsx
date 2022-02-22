import { IStopSubmitted } from "../interfaces/IStop";
import IUser from "../interfaces/IUser";
import handleCheckInOut from "../utils/handleCheckInOut";
import sanitiseTimestamp from "../utils/sanitiseTimestamp";

export default function Stop(props: {
  stop: IStopSubmitted;
  user: IUser | undefined;
  setAllStops: React.Dispatch<
    React.SetStateAction<IStopSubmitted[] | undefined>
  >;
}): JSX.Element {
  return (
    <>
      <div className="card p-2 my-3">
        <div className="card-body">
          <h3 className="card-title">
            {props.stop.name} <a href={props.stop.location_link}>🔗</a>
          </h3>
          {props.stop.actual_arrival === null ? (
            <>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onClick={() =>
                  handleCheckInOut(props.stop.id, "arrived", props.setAllStops)
                }
                defaultChecked={!props.stop.actual_arrival === null}
              />
              <p>
                {/* Expected arrival: {sanitiseTimestamp(props.stop.exp_arrival)}{" "} */}
              </p>
            </>
          ) : (
            <p>Arrived at {sanitiseTimestamp(props.stop.actual_arrival)}</p>
          )}
          {props.stop.actual_departure === null ? (
            <>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                onClick={() =>
                  handleCheckInOut(
                    props.stop.id,
                    "departure",
                    props.setAllStops
                  )
                }
                defaultChecked={!props.stop.actual_arrival === null}
              />
              <p>
                Expected departure:{" "}
                {/* {sanitiseTimestamp(props.stop.exp_departure)} */}
              </p>
            </>
          ) : (
            <p>Departed at {sanitiseTimestamp(props.stop.actual_departure)}</p>
          )}
          <p>
            Best contact: {props.stop.best_email} (email),{" "}
            {props.stop.best_phone} (phone)
          </p>
          <p>Companions:</p>
          {props.stop.companions.map((companion) => (
            <li key={companion.name}>
              {companion.name} ({companion.contact}){" "}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
