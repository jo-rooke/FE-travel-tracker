import axios from "axios";
import { baseUrl } from "../baseUrl";
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
  function resetStates(
    setName: React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>
  ) {
    setName("");
    setEmail("");
  }

  axios
    .post(baseUrl + `/contacts/${userId}`, {
      contactName: name,
      contactEmail: email,
    })
    .then(() => {
      getData(baseUrl, setState);
    })
    .then(() => resetStates(setName, setEmail))
    .catch((error) => {
      console.log(error);
    });
}
