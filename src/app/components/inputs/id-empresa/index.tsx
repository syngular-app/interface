import React from "react";
import Image from "next/image";

import "./style.css";
import iconone from "@/src/assets/images/login/input-empresa/Vector-1.png"
import icontwo from "@/src/assets/images/login/input-empresa/Vector.png"

interface InputEmpresaProps {
    className: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

export const InputEmpresa: React.FC<InputEmpresaProps> = ({ className, onChange }) => {
  return (
    <div className="component">
      <div className="overlap-group">
        <Image className="vector" alt="Vector" src={icontwo} />
        <Image className="img" alt="Vector" src={iconone} />
      </div>
      <input 
        className="w-full h-full rounded-xl text-black pl-12" 
        placeholder="Empresa" 
        type="text" 
        onChange={onChange}
      />
    </div>
  );
};
