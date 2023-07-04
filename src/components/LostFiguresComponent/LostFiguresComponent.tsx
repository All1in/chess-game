import { FC } from "react";
import { LostFiguresProps } from "../../types/LostFiguresProps/LostFiguresProps";

const LostFiguresComponent: FC<LostFiguresProps> = ({ title, figures }) => {
    return (
        <div className="lost">
            <h3>{ title }</h3>
            {figures.map(figure =>
                <div key={figure.id}>
                    {figure.name}
                    {figure.logo && <img width={20} height={20} src={figure.logo}/>}
                </div>
            )}
        </div>
    );
};

export default LostFiguresComponent;
