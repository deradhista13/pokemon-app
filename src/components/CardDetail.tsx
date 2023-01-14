import { FC } from "react";

interface CardProps {
  children?: React.ReactNode;
}
const CardDetail: FC<CardProps> = ({ children }) => {
  return (
    <div className="card card-compact bg-white shadow-lg shadow-black border-4 border-black m-2">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardDetail;
