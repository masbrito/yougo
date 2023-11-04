import React from "react";
import { HeaderD } from "./styles";
import logo_branca from "../../assets/logo_branca.png";

export default function Header() {
    return(
        <HeaderD>
            <img src={logo_branca} alt="Logotipo Branca"/>
            <div className="links">
                <a href="/">INÍCIO</a>
                <a href="/about">SOBRE NÓS</a>
                <a href="/contact">CONTATO</a>
                <a href="/tutorial-access">TUTORIAL DE ACESSO</a>
                <a href="/password">VOUCHER DE LEITURA</a>
            </div>
        </HeaderD>
    );
};