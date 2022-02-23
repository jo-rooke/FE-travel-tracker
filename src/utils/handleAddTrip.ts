import axios from "axios";
import { baseUrl } from "../baseUrl";
import { INewTrip } from "../interfaces/INewTrip";
import { IStopAdding, IStopSubmitted } from "../interfaces/IStop";
import IUser from "../interfaces/IUser";
import getData from "./getData";

export default function handleAddTrip(
  user: IUser,
  setStop: React.Dispatch<React.SetStateAction<IStopAdding>>,
  stop: IStopAdding,
  setAddedStops: React.Dispatch<
    React.SetStateAction<IStopSubmitted[] | undefined>
  >,
  setState: React.Dispatch<React.SetStateAction<INewTrip>>,
  state: INewTrip
): void {
  const ids: number[] = [];
  for (const contact of state.contacts) {
    ids.push(contact.id);
  }
  axios
    .post(`${baseUrl}/trips/${user.id}`, {
      tripName: state.tripName,
      contactIds: ids,
    })
    .then((res) => setStop({ ...stop, trip: res.data.data[0].id }))
    .then(() => getData(baseUrl + `/stops/${stop.trip}`, setAddedStops))
    .then(() => setState({ ...state, nameSubmitted: true }));
}
