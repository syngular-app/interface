import React from "react";
import { Component } from "./Component";
import "./style.css";

export const Config = (): JSX.Element => {
    return (
        <div className="config">
            <div className="div-2">
                <div className="text-wrapper">Notificações</div>
                <div className="text-wrapper-2">Idioma</div>
                <div className="text-wrapper-3">Sair</div>
                <img className="log-out" alt="Log out" src="log-out.png" />
                <div className="text-wrapper-4">Configurações</div>
                <img className="bell" alt="Bell" src="bell.png" />
                <img className="globe" alt="Globe" src="globe.png" />
                <img className="settings" alt="Settings" src="settings.png" />
                <img className="arrow-left" alt="Arrow left" src="arrow-left.png" />
                <img className="chevron-down" alt="Chevron down" src="chevron-down.png" />
                <Component className="component-1" ellipseClassName="component-instance" property1="group-31" />
            </div>
        </div>
    );
};
