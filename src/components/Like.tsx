import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [like, setLike] = useState(false);

  const toggle = () => {
    setLike(!like);
    onClick();
  };

  if (like) return <AiFillHeart color="#ff6b81" size="30" onClick={toggle} />;

  return <AiOutlineHeart color="#ff6b81" size="30" onClick={toggle} />;
};

export default Like;
