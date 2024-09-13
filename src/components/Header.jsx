import Logo from "../assets/logo technopartner.png";

const Header = () => {

  return (
    <div className="px-2 pt-2 pb-2 bg-white">
      <img src={Logo} alt="technopartner logo" className="w-28 h-14" />
    </div>
  );
};

export default Header;
