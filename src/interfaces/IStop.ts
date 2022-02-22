export interface IStopBasic {
  trip: number;
  name: string;
  location_link: string;
  best_email: string;
  best_phone: string;
  details: string;
  companions: ICompanion[];
}

export interface IStopSubmitted extends IStopBasic {
  id: number;
  exp_arrival: string;
  exp_departure: string;
  actual_arrival: string | null;
  actual_departure: string | null;
}
export interface IStopAdding extends IStopBasic {
  new_arrival: Date;
  new_departure: Date;
}

export interface ICompanion {
  name: string;
  contact: string;
}

export const initialNewCompanion = {
  name: "",
  contact: "",
};
