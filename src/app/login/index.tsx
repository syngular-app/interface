import React from "react";
import { Component } from "./Component";
import { ImputSenha } from "./ImputSenha";
import { ImputUsuRio } from "./ImputUsuRio";
import "./style.css";

export const Login = (): JSX.Element => {
    return (
        <div className="login">
            <div className="div-2">
                <p className="esqueceu-sua-senha">
                    <span className="span">Esqueceu sua senha?</span>
                    <span className="text-wrapper-3">&nbsp;</span>
                    <span className="text-wrapper-4">Clique aqui.</span>
                </p>
                <div className="entrar">
                    <div className="div-wrapper">
                        <div className="text-wrapper-5">Entrar</div>
                    </div>
                </div>
                <ImputUsuRio className="imput-usurio" />
                <ImputSenha className="imput-senha-instance" />
                <img className="logo" alt="Logo" src="logo.png" />
                <Component className="component-2" />
            </div>
        </div>
    );
};
