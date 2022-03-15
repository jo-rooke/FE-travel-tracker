import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import IContact from "../interfaces/IContact";
import { IStopAdding, IStopSubmitted } from "../interfaces/IStop";
import IUser from "../interfaces/IUser";
import getData from "../utils/getData";
import { baseUrl } from "../reference_variables/baseUrl";
import handleAddTrip from "../utils/handleAddTrip";
import Stop from "../components/Stop";
import { INewTrip, initialNewTrip } from "../interfaces/INewTrip";
import { handleClickContact } from "../utils/handleClickContact";
import handleAddStop from "../utils/handleAddStop";
import AddStop from "../components/AddStop";
import { initialNewCompanion } from "../interfaces/IStop";
import ITrip from "../interfaces/ITrip";
import { Link } from "react-router-dom";

export const date: Date = new Date();

export default function AddTrip(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  trip?: ITrip | undefined;
}): JSX.Element {
  const initialNewStop = {
    trip: 0,
    name: "",
    location_link: "",
    new_arrival: date,
    new_departure: date,
    best_email: "",
    best_phone: "",
    details: "",
    companions: [initialNewCompanion],
  };

  const [newTrip, setNewTrip] = useState<INewTrip>(initialNewTrip);
  const [addedStops, setAddedStops] = useState<IStopSubmitted[] | undefined>();
  const [newStop, setNewStop] = useState<IStopAdding>(initialNewStop);
  const [allContacts, setAllContacts] = useState<IContact[]>([]);

  useEffect(() => {
    props.user &&
      getData(baseUrl + `/contacts/${props.user.id}`, setAllContacts);
  }, [props.user]);

  useEffect(() => {
    if (props.trip && props.user) {
      getData(baseUrl + `/stops/${props.trip.id}`, setAllContacts);
      const contactArr: IContact[] = [];
      for (const contact of props.trip.contacts) {
        contactArr.push({
          id: 0,
          contact_of: props.user.id,
          name: contact.name,
          email: "",
          activated: true,
        });
      }
      setNewTrip({
        tripName: props.trip.name,
        contacts: contactArr,
        nameSubmitted: true,
      });
    }
  }, [props.user, props.trip]);

  useEffect(() => {
    newStop.trip && getData(baseUrl + `/stops/${newStop.trip}`, setAddedStops);
  }, [newStop]);

  return (
    <>
      <PageHeader
        title="Add a trip"
        user={props.user}
        setUser={props.setUser}
      />
      <div className="d-flex justify-content-center mx-5">
        {newTrip.nameSubmitted === false ? (
          <div className="col">
            <h2>Create a new trip</h2>
            <div className="form-group my-1">
              <label htmlFor="tripName">Trip Name</label>
              <input
                className="form-control"
                value={newTrip.tripName}
                id="tripName"
                name="resource_name"
                onChange={(e) =>
                  setNewTrip({ ...newTrip, tripName: e.target.value })
                }
              ></input>
            </div>
            <div data-cy="contacts">
              <p>Contacts:</p>
              {allContacts.map((contact) => (
                <button
                  className={
                    newTrip.contacts.includes(contact)
                      ? "btn btn-primary px-2 btn-sm"
                      : "btn btn-outline-primary px-2 btn-sm"
                  }
                  type="button"
                  key={contact.id}
                  name="contacts"
                  onClick={() =>
                    handleClickContact(contact, newTrip, setNewTrip)
                  }
                >
                  {contact.name}
                </button>
              ))}
            </div>{" "}
            <br />
            <button
              className="btn btn-success me-2 btn-sm"
              onClick={() => {
                newTrip.tripName === ""
                  ? window.alert("Please add a title for your trip")
                  : props.user &&
                    handleAddTrip(
                      props.user,
                      setNewStop,
                      newStop,
                      setAddedStops,
                      setNewTrip,
                      newTrip
                    );
              }}
            >
              Get Started
            </button>
          </div>
        ) : (
          <div className="col">
            <h2>{newTrip.tripName}</h2>
            Shared with{" "}
            {newTrip.contacts.map((contact) => (
              <button className="btn btn-primary btn-sm" key={contact.name}>
                {contact.name}
              </button>
            ))}
            <br />
            {addedStops?.length === 0 ? (
              <>
                No stops added yet <br />
                <br />
              </>
            ) : (
              addedStops?.map((stop) => (
                <Stop stop={stop} user={props.user} key={stop.name} />
              ))
            )}
            {/* ==================================MODAL STARTS===================================== */}
            <div
              className="modal fade"
              id="addStop"
              tab-index="-1"
              role="dialog"
              aria-labelledby="addStopLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addStopLabel">
                      Add a Stop
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setNewStop(initialNewStop)}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <AddStop newStop={newStop} setNewStop={setNewStop} />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary me-2 btn-sm"
                      data-dismiss="modal"
                      onClick={() => setNewStop(initialNewStop)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary me-2 btn-sm"
                      data-dismiss="modal"
                      onClick={() =>
                        handleAddStop(
                          newStop,
                          setNewStop,
                          initialNewStop,
                          newTrip
                        )
                      }
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ===================================MODAL END ============================================== */}
            <button
              className="btn btn-outline-primary btn-sm"
              data-toggle="modal"
              data-target="#addStop"
            >
              Add a stop
            </button>
            <br />
            <br />
            <Link to="/profile">
              <button className="btn btn-success me-2"> Submit </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
