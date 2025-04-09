import { createSlice } from '@reduxjs/toolkit';
import {
  claimTokens,
  initUserFromServer,
  paymentInPhenerium,
  startFarming,
  taskCompleted,
  getBoostsAndSkins,
  addRefTgLink,
  sendCase,
} from '../operations';
import { UserState } from '../../types/State';

const initialState: UserState = {
  id: 0,
  username: '',
  first_name: '',
  photo_url: null,
  language_code: null,
  tokens: 0,
  friends: [],
  refLink: '',
  skins: [],
  activeBoosts: [],
  boosts: [],
  activeSkins: [],
  currentBoost: 0,
  completedTasks: [],
  farmingCycleInMilisec: 0,
  farmingCycle: 0,
  tokensToGet: 0,
  caseBoosts: [
    {
      id: 611,
      name: 'Nebula Core',
      desc: 'Regular Space Case',
      imageUrl:
        'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389387/case_2_p187b3.webp',
      price: 10,
      collectionId: 4,
      prize: [
        {
          id: 99,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740677691/1000_zufakh.png',
          boost: '1000 PHEN',
          name: '1000 PHEN',
        },
        {
          id: 14,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740656126/medic_11zon_dyygxi.webp',
          boost: 'X10',
          name: 'Medical Team',
        },
        {
          id: 41,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741782889/planet1_11zon_jnb5cd.webp',
          boost: '',
          name: 'Orionus',
        },
        {
          id: 31,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741782887/com_11zon_halzjs.webp',
          boost: '',
          name: 'Jack Snack',
        },
      ],
    },
    {
      id: 612,
      name: 'CryoVault-X',
      desc: 'Creon Constellation Case',
      imageUrl:
        'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389387/case_1_ziutac.webp',
      price: 20,
      collectionId: 4,
      prize: [
        {
          id: 98,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740677692/3000_rxrd72.png',
          boost: '3000',
          name: '3000 PHEN',
        },
        {
          id: 15,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740656125/sshuuttle_mp13v7.webp',
          boost: 'X15',
          name: 'Research Shuttle',
        },
        {
          id: 42,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783044/planet3_11zon_kbdrpe.webp',
          boost: '',
          name: 'Moonstar',
        },
        {
          id: 32,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783042/comS_11zon_d4gn94.webp',
          boost: '',
          name: 'Sam Boonel',
        },
      ],
    },
    {
      id: 613,
      name: 'Titanium Lockbox',
      desc: 'Titanium Case of Andromeda',
      imageUrl:
        'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740499548/case_3_qifs7i.webp',
      price: 50,
      collectionId: 4,
      prize: [
        {
          id: 97,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740677691/5000_inzqcs.png',
          boost: '5000 PHEN',
          name: '5000 PHEN',
        },
        {
          id: 16,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740656126/medic_11zon_dyygxi.webp',
          boost: 'X20',
          name: 'Vespene Laser',
        },
        {
          id: 43,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740682664/planet_4_11_11zon_ufeya7.webp',
          boost: '',
          name: 'Goldenvarer',
        },
        {
          id: 33,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740682426/comandor_1_1_11zon_oxopsf.webp',
          boost: '',
          name: 'Tacker Rize',
        },
      ],
    },
    {
      id: 614,
      name: 'Aurum Prime',
      desc: 'Golden Case of Retribution',
      imageUrl:
        'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740499548/case_4_xrg3rz.webp',
      price: 100,
      collectionId: 4,
      prize: [
        {
          id: 96,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740677691/10000_zi8uqs.png',
          boost: '10000 PHEN',
          name: '10000 PHEN',
        },
        {
          id: 17,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740656125/escort_11zon_ddteiq.webp',
          boost: 'X25',
          name: 'Escort Squadron',
        },
        {
          id: 44,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783195/planet4_11zon_m1l0pi.webp',
          boost: '',
          name: 'Titanus',
        },
        {
          id: 34,
          photo:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1741783195/comM_11zon_a5melk.webp',
          boost: '',
          name: 'Oscar White',
        },
      ],
    },
  ],
  usersTasks: {
    gaming: [],
    partners: [],
    special: [],
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addBoostsToActive: (state, action) => {
      state.activeBoosts = [...state.activeBoosts, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initUserFromServer.fulfilled, (state, action) => {
        const usersData: UserState = action.payload.data;
        state.id = usersData.id;
        state.username = usersData.username;
        state.first_name = usersData.first_name;
        state.photo_url = usersData.photo_url;
        state.language_code = usersData.language_code;
        state.tokens = usersData.tokens;
        state.friends = usersData.friends;
        state.refLink = usersData.refLink;
        state.skins = usersData.skins;
        state.boosts = usersData.boosts;
        state.activeSkins = usersData.activeSkins;
        state.activeBoosts = usersData.activeBoosts;
        state.currentBoost = usersData.currentBoost;
        state.usersTasks = usersData.usersTasks;
        state.farmingCycle = usersData.farmingCycle;
      })
      .addCase(claimTokens.fulfilled, (state, action) => {
        state.activeBoosts = action.payload.activeBoosts;
        state.tokens = action.payload.tokens;
      })
      .addCase(taskCompleted.fulfilled, (state, action) => {
        state.usersTasks = action.payload.userTasks;
      })
      .addCase(addRefTgLink.fulfilled, (state, action) => {
        state.refLink = action.payload.link;
      })
      .addCase(startFarming.fulfilled, (state, action) => {
        state.boosts = action.payload.boosts;
        state.activeBoosts = action.payload.activeBoosts;
        state.farmingCycleInMilisec = action.payload.farmingCycleInMilisec;
        state.farmingCycle = action.payload.farmingCycle;
        state.tokensToGet = action.payload.tokensToGet;
      })
      .addCase(paymentInPhenerium.fulfilled, (state, action) => {
        state.tokens = action.payload.data.tokens;
        state.boosts = action.payload.data.boosts;
        state.skins = action.payload.data.skins;
      })
      .addCase(getBoostsAndSkins.fulfilled, (state, action) => {
        state.boosts = action.payload.boosts;
        state.skins = action.payload.skins;
      })
      .addCase(sendCase.fulfilled, (state, action) => {
        state.caseBoosts = action.payload.data.caseBoosts;
      });
  },
});

export const { addBoostsToActive } = userSlice.actions;
export default userSlice.reducer;
