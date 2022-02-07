export default interface ITrip {
  id: number;
  name: string;
  stops: stops[];
  dateRange: dates[];
  contacts: contacts[];
}

interface stops {
  count: string;
}
interface dates {
  exp_arrival: string;
}
interface contacts {
  name: string;
  activated: boolean;
}
