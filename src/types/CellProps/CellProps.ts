import { Cell } from "../../models/Cell";

export interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}
