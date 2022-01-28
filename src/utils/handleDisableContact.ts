import axios from "axios";
import IContact from "../interfaces/IContact";
import { baseUrl } from "../baseUrl";
import getData from "./getData";
export default function handleDisableContact(
  contactId: number,
  setAllContacts: React.Dispatch<React.SetStateAction<IContact[]>>
): void {
  axios
    .put(`${baseUrl}/contacts/${contactId}`)
    .then((response) => {
      getData(baseUrl, setAllContacts);
    })
    .catch((error) => {
      console.log(error);
    });
}