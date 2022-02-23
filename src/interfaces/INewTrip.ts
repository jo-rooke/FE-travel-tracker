import IContact from "./IContact";

export interface INewTrip {
  tripName: string;
  contacts: IContact[];
  nameSubmitted: boolean;
}
export const initialNewTrip = {
  tripName: "",
  contacts: [],
  nameSubmitted: false,
};
