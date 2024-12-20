import axios from 'axios';

/**
 * The base URL for the Django API.
 * @constant {string}
 */
export const BASEURL = 'http://localhost:8000/';

/**
 * Axios instance configured with a base URL for making API requests.
 * @type {import('axios').AxiosInstance}
 * @constant
 */
const api = axios.create({
  /**
   * The base URL for the Axios instance.
   * Note: Ensure the base URL matches the API's endpoint.
   */
  baseURL: 'http://localhost:8000/', // Adjust if necessary to match your API's URL
});

export default api;