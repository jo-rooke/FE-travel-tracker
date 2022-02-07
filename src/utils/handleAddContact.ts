import axios from "axios";
import { baseUrl } from "../baseUrl";
import getData from "./getData";
import IContact from "../interfaces/IContact";

export default function handleAddContact(
  name: string,
  email: string,
  userId: number,
  setState: React.Dispatch<React.SetStateAction<IContact[]>>
): void {
  axios
    .put(baseUrl + `/contacts/${userId}`, {
      contactName: name,
      contactEmail: email,
    })
    .then(() => {
      getData(baseUrl, setState);
    })
    .catch((error) => {
      console.log(error);
    });
}
