import { IStopAdding } from "../interfaces/IStop";
import { useState } from "react";
import { ICompanion, initialNewCompanion } from "../interfaces/IStop";
import DateTimePicker from "react-datetime-picker";
import { handleCompanion, handleAddCompanion } from "../utils/handleCompanion";
import { handleChangeStops } from "../utils/handleChangeStops";

export default function AddStop(props: {
  newStop: IStopAdding;
  setNewStop: React.Dispatch<React.SetStateAction<IStopAdding>>;
}): JSX.Element {
  const [companion, setCompanion] = useState<ICompanion>(initialNewCompanion);

  return (
    <div className="form-group">
      <h5>Stop name *</h5>
      <input
        type="text"
        className="form-control"
        id="stop-name"
        name="name"
        value={props.newStop.name}
        onChange={(e) => handleChangeStops(e, props.newStop, props.setNewStop)}
      />
      <h5>Location link *</h5>
      <input
        type="text"
        className="form-control"
        placeholder="e.g. Google Maps, what3words"
        id="contact-email"
        name="location_link"
        value={props.newStop.location_link}
        onChange={(e) => handleChangeStops(e, props.newStop, props.setNewStop)}
      />
      <h5>Expected arrival *</h5>
      <DateTimePicker
        value={props.newStop.new_arrival}
        disableClock={true}
        onChange={(value: Date) =>
          props.setNewStop({ ...props.newStop, new_arrival: value })
        }
      />
      <h5>Expected departure *</h5>
      <DateTimePicker
        value={props.newStop.new_departure}
        disableClock={true}
        onChange={(value: Date) =>
          props.setNewStop({ ...props.newStop, new_departure: value })
        }
      />
      <h5>Best phone *</h5>
      <input
        type="text"
        className="form-control"
        id="best-phone"
        name="best_phone"
        value={props.newStop.best_phone}
        onChange={(e) => handleChangeStops(e, props.newStop, props.setNewStop)}
      />
      <h5>Best email *</h5>
      <input
        type="text"
        className="form-control"
        id="best-email"
        name="best_email"
        value={props.newStop.best_email}
        onChange={(e) => handleChangeStops(e, props.newStop, props.setNewStop)}
      />
      {props.newStop.companions !== [] &&
        props.newStop.companions.map((companion) => (
          <ul key={companion.name}>
            <strong>{companion.name}</strong> - {companion.contact}
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
              onChange={(e) => handleCompanion(e, companion, setCompanion)}
            />
          </div>
          <div className="col">
            <h5>
              {companion.name === "" ? "Companion" : companion.name}
              's contact details
            </h5>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. phone number, email"
              id="comp-contact"
              name="contact"
              value={companion.contact}
              onChange={(e) => handleCompanion(e, companion, setCompanion)}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                companion.name === "" || companion.contact === ""
                  ? window.alert(
                      "Please enter a name and contact point for this companion"
                    )
                  : handleAddCompanion(
                      companion,
                      setCompanion,
                      props.newStop,
                      props.setNewStop
                    );
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
        value={props.newStop.details}
        onChange={(e) => handleChangeStops(e, props.newStop, props.setNewStop)}
      />
    </div>
  );
}
