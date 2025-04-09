export interface Task {
  id: number;
  name: string;
  svg_url: string;
  task_bonus: number;
  completed: boolean;
}

export interface TelegramTask {
  id: number;
  name: string;
  svg_url: string;
  task_bonus: number;
  completed: boolean;
  channelId: string;
}

export interface Boost {
  idItem: number;
  name: string;
  boost_bonus: number;
  boost_photo_url: string;
  collectionId: number;
  desc: string;
  price: string;
  quantity: number;
}

export interface Skin {
  id: number;
  name: string;
  skin_bonus: number;
  skin_photo_url: string;
  skin_photo_url_small: string;
  price: string;
}

interface compTask {
  id: number;
  task: string;
}

export interface Friend {
  id: number;
  name: string;
}

export interface CasePrize {
  id: number;
  boost: string;
  photo: string;
  name: string;
}

export interface Case {
  id: number;
  desc: string;
  imageUrl: string;
  price: number;
  name: string;
  collectionId: number;
  prize: CasePrize[];
}

export type UserState = {
  id: number;
  username: string | null;
  first_name: string | null;
  photo_url: string | null;
  language_code: string | null;
  friends: Friend[];
  refLink: string;
  tokens: number;
  skins: object[];
  activeBoosts: Boost[];
  boosts: Boost[];
  activeSkins: object[];
  farmingCycleInMilisec: number;
  currentBoost: number;
  completedTasks: compTask[];
  farmingCycle: number;
  tokensToGet: number;
  caseBoosts: Case[];
  usersTasks: {
    gaming: TelegramTask[];
    partners: Task[];
    special: Task[];
  };
};
