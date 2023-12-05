import React from "react";
import "./style.css";

export const Ajuda = (): JSX.Element => {
    return (
        <div className="ajuda">
            <div className="div">
                <div className="text-wrapper">E-mail: syngular@gmail.com</div>
                <div className="text-wrapper-2">Telefone: (11) 91234-5678</div>
                <div className="text-wrapper-3">Ajuda</div>
                <img className="message-circle" alt="Message circle" src="message-circle.png" />
                <img className="arrow-left" alt="Arrow left" src="arrow-left.png" />
                <p className="p">Caso precise de suporte, entre em contato conosco:</p>
            </div>
        </div>
    );
};
