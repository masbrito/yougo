import React from "react";
import { FooterD } from "./styles";
import icon_facebook from "../../assets/icon_facebook.png";
import icon_instagram from "../../assets/icon_instagram.png";
import icon_whats from "../../assets/icon_whats.png";
import threads from "../../assets/threads.png";
// import icon_gmail from "../../assets/icon_gmail.png";

//import { Facebook } from "@styled-icons/entypo-social/Facebook";
//import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
//import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";

import google_play from "../../assets/google_play.png";
import app_store from "../../assets/app_store.png";
import logo from "../../assets/logo.png";
import logo_reduzida from "../../assets/logo_reduzida.png";

export default function Footer() {
    return(
        <FooterD>
            <div className="superior">
                <div className="direitaSuperior">
                    <img style={{padding: "10px 0px"}} src={logo} alt="Logo YouGO!" />
                    <p>CNPJ: 21.506.509/0001-80</p>
                    <p>Ed. Cirilo Rio, 3º andar - Campina</p>
                    <button><a href="https://goo.gl/maps/7PqY4hjjFRrJY7Gq9">ABRIR NO MAPS</a></button>
                </div>
                <div className="centroSuperior">
                    <h3>Navegação do Site</h3>
                    <nav>
                        <a href="/">Início</a><br/>
                        <a href="/about">Sobre Nós</a><br/>
                        <a href="/contact">Contato</a><br/>
                        <a href="/tutorial-access">Tutorial de Acesso</a><br/>
                        <a href="/password">Voucher de Leitura</a>
                    </nav>
                </div>
                <div className="esquerdaSuperior">
                    <h3>Informações para Contato</h3>
                    <p style={{fontWeight: 500}}>(11) 91555-5376</p>
                    <p style={{fontWeight: 500}}>atendimentoaocliente@yougoapp.com.br</p>
                    <p style={{fontSize: 11}}>Já é um associado? Baixe nosso app.</p>
                    <a href="https://play.google.com/store/apps/details?id=com.yougo">
                        <img src={google_play} alt="Imagem"/>
                    </a>
                    <a href="www.google.com"><img src={app_store} alt="Imagem"/></a>
                </div>
            </div>
            <div className="inferior">
                <img src={logo_reduzida} alt="Logo YouGO!" />
                <div className="centroInferior">

                    {/*<a href="https://www.facebook.com/profile.php?id=100088731307287&mibextid=LQQJ4d"><Facebook style={{width: "2.3%", color: "#000000", marginRight: "10px"}}/></a>*/}
                    {/*<a href="https://www.instagram.com/yougoappoficial/?hl=pt-br"><Instagram style={{width: "2.3%", color: "#000000", marginRight: "10px"}}/></a>*/}
                    {/*<a href="http://bit.ly/3WS5YU8"><Whatsapp style={{width: "2.3%", color: "#000000", marginRight: "10px"}}/></a>*/}
                    
                   
                    {/* <a href="/"><img src={icon_facebook} alt="Icone" /></a>
                    <a href="/"><img src={icon_instagram} alt="Icone" /></a>
                    <a href="/"><img src={icon_whats} alt="Icone" /></a>
                    <a href="/"><img src={icon_gmail} alt="Icone" /></a> */}

                    <a href="https://www.facebook.com/profile.php?id=100088731307287&mibextid=LQQJ4d"><img src={icon_facebook} alt="Icone" style={{width: "4%", color: "#000000", marginRight: "10px"}}/></a>
                    <a href="https://www.instagram.com/yougoappoficial/?hl=pt-br"><img src={icon_instagram} alt="Icone" style={{width: "4%", color: "#000000", marginRight: "10px"}}/></a>
                    <a href="http://bit.ly/3WS5YU8"><img src={icon_whats} alt="Icone" style={{width: "4%", color: "#000000", marginRight: "10px"}} /></a>
                    <a href="https://www.threads.net/@yougoappoficial?igshid=MzRlODBiNWFlZA=="><img src={threads} alt="Icone" style={{width: "3.5%", color: "#000000", marginRight: "10px"}}/></a>
                </div>
                <p>Termos de Serviço e Privacidade</p>
            </div>
        </FooterD>
    );
};