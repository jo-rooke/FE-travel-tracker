import { useState, useEffect } from "react";
import IContact from "../interfaces/IContact";
import IUser from "../interfaces/IUser";
import { baseUrl } from "../baseUrl";
import getData from "../utils/getData";
import handleDisableContact from "../utils/handleDisableContact";
import handleDeleteContact from "../utils/handleDeleteContact";
import hideEmail from "../utils/hideEmail";
export default function AllContacts(props: {
  user: IUser | undefined;
}): JSX.Element {
  const [allContacts, setAllContacts] = useState<IContact[]>([]);
  useEffect(() => {
    props.user !== undefined &&
      getData(baseUrl + `/contacts/${props.user.id}`, setAllContacts);
  }, [props.user]);
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
          {allContacts?.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{hideEmail(contact.email)}</td>
              <td></td>
              <td>
                {contact.activated ? (
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      handleDisableContact(contact.id, setAllContacts)
                    }
                  >
                    Disable
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      handleDisableContact(contact.id, setAllContacts)
                    }
                  >
                    Enable
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    handleDeleteContact(contact.id, setAllContacts)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button> Add a new contact </button>
    </div>
  );
}
