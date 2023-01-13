import { FC } from "react";

interface CardProps {
  name?: string;
  img?: string;
  key?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
const Card: FC<CardProps> = ({ name, img, key, onClick, children }) => {
  return (
    <div
      className="card card-compact bg-white shadow-lg shadow-black border-4 border-black m-2"
      key={key}
      onClick={onClick}
    >
      <figure className="w-full h-full p-5">
        <img className="h-full" src={img} alt={name} />
      </figure>
      <div className="card-body">
        <p className="text-center text-black text-xs md:text-md lg:text-lg uppercase font-bold">
          {name}
        </p>
      </div>
      {children}
    </div>
  );
};

export default Card;
