import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import IContact from "../interfaces/IContact";
import { ICompanion, IStopBasic } from "../interfaces/IStop";
import IUser from "../interfaces/IUser";
import getData from "../utils/getData";
import { baseUrl } from "../baseUrl";
import handleAddTrip from "../utils/handleAddTrip";
import Stop from "../components/Stop";
import { INewTrip, initialNewTrip } from "../interfaces/INewTrip";
import { handleClickContact } from "../utils/handleClickContact";
import handleAddStop from "../utils/handleAddStop";
import DateTimePicker from "react-datetime-picker";

export const date: Date = new Date();

export default function AddTrip(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  const initialNewCompanion = {
    name: "",
    contact: "",
  };

  const initialNewStop = {
    trip: 0,
    name: "",
    location_link: "",
    exp_arrival: date,
    exp_departure: date,
    best_email: "",
    best_phone: "",
    details: "",
    companions: [initialNewCompanion],
  };

  const [newTrip, setNewTrip] = useState<INewTrip>(initialNewTrip);
  const [newStop, setNewStop] = useState<IStopBasic>(initialNewStop);
  const [companion, setCompanion] = useState<ICompanion>(initialNewCompanion);
  const [allContacts, setAllContacts] = useState<IContact[]>([]);

  useEffect(() => {
    props.user &&
      getData(baseUrl + `/contacts/${props.user.id}`, setAllContacts);
  }, [props.user]);

  const handleChangeStops = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewStop({ ...newStop, [e.target.name]: e.target.value });
  };

  const handleCompanion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanion({ ...companion, [e.target.name]: e.target.value });
  };

  const handleAddCompanion = (companion: ICompanion) => {
    setNewStop({ ...newStop, companions: [...newStop.companions, companion] });
    setCompanion(initialNewCompanion);
  };

  console.log(newStop.exp_departure, newStop.exp_arrival);

  return (
    <>
      <PageHeader
        title="Add a trip"
        user={props.user}
        setUser={props.setUser}
      />
      <div className="d-flex justify-content-center mx-5">
        {newTrip.nameSubmitted === false ? (
          <>
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
                      ? "btn btn-primary me-2 btn-sm"
                      : "btn btn-outline-primary me-2 btn-sm"
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
              onClick={() =>
                props.user &&
                handleAddTrip(
                  props.user,
                  setNewStop,
                  newStop,
                  setNewTrip,
                  newTrip
                )
              }
            >
              Get Started
            </button>
          </>
        ) : (
          <>
            <h2>{newTrip.tripName}</h2>
            Shared with{" "}
            {newTrip.contacts.map((contact) => (
              <button
                className="btn btn-primary me-2 btn-sm"
                key={contact.name}
              >
                {contact.name}
              </button>
            ))}
            {/* {newStops[0].name === ""
              ? "No stops added yet"
              : newStops.map((stop) => <Stop stop={stop} />)} */}
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
                    <div className="form-group">
                      <h5>Stop name *</h5>
                      <input
                        type="text"
                        className="form-control"
                        id="stop-name"
                        name="name"
                        value={newStop.name}
                        onChange={(e) => handleChangeStops(e)}
                      />
                      <h5>Location link *</h5>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Google Maps, what3words"
                        id="contact-email"
                        name="location_link"
                        value={newStop.location_link}
                        onChange={(e) => handleChangeStops(e)}
                      />
                      <h5>Expected arrival *</h5>
                      <DateTimePicker
                        value={newStop.exp_arrival}
                        disableClock={true}
                        onChange={(value) =>
                          setNewStop({ ...newStop, exp_arrival: value })
                        }
                      />
                      <h5>Expected departure *</h5>
                      <DateTimePicker
                        value={newStop.exp_departure}
                        disableClock={true}
                        onChange={(value) =>
                          setNewStop({ ...newStop, exp_arrival: value })
                        }
                      />
                      <h5>Best phone *</h5>
                      <input
                        type="text"
                        className="form-control"
                        id="best-phone"
                        name="best_phone"
                        value={newStop.best_phone}
                        onChange={(e) => handleChangeStops(e)}
                      />
                      <h5>Best email *</h5>
                      <input
                        type="text"
                        className="form-control"
                        id="best-email"
                        name="best_email"
                        value={newStop.best_email}
                        onChange={(e) => handleChangeStops(e)}
                      />
                      {newStop.companions !== [] &&
                        newStop.companions.map((companion) => (
                          <ul key={companion.name}>
                            <strong>{companion.name}</strong> -{" "}
                            {companion.contact}
                          </ul>
                        ))}
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            <h5>Companion name</h5>
                            <input
                              type="text"
                              className="form-control"
                              id="comp-name"
                              name="name"
                              value={companion.name}
                              onChange={(e) => handleCompanion(e)}
                            />
                          </div>
                          <div className="col">
                            <h5>
                              {companion.name === ""
                                ? "Companion"
                                : companion.name}
                              's contact details
                            </h5>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="e.g. phone number, email"
                              id="comp-contact"
                              name="contact"
                              value={companion.contact}
                              onChange={(e) => handleCompanion(e)}
                            />
                          </div>
                          <div className="col">
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => {
                                companion.name === "" ||
                                companion.contact === ""
                                  ? window.alert(
                                      "Please enter a name and contact point for this companion"
                                    )
                                  : handleAddCompanion(companion);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <h5>Details *</h5>
                      <textarea
                        className="form-control"
                        id="details"
                        name="details"
                        value={newStop.details}
                        onChange={(e) => handleChangeStops(e)}
                      />
                    </div>
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
                        handleAddStop(newStop, setNewStop, initialNewStop)
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
              className="btn btn-outline-primary me-2 btn-sm"
              data-toggle="modal"
              data-target="#addStop"
            >
              Add a stop
            </button>
          </>
        )}
      </div>
    </>
  );
}
