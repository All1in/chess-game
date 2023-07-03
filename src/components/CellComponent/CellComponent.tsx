import { FC } from "react";
import { CellProps } from "../../types/CellProps/CellProps";


const CellComponent: FC<CellProps> = ({ cell, selected, click}) => {
    // console.log('cell', cell)
    return (
        <div
            className={['cell', cell.color, selected ? "selected" : ""].join(' ')}
            onClick={() => click(cell)}
        >
            {/*{!cell.figure && <div className="available"> }*/}
            { cell.figure?.logo && <img src={cell.figure.logo} alt="" /> }
        </div>
    );
};

export default CellComponent;
