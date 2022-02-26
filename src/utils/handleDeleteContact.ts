import axios from "axios";
import IContact from "../interfaces/IContact";
import { baseUrl } from "../reference_variables/baseUrl";
import getData from "./getData";
export default function handleDisableContact(
  contactId: number,
  setAllContacts: React.Dispatch<React.SetStateAction<IContact[]>>
): void {
  axios
    .delete(`${baseUrl}/contacts/${contactId}`)
    .then((response) => {
      getData(baseUrl, setAllContacts);
    })
    .catch((error) => {
      console.log(error);
    });
}
