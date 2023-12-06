import React from "react";
import Image from "next/image";

import "./style.css";
import iconone from "@/src/assets/images/login/input-senha/Vector-1.png"
import icontwo from "@/src/assets/images/login/input-senha/Vector.png"

interface InputSenhaProps {
    className: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

export const InputSenha: React.FC<InputSenhaProps> = ({ className, onChange }) => {
  return (
    <div className="imput-senha">
      <div className="overlap-group">
        <Image className="vector" alt="Vector" src={icontwo} />
        <Image className="img" alt="Vector" src={iconone} />
      </div>
      <input 
        className="w-full h-full rounded-xl text-black pl-12" 
        placeholder="Senha" 
        type="password" 
        onChange={onChange}/>
    </div>
  );
};
