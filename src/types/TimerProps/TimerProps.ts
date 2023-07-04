import { Player } from "../../models/Player";

export interface TimerProps {
    currentPlayer: Player;
    restart: () => void;
}
