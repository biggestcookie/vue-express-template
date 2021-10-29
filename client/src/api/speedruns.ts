import axios from "axios";
import { API_PREFIX } from "../../../shared/constants";
import {
  SpeedrunCreateRequest,
  SpeedrunData,
} from "../../../shared/models/speedrun-data";

const instance = axios.create({
  baseURL: `${API_PREFIX}/speedruns/`,
  timeout: 10000,
});

export async function getSpeedruns(userId?: number): Promise<SpeedrunData[]> {
  return (await instance.get(`/${userId ?? ""}`)).data;
}

export async function submitSpeedrun(
  body: SpeedrunCreateRequest
): Promise<SpeedrunData> {
  return (await instance.post("/submit", body)).data;
}
