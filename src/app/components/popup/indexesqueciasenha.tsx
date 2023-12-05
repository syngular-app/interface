import React from "react";
import "./style.css";

export const Enviado = (): JSX.Element => {
    return (
        <div className="enviado">
            <div className="div">
                <img className="img" alt="Enviado" src="enviado.png" />
                <p className="text-wrapper">O link foi enviado para o seu e-mail!</p>
                <p className="p">Cheque sua caixa de entrada.</p>
            </div>
        </div>
    );
};
