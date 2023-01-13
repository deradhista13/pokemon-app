import { MdHomeFilled, MdCatchingPokemon } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="btm-nav flex justify-center w-full sticky bottom-0 z-50">
      <button>
        <Link to={"/"}>
          <MdHomeFilled size={30} />
        </Link>
      </button>
      <button>
        <MdCatchingPokemon size={30} />
      </button>
    </div>
  );
};

export default Footer;
