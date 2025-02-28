import SpecialItem from '../../Pages/Leaderbords/SpecialItem';
import s from '/src/App.module.css';
import CasesOpen from '../CasesOpen/CasesOpen';

interface Prize {
  name: string;
  idItem: number;
  collectionId: number;
  type: string;
  photo_url: string;
}

interface Item {
  id: number;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  collectionId: number;
  prizes: Prize[];
}

interface robotsItem {
  id: number;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  collectionId: number;
}

interface ItemsCollection {
  cases: Item[];
}

const items: ItemsCollection = {
  cases: [
    {
      id: 1,
      title: 'Nebula Core',
      price: '1',
      description: 'Regular Space Case',
      imageUrl:
        'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389387/case_2_p187b3.webp',
      collectionId: 4,
      prizes: [
        {
          name: '1000 Tokens',
          idItem: 99,
          collectionId: 0,
          type: 'tokens',
          photo_url:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740677691/1000_zufakh.png',
        },
        {
          name: 'Medical team',
          idItem: 14,
          collectionId: 2,
          type: 'boosts',
          photo_url:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740656126/medic_11zon_dyygxi.webp',
        },
        {
          name: 'Skin 1',
          idItem: 10,
          collectionId: 1,
          type: 'skins',
          photo_url: '',
        },
        {
          name: 'Skin 2',
          idItem: 11,
          collectionId: 1,
          type: 'skins',
          photo_url: '',
        },
      ],
    },
    {
      id: 2,
      title: 'CryoVault-X',
      price: '2',
      description: 'Creon Constellation Case',
      imageUrl:
        'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389387/case_1_ziutac.webp',
      collectionId: 4,
      prizes: [
        {
          name: '3000 Tokens',
          idItem: 98,
          collectionId: 0,
          type: 'tokens',
          photo_url:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740677692/3000_rxrd72.png',
        },
        {
          name: 'Research Shuttle',
          idItem: 15,
          collectionId: 2,
          type: 'boosts',
          photo_url:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740656125/sshuuttle_mp13v7.webp',
        },
        {
          name: 'Skin 1',
          idItem: 12,
          collectionId: 1,
          type: 'skins',
          photo_url: '',
        },
        {
          name: 'Skin 2',
          idItem: 13,
          collectionId: 1,
          type: 'skins',
          photo_url: '',
        },
      ],
    },
    {
      id: 3,
      title: 'Titanium Lockbox',
      price: '1',
      description: 'Titanium Case of Andromeda',
      imageUrl:
        'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740499548/case_3_qifs7i.webp',
      collectionId: 4,
      prizes: [
        {
          name: '5000 Tokens',
          idItem: 97,
          collectionId: 0,
          type: 'tokens',
          photo_url:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740677691/5000_inzqcs.png',
        },
        {
          name: 'Vespene Laser',
          idItem: 16,
          collectionId: 2,
          type: 'boosts',
          photo_url:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740656126/laser_11zon_wnwtfx.webp',
        },
        {
          name: 'Skin 1',
          idItem: 14,
          collectionId: 1,
          type: 'skins',
          photo_url: '',
        },
        {
          name: 'Skin 2',
          idItem: 15,
          collectionId: 1,
          type: 'skins',
          photo_url: '',
        },
      ],
    },
    {
      id: 4,
      title: 'Aurum Prime',
      price: '2',
      description: 'Golden Case of Retribution',
      imageUrl:
        'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740499548/case_4_xrg3rz.webp',
      collectionId: 4,
      prizes: [
        {
          name: '10 000 Tokens',
          idItem: 96,
          collectionId: 0,
          type: 'tokens',
          photo_url:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740677691/10000_zi8uqs.png',
        },
        {
          name: 'Escort Squadron',
          idItem: 17,
          collectionId: 2,
          type: 'boosts',
          photo_url:
            'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740656125/escort_11zon_ddteiq.webp',
        },
        {
          name: 'Skin 1',
          idItem: 16,
          collectionId: 1,
          type: 'skins',
          photo_url: '',
        },
        {
          name: 'Skin 2',
          idItem: 17,
          collectionId: 1,
          type: 'skins',
          photo_url: '',
        },
      ],
    },
  ],
};

const robots: robotsItem[] = [
  {
    id: 5,
    title: 'X2VR',
    price: '1',
    description: 'Increases the farming cycle to 12 h.',
    imageUrl:
      'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740498348/robot_2_eddxh1.webp',
    collectionId: 5,
  },
  {
    id: 6,
    title: 'X5TP',
    price: '2',
    description: 'Increases the farming cycle to 24 h.',
    imageUrl:
      'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740498348/robot_1_11zon_e9jnzk.webp',
    collectionId: 5,
  },
];

const Special = () => {
  return (
    <div className="px-3 mb-32 mt-2 tracking-wider">
      <div className="relative w-full h-44 overflow-hidden rounded-4xl">
        <img
          src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389388/sklad_hustzi.webp"
          alt="Warehouse"
          className="object-cover w-full h-full"
        />
      </div>
      <section className="mt-6">
        <h2
          className={`${s.font} text-zinc-400 ml-4  mt-6 mb-6 text-sm tracking-wider`}
        >
          Cases
        </h2>
        <ul className="flex flex-col gap-6 ">
          {items.cases.map((special) => (
            <SpecialItem
              key={special.id}
              id={special.id}
              description={special.description}
              title={special.title}
              imageUrl={special.imageUrl}
              price={special.price}
              collectionId={special.collectionId}
            />
          ))}
        </ul>
      </section>
      <section className="mt-6">
        <h2
          className={`${s.font} text-zinc-400 ml-4 mt-9 mb-6 text-sm tracking-wider`}
        >
          Robot Assistants
        </h2>
        <ul className="flex flex-col gap-6 ">
          {robots.map((special) => (
            <SpecialItem
              key={special.id}
              id={special.id}
              description={special.description}
              title={special.title}
              imageUrl={special.imageUrl}
              price={special.price}
              collectionId={special.collectionId}
            />
          ))}
        </ul>
      </section>
      <CasesOpen />
    </div>
  );
};

export default Special;
