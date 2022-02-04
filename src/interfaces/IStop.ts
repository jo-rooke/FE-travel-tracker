export default interface IStop {
  id: number;
  trip: number;
  name: string;
  location_link: string;
  exp_arrival: string;
  exp_departure: string;
  actual_arrival: string | null;
  actual_departure: string | null;
  best_email: string;
  best_phone: string;
  details: string;
  companions: ICompanion[];
}

interface ICompanion {
  name: string;
  contact: string;
}
