interface Friend {
  id: number;
  name: string;
}

export type UserState = {
  id: number;
  username: string | null;
  first_name: string | null;
  photo_url: string | null;
  language_code: string | null;
  friends: Friend[];
  tokens: number;
  skins: object[];
  boosts: object[];
  activeSkins: object[];
  currentBoost: number;
};