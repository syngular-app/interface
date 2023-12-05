import React from "react";
import "./style.css";

export const Aviso = (): JSX.Element => {
    return (
        <div className="aviso">
            <div className="div">
                <p className="text-wrapper">Tem certeza que deseja sair de sua conta?</p>
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="text-wrapper-2">Sim</div>
                </div>
                <div className="overlap-group">
                    <div className="rectangle-2" />
                    <div className="text-wrapper-3">Não</div>
                </div>
            </div>
        </div>
    );
};
