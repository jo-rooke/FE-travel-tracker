export interface IStopBasic {
  trip: number;
  name: string;
  location_link: string;
  exp_arrival: string;
  exp_departure: string;
  best_email: string;
  best_phone: string;
  details: string;
  companions: ICompanion[];
}

export default interface IStop extends IStopBasic {
  id: number;
  actual_arrival: string | null;
  actual_departure: string | null;
}
interface ICompanion {
  name: string;
  contact: string;
}
