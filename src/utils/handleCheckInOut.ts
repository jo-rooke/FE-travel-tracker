import axios from "axios";
import { baseUrl } from "../baseUrl";
import { IStopSubmitted } from "../interfaces/IStop";
import getData from "./getData";

export default function handleCheckInOut(
  stopId: number,
  arrOrDep: string,
  setState: React.Dispatch<React.SetStateAction<IStopSubmitted[] | undefined>>,
  trip: number
): void {
  axios
    .put(baseUrl + `/stops/${arrOrDep}/${stopId}`)
    .then(() => {
      getData(baseUrl + `/stops/${trip}`, setState);
    })
    .catch((error) => {
      console.log(error);
    });
}
