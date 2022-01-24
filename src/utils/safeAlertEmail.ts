import ISafeAlert from "../interfaces/ISafeAlert";
import { send, init } from "emailjs-com";
init("user_ibvDbNtHebP8cT2vHy7ut");

export default function safeAlertEmail(templateParams: ISafeAlert): void {
  send("service_huafz7u", "safe_alert", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
