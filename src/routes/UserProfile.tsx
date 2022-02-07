import IUser from "../interfaces/IUser";
import PageHeader from "../components/PageHeader";
import safeAlertEmail from "../utils/safeAlertEmail";
import { useEffect, useState } from "react";
import getData from "../utils/getData";
import { baseUrl } from "../baseUrl";
import { ISafeAlert } from "../interfaces/IEmailTemplate";
import AllTrips from "../components/AllTrips";
import AllContacts from "../components/AllContacts";
import ITrip from "../interfaces/ITrip";

export default function UserProfile(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  individualTrip: ITrip | undefined;
  setIndividualTrip: React.Dispatch<React.SetStateAction<ITrip | undefined>>;
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
    props.user !== undefined &&
      getData(baseUrl + `/lastSeen/${props.user.id}`, setLastSeen);
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
      <div className="tripsComponent">
        <AllTrips
          user={props.user}
          individualTrip={props.individualTrip}
          setIndividualTrip={props.setIndividualTrip}
        />
        <div
          className="modal fade"
          id="addTrip"
          tab-index="-1"
          aria-labelledby="addTripLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addTripLabel">
                  Add a trip
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Body here</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="contactsComponent">
        <AllContacts user={props.user} />
        <div
          className="modal fade"
          id="addContact"
          tab-index="-1"
          role="dialog"
          aria-labelledby="addContactLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addContactLabel">
                  Add a Contact
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">Modal body here</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
