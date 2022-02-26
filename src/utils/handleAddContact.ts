import axios from "axios";
import { baseUrl } from "../reference_variables/baseUrl";
import getData from "./getData";
import IContact from "../interfaces/IContact";

export default function handleAddContact(
  name: string,
  email: string,
  userId: number,
  setState: React.Dispatch<React.SetStateAction<IContact[]>>,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>
): void {
  axios
    .post(baseUrl + `/contacts/${userId}`, {
      contactName: name,
      contactEmail: email,
    })
    .then(() => {
      getData(baseUrl, setState);
    })
    .then(() => {
      setName("");
      setEmail("");
    })
    .catch((error) => {
      console.log(error);
    });
}
