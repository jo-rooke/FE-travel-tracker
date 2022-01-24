import { ISafeAlert } from "../interfaces/IEmailTemplate";
import { send, init } from "emailjs-com";
import { emailJsUser, emailJsService } from "../user";
init(emailJsUser);

export default function safeAlertEmail(templateParams: ISafeAlert): void {
  send(emailJsService, "safe_alert", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
