import { useState } from "react";
import { Board } from "./models/Board";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import "./styles/App.css";

const App = () => {
  const [board, setBoard] = useState(new Board());

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
  }

  return (
    <div className="app">
       <BoardComponent />
    </div>
  );
};

export default App;
