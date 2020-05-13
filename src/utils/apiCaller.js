import axios from "axios";
import * as Config from "./../constant/Config";

export default function callApi(endpoint, method = "GET", data) {
  return axios({
    method,
    url: `${Config.API_URL_DATA}/${endpoint}`,
    data,
  }).catch((error) => {
    console.log(error);
  });
}
