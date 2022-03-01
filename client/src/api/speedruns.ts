import { instance } from ".";
import {
  SpeedrunCreateRequest,
  SpeedrunData,
} from "../../../shared/models/speedrun-data";

export async function getSpeedruns(userId?: number): Promise<SpeedrunData[]> {
  const response = await instance.get(`/${userId ?? ""}`);
  return response.data;
}

export async function submitSpeedrun(
  body: SpeedrunCreateRequest
): Promise<SpeedrunData> {
  const response = await instance.post("/submit", body);
  return response.data;
}
