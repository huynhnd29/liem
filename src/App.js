import logo from "./logo.svg";
import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import AntdDesign from "./installPackage/AntdDesign";

function App() {
  const TEST_DRAG_DROP = [
    {
      id: "1",
      content: "item 1",
    },
    {
      id: "2",
      content: "item 2",
    },
    {
      id: "3",
      content: "item 3",
    },
    {
      id: "4",
      content: "item 4",
    },
    {
      id: "5",
      content: "item 5",
    },
  ];

  const [stateData, setStateData] = useState(TEST_DRAG_DROP);

  const array_move = (arr, old_index, new_index) => {
    const result = Array.from(arr);
    const [removed] = result.splice(old_index, 1);
    // console.log("remove", removed[0]);
    result.splice(new_index, 0, removed);
  
    return result;
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const onDragEnd = (result) => {
    const index = result.source.index;
    const newIndex = result.destination.index;
    const newArray = array_move(stateData, index, newIndex);
    setStateData(newArray)
    console.log(newArray);
  };

  return (
    <div className="App">
      <AntdDesign />
    </div>
  );
}

export default App;
