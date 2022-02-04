import { useState, useEffect } from "react";
import ITrip from "../interfaces/ITrip";
import IUser from "../interfaces/IUser";
import { baseUrl } from "../baseUrl";
import getData from "../utils/getData";
import formatDate from "../utils/formatDate";
import { Link } from "react-router-dom";

export default function AllTrips(props: {
  user: IUser | undefined;
  individualTrip: ITrip | undefined;
  setIndividualTrip: React.Dispatch<React.SetStateAction<ITrip | undefined>>;
}): JSX.Element {
  const [allTrips, setAllTrips] = useState<ITrip[]>([]);
  useEffect(() => {
    props.user !== undefined &&
      getData(baseUrl + `/trips/${props.user.id}`, setAllTrips);
  }, [props.user]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">My Trips</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allTrips?.map((trip) => (
            <tr key={trip.id}>
              <td>
                <Link
                  to={{
                    pathname: "/view-trip",
                  }}
                  onClick={() => props.setIndividualTrip(trip)}
                >
                  {trip.name}
                </Link>
              </td>

              <td>
                {trip.dateRange[0]
                  ? `${formatDate(
                      trip.dateRange[0].exp_arrival
                    )} - ${formatDate(trip.dateRange[1].exp_arrival)}`
                  : "No dates yet"}
              </td>
              <td>{trip.stops[0].count}</td>
              <td>
                {trip.contacts.length > 0
                  ? `Shared with
                ${trip.contacts.map((contact) => ` ${contact.name},`)}`
                  : "No contacts yet"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tab-index="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
