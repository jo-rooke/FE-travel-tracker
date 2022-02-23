import { useEffect } from "react";
import IContact from "../interfaces/IContact";
import IUser from "../interfaces/IUser";
import { baseUrl } from "../baseUrl";
import getData from "../utils/getData";
import handleDisableContact from "../utils/handleDisableContact";
import handleDeleteContact from "../utils/handleDeleteContact";
import hideEmail from "../utils/hideEmail";
export default function AllContacts(props: {
  user: IUser | undefined;
  allContacts: IContact[];
  setAllContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
}): JSX.Element {
  useEffect(() => {
    props.user !== undefined &&
      getData(baseUrl + `/contacts/${props.user.id}`, props.setAllContacts);
  }, [props.user, props.setAllContacts]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">My Contacts</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.allContacts?.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{hideEmail(contact.email)}</td>
              <td></td>
              <td>
                {contact.activated ? (
                  <button
                    className="btn btn-primary me-2 btn-sm"
                    onClick={() =>
                      handleDisableContact(contact.id, props.setAllContacts)
                    }
                  >
                    Disable
                  </button>
                ) : (
                  <button
                    className="btn btn-success me-2 btn-sm"
                    onClick={() =>
                      handleDisableContact(contact.id, props.setAllContacts)
                    }
                  >
                    Enable
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger me-2 btn-sm"
                  onClick={() =>
                    handleDeleteContact(contact.id, props.setAllContacts)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-success me-2 btn-sm"
        data-toggle="modal"
        data-target="#addContact"
      >
        Add a Contact
      </button>
    </div>
  );
}
