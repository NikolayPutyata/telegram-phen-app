import SpecialItem from '../../Pages/Leaderbords/SpecialItem';
import s from '/src/App.module.css';

interface Item {
    id: number;
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    collectionId: number;
}

interface ItemsCollection {
    cases: Item[];
    robots: Item[];
}

const items: ItemsCollection = {
    cases: [
        {
            id: 1,
            title: 'Nebula Core',
            price: 1,
            description: 'Special Case 1 for your collection',
            imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389387/case_2_p187b3.webp',
            collectionId: 4
        },
        {
            id: 2,
            title: 'CryoVault-X',
            price: 2,
            description: 'Special Case 2 for your collection',
            imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740389387/case_1_ziutac.webp',
            collectionId: 4
        },
        {
            id: 3,
            title: 'Titanium Lockbox',
            price: 1,
            description: 'Special Case 1 for your collection',
            imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740499548/case_3_qifs7i.webp',
            collectionId: 4
        },
        {
            id: 4,
            title: 'Aurum Prime',
            price: 2,
            description: 'Special Case 2 for your collection',
            imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740499548/case_4_xrg3rz.webp',
            collectionId: 4
        }
    ],
    robots: [
        {
            id: 5,
            title: 'X2VR',
            price: 1,
            description: 'Increases the farming cycle to 12 h.',
            imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740498348/robot_2_eddxh1.webp',
            collectionId: 5
        },
        {
            id: 6,
            title: 'X5TP',
            price: 2,
            description: 'Increases the farming cycle to 24 h.',
            imageUrl: 'https://res.cloudinary.com/dv1acgeyp/image/upload/v1740498348/robot_1_11zon_e9jnzk.webp',
            collectionId: 5
        }
    ]
};

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
                <h2 className={`${s.font} text-zinc-400 ml-4 text-sm tracking-wider`}>Cases</h2>
                <ul className="flex flex-col gap-6 my-6">
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
                <h2 className={`${s.font} text-zinc-400 ml-4 text-sm tracking-wider`}>Robot Assistants</h2>
                <ul className="flex flex-col gap-6 my-6">
                    {items.robots.map((special) => (
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
        </div>
    );
};

export default Special;