import { ISafeAlert } from "../interfaces/IEmailTemplate";
import { send, init } from "emailjs-com";
import { emailJsUser, emailJsService } from "../reference_variables/user";
init(emailJsUser);

export default function safeAlertEmail(templateParams: ISafeAlert[]): void {
  for (const contact of templateParams) {
    send(emailJsService, "safe_alert", contact).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }
}
