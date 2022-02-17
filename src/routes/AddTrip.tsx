import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import IContact from "../interfaces/IContact";
import { IStopBasic } from "../interfaces/IStop";
import IUser from "../interfaces/IUser";
import getData from "../utils/getData";
import { baseUrl } from "../baseUrl";
import handleAddTrip from "../utils/handleAddTrip";
import Stop from "../components/Stop";
import { INewTrip, initialNewTrip } from "../interfaces/INewTrip";
import { handleClickContact } from "../utils/handleClickContact";

export default function AddTrip(props: {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  const initialNewStop = {
    trip: 0,
    name: "",
    location_link: "",
    exp_arrival: "",
    exp_departure: "",
    best_email: "",
    best_phone: "",
    details: "",
    companions: [],
  };

  const [newTrip, setNewTrip] = useState<INewTrip>(initialNewTrip);
  const [newStop, setNewStop] = useState<IStopBasic[]>([]);
  const [allContacts, setAllContacts] = useState<IContact[]>([]);

  useEffect(() => {
    props.user &&
      getData(baseUrl + `/contacts/${props.user.id}`, setAllContacts);
  }, []);

  function handleChangeStops(newVal, property) {
    setNew;
  }

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
                props.user && handleAddTrip(props.user, setNewTrip, newTrip)
              }
            >
              Get Started
            </button>
          </>
        ) : (
          <>
            <h2>{newTrip.tripName}</h2>
            Shared with{" "}
            {newTrip.contacts.map((contact) => {
              <button className="btn btn-primary me-2 btn-sm">
                {contact.name}
              </button>;
            })}
            {newStops[0].name === ""
              ? "No stops added yet"
              : newStops.map((stop) => <Stop stop={stop} />)}
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
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <h5>Stop name</h5>
                      <input
                        type="text"
                        className="form-control"
                        id="stop-name"
                        value={newContactName}
                        onChange={(e) => setNewContactName(e.target.value)}
                      />
                      <h5>Contact email</h5>
                      <input
                        type="text"
                        className="form-control"
                        id="contact-email"
                        value={newContactEmail}
                        onChange={(e) => setNewContactEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary me-2 btn-sm"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary me-2 btn-sm"
                      data-dismiss="modal"
                      onClick={() => {
                        (props.user && newContactName !== "") ||
                        (props.user && newContactEmail !== "")
                          ? handleAddContact(
                              newContactName,
                              newContactEmail,
                              props.user.id,
                              setAllContacts,
                              setNewContactName,
                              setNewContactEmail
                            )
                          : window.alert(
                              "Contact name and email must be filled to submit."
                            );
                      }}
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
