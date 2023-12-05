import React from "react";
import "./style.css";

export const EsqueciASenha = (): JSX.Element => {
    return (
        <div className="esqueci-a-senha">
            <div className="div">
                <p className="text-wrapper">Digite seu e-mail para enviarmos um link de recuperação:</p>
                <div className="overlap">
                    <div className="text-wrapper-2">E-mail</div>
                </div>
                <div className="entrar">
                    <div className="overlap-group">
                        <div className="text-wrapper-3">Enviar</div>
                    </div>
                </div>
                <div className="text-wrapper-4">Esqueceu sua senha?</div>
                <img className="arrow-left" alt="Arrow left" src="arrow-left.png" />
            </div>
        </div>
    );
};
