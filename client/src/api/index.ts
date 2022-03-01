import axios from "axios";
import { API_PREFIX } from "../../../shared/constants";

const instance = axios.create({
  baseURL: `${API_PREFIX}/speedruns/`,
  timeout: 10000,
});

export { instance };
