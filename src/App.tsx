import { greet } from "./utils/greet";
import safeAlertEmail from "./utils/safeAlertEmail";
import { send, init } from "emailjs-com";
init("user_ibvDbNtHebP8cT2vHy7ut");

function App(): JSX.Element {
  const mysteryTraveller = {
    contact_email: "joely.rooke@gmail.com",
    from_name: "mystery traveller",
    to_name: "Joely Rooke",
    stop_name: "Amílcar Cabral International Airport",
    stop_location_link: "https://goo.gl/maps/1hpmLvjGTZTd27FJ7",
    arr_or_dep: "arrived",
    stop_last_seen: "10:00, 24/01/2022",
    stop_phone: "+447443915741",
    stop_email: "joely.rooke1@gmail.com",
    trip_name: "Cabo Verde",
  };

  return (
    <>
      <h1>{greet("World")}</h1>
      <button onClick={() => safeAlertEmail(mysteryTraveller)}>
        I'm safe!
      </button>
    </>
  );
}

export default App;
