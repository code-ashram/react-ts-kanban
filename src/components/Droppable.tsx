import { useEffect, useState } from "react";
import { Droppable as DefaultDroppable, DroppableProps } from "react-beautiful-dnd";

export const Droppable = ({ children, ...props }: DroppableProps) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <DefaultDroppable {...props}>{children}</DefaultDroppable>;
};
