import React from "react";
import "./style.css";

export const Histrico = (): JSX.Element => {
    return (
        <div className="histrico">
            <div className="div">
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="navbar">
                        <div className="text-wrapper">S</div>
                        <div className="text-wrapper">T</div>
                        <div className="text-wrapper">Q</div>
                        <div className="text-wrapper">Q</div>
                        <div className="text-wrapper">S</div>
                        <div className="text-wrapper">S</div>
                        <div className="text-wrapper">D</div>
                    </div>
                    <div className="navbar-2">
                        <div className="text-wrapper">1</div>
                        <div className="text-wrapper">2</div>
                        <div className="text-wrapper">3</div>
                        <div className="text-wrapper">4</div>
                        <div className="text-wrapper">5</div>
                        <div className="text-wrapper">6</div>
                        <div className="text-wrapper">7</div>
                    </div>
                </div>
                <p className="out">
                    <span className="span">Out </span>
                    <span className="text-wrapper-2">2023</span>
                </p>
                <img className="calendar" alt="Calendar" src="calendar.png" />
                <img className="line" alt="Line" src="line-1.svg" />
                <img className="arrow-left" alt="Arrow left" src="arrow-left.svg" />
                <div className="overlap-group">
                    <img className="img" alt="Line" src="line-2.svg" />
                    <img className="ellipse" alt="Ellipse" src="ellipse-3.png" />
                    <img className="ellipse-2" alt="Ellipse" src="ellipse-4.png" />
                    <img className="ellipse-3" alt="Ellipse" src="ellipse-5.png" />
                    <img className="ellipse-4" alt="Ellipse" src="ellipse-6.png" />
                    <img className="ellipse-5" alt="Ellipse" src="ellipse-7.png" />
                    <img className="ellipse-6" alt="Ellipse" src="ellipse-8.png" />
                </div>
                <div className="text-wrapper-3">06/10</div>
                <div className="text-wrapper-4">05/10</div>
                <div className="text-wrapper-5">04/10</div>
                <div className="text-wrapper-6">03/10</div>
                <div className="text-wrapper-7">02/10</div>
                <div className="text-wrapper-8">01/10</div>
                <div className="entrada-sa-da">Entrada: 07h00&nbsp;&nbsp;Saída: 18h00</div>
                <div className="entrada-h-sa-da">Entrada: 07h15&nbsp;&nbsp;Saída: 18h02</div>
                <div className="entrada-sa-da-2">Entrada: 07h12&nbsp;&nbsp;Saída: 17h56</div>
                <div className="entrada-sa-da-3">Entrada: 08h03&nbsp;&nbsp;Saída: 19h20</div>
                <div className="entrada-sa-da-4">Entrada: 07h40&nbsp;&nbsp;Saída: 18h23</div>
                <div className="entrada-sa-da-5">Entrada: 07h55&nbsp;&nbsp;Saída: 18h04</div>
            </div>
        </div>
    );
};
