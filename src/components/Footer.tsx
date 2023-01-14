import { MdHomeFilled, MdCatchingPokemon } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-black sticky bottom-0 z-50">
      <div className="items-center grid grid-cols-2 w-full">
        <div className="flex justify-center w-full">
          <button>
            <Link to={"/"}>
              <MdHomeFilled size={30} color="white" />
            </Link>
          </button>
        </div>
        <div className="flex justify-center w-full">
          <button>
            <Link to={"/pokemon"}>
              <MdCatchingPokemon size={30} color="white" />
            </Link>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
