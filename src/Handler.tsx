import { useDraggable } from "@dnd-kit/core";

export const Handler = () => {
  const { listeners, setNodeRef, attributes } = useDraggable({
    id: "handler",
  });
  console.log(listeners);

  return (
    <button
      className="handler"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    />
  );
};
