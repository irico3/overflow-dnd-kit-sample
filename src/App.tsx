import { DndContext } from "@dnd-kit/core";
import "./App.css";
import { useState } from "react";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { Handler } from "./Handler";

function App() {
  const [width, setWidth] = useState(580);

  const [startWidth, setStartWidth] = useState(580);

  return (
    <DndContext
      onDragStart={() => {
        setStartWidth(width);
      }}
      onDragMove={(e) => {
        setWidth(startWidth + e.delta.x);
      }}
      modifiers={[restrictToHorizontalAxis]}
    >
      <div className="container">
        <div className="boxContainer" style={{ width: `${width}px` }}>
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </div>
        <Handler />
      </div>
    </DndContext>
  );
}

export default App;
