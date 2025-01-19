import { getToken } from "../utils/utils";

/**
 * APIHandler is a class for executing API Requests.
 *
 * @method fetch - Fetches data from the API.
 * * @param route - The route to fetch data from.
 * * @param method - The HTTP method to use for the request.
 * * @param params - The parameters to send with the request.
 * @returns The data fetched from the API.
 **/

class ApiHandler {
  static async fetch({ route, method = "POST", params = null } = {}) {
    const baseUrl = process.env.REACT_APP_API_URL;

    if (!baseUrl || !route) {
      console.error("Base URL or route is not provided", baseUrl, route);
    } else {
      const url = `${baseUrl}/${route}`;
      const token = getToken();
      const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      };
      const body = method !== "GET" && params ? JSON.stringify(params) : null;

      try {
        const response = await fetch(url, {
          method,
          headers,
          body,
        });

        const responseJson = await response.json();

        return responseJson;
      } catch (error) {
        console.error("Error Fetching API: ", error, url, params);
      }
    }
  }
}

export default ApiHandler;
