import { greet } from "./utils/greet";
import { send, init } from "emailjs-com";
init("user_ibvDbNtHebP8cT2vHy7ut");

function App(): JSX.Element {
  function handleSafeAlert() {
    const templateParams = {
      contact_email: "joely.rooke@gmail.com",
      from_name: "mystery traveller",
      to_name: "Joely Rooke",
      stop_name: "Amílcar Cabral International Airport",
      stop_location_link: "https://goo.gl/maps/1hpmLvjGTZTd27FJ7",
      arr_or_dep: "arrived",
      stop_last_seen: "10:00, 24/01/2022",
      phone: "+447443915741",
      email: "joely.rooke1@gmail.com",
      trip_name: "Cabo Verde",
    };

    send("service_huafz7u", "safe_alert", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }
  return (
    <>
      <h1>{greet("World")}</h1>
      <button onClick={handleSafeAlert}>I'm safe!</button>
    </>
  );
}

export default App;
