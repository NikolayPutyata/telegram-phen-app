import { createSlice } from '@reduxjs/toolkit';
import { Boost, Skin, Case, Robot } from '../../types/State';
import { getAllDataThunk } from '../operations';

interface dataState {
  commonBoosts: Boost[];
  cases: Case[];
  robots: Robot[];
  skins: {
    commonCollection: Skin[];
    bronzeCollection: Skin[];
    silverCollection: Skin[];
    goldCollection: Skin[];
    platinumCollection: Skin[];
    diamondCollection: Skin[];
  };
}

const initialState: dataState = {
  commonBoosts: [],
  cases: [
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
  robots: [],
  skins: {
    commonCollection: [],
    bronzeCollection: [],
    silverCollection: [],
    goldCollection: [],
    platinumCollection: [],
    diamondCollection: [],
  },
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDataThunk.fulfilled, (state, action) => {
      state.skins = action.payload.skins;
      state.commonBoosts = action.payload.boosts.common;
      state.cases = action.payload.cases;
      state.robots = action.payload.robots;
    });
  },
});

export default dataSlice.reducer;
