import IContact from "../interfaces/IContact";
import { INewTrip } from "../interfaces/INewTrip";

export const handleClickContact = (
  contact: IContact,
  state: INewTrip,
  setState: React.Dispatch<React.SetStateAction<INewTrip>>
): void => {
  let contacts = state.contacts;
  if (contacts.includes(contact)) {
    contacts = contacts.filter((item) => item !== contact);
  } else {
    contacts = [...contacts, contact];
  }
  setState({ ...state, contacts: contacts });
};
