export interface UserCreateData {
  username: string;
}

export interface UserData extends UserCreateData {
  id: number;
}
