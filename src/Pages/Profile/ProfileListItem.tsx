interface ProfileListItemProps {
  onClickFu: () => void; 
  title: string;
  imgSrc: string;
  imgAlt: string;
}

const ProfileListItem: React.FC<ProfileListItemProps> = ({ onClickFu, title, imgSrc, imgAlt }) => {
  return (
    <li className="w-full py-1 items-center flex justify-between">
      <button
        type="button"
        onClick={onClickFu} 
        className="w-full items-center pr-6 flex justify-between"
      >
        {title}
        <img src={imgSrc} alt={imgAlt} className="w-5" />
      </button>
    </li>
  );
};

export default ProfileListItem;
