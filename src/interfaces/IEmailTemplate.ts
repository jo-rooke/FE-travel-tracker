export interface ISafeAlert {
  [key: string]: string;
  contact_email: string;
  from_name: string;
  to_name: string;
  stop_name: string;
  stop_location_link: string;
  stop_last_seen: string;
  stop_phone: string;
  stop_email: string;
  trip_name: string;
  arr_or_dep: string;
}

export interface ICheckInOut extends ISafeAlert {
  stop_details: string;
}
