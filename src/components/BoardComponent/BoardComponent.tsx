import { FC, Fragment, useState, useEffect } from "react";
import { Cell } from "../../models/Cell";
import { BoardProps } from "../../types/BoardProps/BoardProps";
import CellComponent from "../CellComponent/CellComponent";

const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            // choosing where to move available
            selectedCell.moveFigure(cell);
            // swapPlayer()
            setSelectedCell(null);
            // updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
               setSelectedCell(cell);
            }
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    // to move figures

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    // to update board
    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }


    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            click={click}
                            cell={cell}
                            key={cell.id} // randomly generated
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                    )}
                </Fragment>
            )}
        </div>
    );
};

export default BoardComponent;
