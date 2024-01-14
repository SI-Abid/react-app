import { useState } from "react";

interface Props {
  maxLength?: number;
  children: string;
}

const ExpandableText = ({ maxLength = 50, children }: Props) => {
  const [expanded, SetExpanded] = useState(false);
  if (children.length <= maxLength) return children;
  return (
    <>
      {expanded ? children : children.slice(0, maxLength) + "..."}
      <button onClick={() => SetExpanded(!expanded)}>
        {expanded ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpandableText;
