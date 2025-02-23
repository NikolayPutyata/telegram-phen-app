import SpecialItem from '../../Pages/Leaderbords/SpecialItem';
// import { useSelector } from 'react-redux';

const Special = () => {
  // const specials = useSelector(selectSpecialId);

  interface Item {
  id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

const items: Item[] = [
  {
    id: 'case_1',
    title: 'Case 1',
    price: 1,
    description: 'Special Case 1 for your collection',
    imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740330414/case_1_yfog8y.jpg',
  },
  {
    id: 'case_2',
    title: 'Case 2',
    price: 2,
    description: 'Special Case 2 for your collection',
    imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740330414/IMG_2857_cn3jek.jpg',
  },
  
];

  return (
    <div className="px-3 mb-24 mt-2 tracking-wider">
      <div className="relative w-full h-44 overflow-hidden rounded-4xl ">
          <img
            src="https://res.cloudinary.com/dv1acgeyp/image/upload/v1740330414/sklad_p5ztq0.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      <ul className="flex flex-col gap-4 my-6">
        {items.map((special) => (
          <SpecialItem key={special.id} id={special.id} description={special.description} title={special.title} imageUrl={special.imageUrl} price={special.price} />

        ))}
      </ul>
    </div>
  );
};

export default Special;
