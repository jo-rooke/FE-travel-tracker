import axios from "axios";
import { baseUrl } from "../baseUrl";
import IStop from "../interfaces/IStop";
import getData from "./getData";

export default function handleCheckInOut(
  stopId: number,
  arrOrDep: string,
  setState: React.Dispatch<React.SetStateAction<IStop[] | undefined>>
): void {
  axios
    .put(baseUrl + `/stops/${arrOrDep}/${stopId}`)
    .then((response) => {
      getData(baseUrl, setState);
    })
    .catch((error) => {
      console.log(error);
    });
}
