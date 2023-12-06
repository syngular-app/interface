import React from "react";
import Image from "next/image";

import "./style.css";
import iconone from "@/src/assets/images/login/input-usuario/Vector-1.png"
import icontwo from "@/src/assets/images/login/input-usuario/Vector.png"

interface InputUsuarioProps {
    className: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }


export const InputUsuario: React.FC<InputUsuarioProps> = ({ className, onChange }) => {

  return (
    <div className="imput-usu-rio">
      <Image className="vector" alt="Vector" src={icontwo} />
      <Image className="img" alt="Vector" src={iconone} />
      <input 
        className="w-full h-full rounded-xl text-black pl-12" 
        placeholder="Usuário" 
        type="text" 
        onChange={onChange}
      />
    </div>
  );
};
