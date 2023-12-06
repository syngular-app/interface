import React from "react";
import Image from "next/image";

// import { Component } from "./Component";
import "./style.css";

export default function Config () {
    return (
        <div className="config">
            <div className="div-2">
                <div className="text-wrapper">Notificações</div>
                <div className="text-wrapper-2">Idioma</div>
                <div className="text-wrapper-3">Sair</div>
                <Image className="log-out" alt="Log out" src="log-out.png" />
                <div className="text-wrapper-4">Configurações</div>
                <Image className="bell" alt="Bell" src="bell.png" />
                <Image className="globe" alt="Globe" src="globe.png" />
                <Image className="settings" alt="Settings" src="settings.png" />
                <Image className="arrow-left" alt="Arrow left" src="arrow-left.png" />
                <Image className="chevron-down" alt="Chevron down" src="chevron-down.png" /> */
                {/* <Component className="component-1" ellipseClassName="component-instance" property1="group-31" /> */}
            </div>
        </div>
    );
};
