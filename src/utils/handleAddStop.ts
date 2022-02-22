import { IStopBasic } from "../interfaces/IStop";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import { date } from "../routes/AddTrip";
import moment from "moment";

export default function handleAddStop(
  newStop: IStopBasic,
  setNewStop: React.Dispatch<React.SetStateAction<IStopBasic>>,
  initialNewStop: IStopBasic
): void {
  if (
    newStop.trip === 0 ||
    newStop.name === "" ||
    newStop.location_link === "" ||
    newStop.exp_arrival === date ||
    newStop.exp_departure === date ||
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
        stopArrival: moment(newStop.exp_arrival).format(),
        stopDeparture: moment(newStop.exp_departure).format(),
        stopEmail: newStop.best_email,
        stopPhone: newStop.best_phone,
        stopDetails: newStop.details,
        companions: newStop.companions,
      })
      .then(() => setNewStop(initialNewStop));
  }
}
