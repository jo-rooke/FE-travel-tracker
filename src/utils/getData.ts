import IUser from "../interfaces/IUser";
import { ISafeAlert } from "../interfaces/IEmailTemplate";
import IContact from "../interfaces/IContact";
import ITrip from "../interfaces/ITrip";
import IStop from "../interfaces/IStop";
export default function getData(
  url: string,
  setState:
    | React.Dispatch<React.SetStateAction<IUser[]>>
    | React.Dispatch<React.SetStateAction<ISafeAlert[]>>
    | React.Dispatch<React.SetStateAction<ITrip[]>>
    | React.Dispatch<React.SetStateAction<IContact[]>>
    | React.Dispatch<React.SetStateAction<IStop[] | undefined>>
): void {
  fetch(url)
    .then((res) => res.json())
    .then((jsonBody) => setState(jsonBody.data));
}
