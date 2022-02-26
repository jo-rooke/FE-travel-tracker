import { ICheckInOut } from "../interfaces/IEmailTemplate";
import { send, init } from "emailjs-com";
import { emailJsUser, emailJsService } from "../reference_variables/user";
init(emailJsUser);

export default function checkInOutEmail(templateParams: ICheckInOut): void {
  send(emailJsService, "new_activity", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
