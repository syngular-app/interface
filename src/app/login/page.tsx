'use client'
import React, { useState } from "react";
import Image from "next/image"
import { useRouter } from 'next/navigation';

import logo from "@/public/assets/images/Logo.png"

import { InputEmpresa } from "@/src/app/components/inputs/id-empresa";
import { InputSenha } from "@/src/app/components/inputs/senha";
import { InputUsuario } from "@/src/app/components/inputs/usuario";
import "./style.css";

export default function Login () {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [empresa, setEmpresa] = useState('');

    const router = useRouter();
    const pushHome = () => {
        if (usuario && senha && empresa) {
            router.push('/home');
        } else {
            alert('Por favor, preencha todos os campos');
        }
    };

    return (
        <div className="login flex flex-col justify-start items-center h-screen">

            <div className="mt-24 mb-25 justify-center items-center flex flex-col w-full">
                <Image alt="Logo" src={logo} width={130} height={130} />
            </div>

            <div className="flex flex-col mt-32 h-full">

                <div className="entrar space-y-5">
                    <InputUsuario className="imput-usurio" onChange={e => setUsuario(e.target.value)} />
                    <InputSenha className="imput-senha-instance" onChange={e => setSenha(e.target.value)} />
                    <InputEmpresa className="component-2" onChange={e => setEmpresa(e.target.value)} />

                    <div className="div-wrapper" onClick={pushHome}>
                        <div className="text-wrapper-5">Entrar</div>
                    </div>

                </div>

                <p className="esqueceu-sua-senha flex flex-row absolute inset-x-24 bottom-16 items-center">
                    <span className="span">Esqueceu sua senha?</span>
                    <span className="text-wrapper-3">&nbsp;</span>
                    <span className="text-wrapper-4">Clique aqui.</span>
                </p>

            </div>

        </div>
    );
};