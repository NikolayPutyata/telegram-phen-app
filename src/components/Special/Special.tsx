import SpecialItem from '../../Pages/Leaderbords/SpecialItem';
// import { useSelector } from 'react-redux';

const Special = () => {
  // const specials = useSelector(selectSpecialId);

  interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
    imageUrl: string;
    collectionId: number;
}

const items: Item[] = [
  {
    id: 1,
    title: 'Case 1',
    price: 1,
    description: 'Special Case 1 for your collection',
    imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389387/case_2_p187b3.webp',
    collectionId: 4
  },
  {
    id: 2,
    title: 'Case 2',
    price: 2,
    description: 'Special Case 2 for your collection',
    imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389387/case_1_ziutac.webp',
    collectionId: 4
  },
  
];

  return (
    <div className="px-3 mb-24 mt-2 tracking-wider">
      <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389388/sklad_hustzi.webp"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      <ul className="flex flex-col gap-4 my-6">
        {items.map((special) => (
          <SpecialItem key={special.id} id={special.id} description={special.description} title={special.title} imageUrl={special.imageUrl} price={special.price} collectionId={special.collectionId} />

        ))}
      </ul>
    </div>
  );
};

export default Special;
