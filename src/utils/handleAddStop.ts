import { IStopAdding } from "../interfaces/IStop";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import { date } from "../routes/AddTrip";
import moment from "moment";

export default function handleAddStop(
  newStop: IStopAdding,
  setNewStop: React.Dispatch<React.SetStateAction<IStopAdding>>,
  initialNewStop: IStopAdding
): void {
  if (
    newStop.trip === 0 ||
    newStop.name === "" ||
    newStop.location_link === "" ||
    newStop.new_arrival === date ||
    newStop.new_departure === date ||
    newStop.best_phone === "" ||
    newStop.best_email === "" ||
    newStop.details === ""
  ) {
    window.alert("Please fill in all the compulsory fields (marked with *)");
  } else {
    axios
      .post(baseUrl + `/stops/${newStop.trip}`, {
        stopName: newStop.name,
        stopLink: newStop.location_link,
        stopArrival: moment(newStop.new_arrival).format(),
        stopDeparture: moment(newStop.new_departure).format(),
        stopEmail: newStop.best_email,
        stopPhone: newStop.best_phone,
        stopDetails: newStop.details,
        companions: newStop.companions,
      })
      .then(() => setNewStop(initialNewStop));
  }
}
