interface ProfileListItemProps {
  onClickFu: () => void; 
  title: string;
}

const ProfileListItem: React.FC<ProfileListItemProps> = ({ onClickFu, title }) => {
  return (
    <li className="w-full py-1 items-center flex justify-between">
      <button
        type="button"
        onClick={onClickFu} 
        className="w-full items-center pr-6 flex justify-between"
      >
        {title}
        <img src="/assets/circle-arrow-left.svg" alt="circle-arrow-left.svg" className="w-5" />
      </button>
    </li>
  );
};

export default ProfileListItem;
