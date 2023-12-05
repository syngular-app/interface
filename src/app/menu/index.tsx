import React from "react";
import "./style.css";

export const Menu = (): JSX.Element => {
    return (
        <div className="menu">
            <div className="div">
                <img className="x" alt="X" src="x.svg" />
                <div className="text-wrapper">Histórico</div>
                <div className="text-wrapper-2">Configurações</div>
                <div className="text-wrapper-3">Ajuda</div>
                <div className="text-wrapper-4">Sair</div>
                <img className="rectangle" alt="Rectangle" src="rectangle-7.png" />
                <img className="alexandre-peixoto" alt="Alexandre peixoto" src="alexandre-peixoto.png" />
                <img className="analista-comercial" alt="Analista comercial" src="analista-comercial.png" />
                <img className="book-open" alt="Book open" src="book-open.png" />
                <img className="settings" alt="Settings" src="settings.png" />
                <img className="help-circle" alt="Help circle" src="help-circle.png" />
                <img className="log-out" alt="Log out" src="log-out.png" />
                <img className="line" alt="Line" src="line-1.svg" />
            </div>
        </div>
    );
};
