import React from "react";
import Image from "next/image"

import "./style.css";
import qrcode from "@/src/assets/images/home/qrcode.png";
import chevron from "@/src/assets/images/home/chevron-left.png"
import menu from "@/src/assets/images/home/align-justify.png"

export default function Home () {
  return (
    <div className="home">
      <div className="div">
        <div className="overlap-group">
          <div className="text-wrapper">Escaneie o QR Code</div>
          <div className="overlap">
            <Image className="q-rcode" alt="Q rcode" src={qrcode} />
          </div>
          <div className="text-wrapper-2">24/11/2023 - 19h00</div>
          <p className="p">Rua Borges Figueiredo, Mooca - SP</p>
        </div>
        <Image className="align-justify" alt="Align justify" src={menu} />
      </div>
    </div>
  );
};
