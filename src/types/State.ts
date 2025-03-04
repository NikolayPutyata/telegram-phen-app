export interface Task {
  id: number;
  name: string;
  svg_url: string;
  task_bonus: number;
  completed: boolean;
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

interface compTask {
  id: number;
  task: string;
}

export interface Friend {
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
  activeBoosts: Boost[];
  boosts: Boost[];
  activeSkins: object[];
  farmingCycleInMilisec: number;
  currentBoost: number;
  completedTasks: compTask[];
  loading: boolean;
  farmingCycle: number;
  tokensToGet: number;
  usersTasks: {
    gaming: Task[];
    partners: Task[];
    special: Task[];
  };
};
