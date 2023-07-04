import { Colors } from "../Colors";
import { FigureNames } from "../../types/FigureNames/FigureNames";
import { Cell } from "../Cell";
import logo from "../../assets/black-king.png"

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this
        this.logo = null
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }

    canMove(target: Cell) : boolean {
        if(target.figure?.color === this.color) return false // can't eat your figures
        if(target.figure?.name === FigureNames.KING) return false // The King can't be removed from a playfield
        return true;
    }


    moveFigure(target: Cell) {

    }
}
