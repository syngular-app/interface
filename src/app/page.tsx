'use client'

import React from "react";
import Image from "next/image"
import { useRouter } from 'next/navigation';

import "./style.css";
import logo from "@/src/assets/images/logo.png";

export default function SplashScreen () {
  const router = useRouter();

  React.useEffect(() => {

    const timer = setTimeout(() => {
      router.push('/home');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="splash-screen">
      <Image className="logo" alt="Logo" src={logo} />
    </div>
  );
};
