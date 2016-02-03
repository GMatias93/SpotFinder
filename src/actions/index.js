import axios from 'axios';

const API_KEY = '5955635b28722043a369616a113780';
const ROOT_URL = `https://api.meetup.com/2/events?key=${API_KEY}&group_urlname=ny-tech&sign=true`;

export const FETCH_EVENTS = 'FETCH_EVENTS';

export function fetchEvents() {
  const request = axios.get(ROOT_URL);

  return {
    type: FETCH_EVENTS,
    payload: request,
  };
}
