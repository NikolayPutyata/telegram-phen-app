export type UserState = {
  id: number | null;
  username: string;
  photo_url: string | null;
  language_code: string | null;
  friends: string[];
  tokens: number;
};
