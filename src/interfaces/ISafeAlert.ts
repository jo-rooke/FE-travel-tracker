export default interface ISafeAlert {
  [key: string]: string;
  contact_email: string;
  from_name: string;
  to_name: string;
  stop_name: string;
  stop_location_link: string;
  arr_or_dep: string;
  stop_last_seen: string;
  stop_phone: string;
  stop_email: string;
  trip_name: string;
}
