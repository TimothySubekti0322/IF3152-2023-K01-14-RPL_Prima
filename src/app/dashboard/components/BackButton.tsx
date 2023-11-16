import { FC } from "react";

interface backButtonProps {
  backHandler: () => void;
  src: string;
}

const BackButton: FC<backButtonProps> = ({ backHandler, src }) => {
  return (
    <button onClick={() => backHandler()}>
      <img src={src} alt="" className="w-10 h-10 md:w-12 md:h-12" />
    </button>
  );
};

export default BackButton;
