import axios from "axios";
import { baseUrl } from "../baseUrl";
import IContact from "../interfaces/IContact";
import { INewTrip } from "../interfaces/INewTrip";
import IUser from "../interfaces/IUser";

export default function handleAddTrip(
  user: IUser,
  setState: React.Dispatch<React.SetStateAction<INewTrip>>,
  state: INewTrip
): void {
  const ids: number[] = [];
  for (let contact of state.contacts) {
    ids.push(contact.id);
  }
  axios
    .post(`${baseUrl}/trips/${user.id}`, {
      tripName: state.tripName,
      contactIds: ids,
    })
    .then(() => setState({ ...state, nameSubmitted: true }));
}
