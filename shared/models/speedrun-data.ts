export interface SpeedrunData {
  id: number;
  totalTimeMilliseconds: number;
  userId: number;
  username: string;
}

export type SpeedrunCreateData = Omit<SpeedrunData, "id">;

export type SpeedrunCreateRequest = Omit<SpeedrunCreateData, "userId">;
