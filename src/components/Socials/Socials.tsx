const Socials = () => {
  return (
    <div className="flex justify-center my-4 px-3 pb-2">
      <ul className="flex justify-center items-center gap-10">
        <li>
          <a href="">
            <img src="/assets/telegram-svgrepo-com.svg" alt="" width={25} />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/assets/twitter-x.svg" alt="" width={25} />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/assets/phenSite.svg" alt="" width={25} />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/assets/youtube-svgrepo-com.svg" alt="" width={25} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
