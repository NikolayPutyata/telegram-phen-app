export type UserState = {
  id: number | null;
  username: string | null;
  first_name: string | null;
  photo_url: string | null;
  language_code: string | null;
  friends: object[];
  tokens: number;
};
