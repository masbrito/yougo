import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Container, Destribution } from "./styles";

import Player from "../../components/Player/Player";

import HeadPhone from "./assets/headphone.png";

import Antifragil from "../../data/assets/antifragil.png";
import Comece from "../../data/assets/comece.png";
import Contagio from "../../data/assets/contagio.png";
import Opoder from "../../data/assets/opoder.png";
import Ossegredos from "../../data/assets/ossegredos.png";
import Outlander from "../../data/assets/Outlander.png";
import Quemevoce from "../../data/assets/Quemevoce.png";
import Stevejobs from "../../data/assets/stevejobs.png";

export default function Reading() {
    return(
        <Container>
            <Header />

            <Destribution>

                <div className="text-sup">
                    <img src={HeadPhone} alt="Head Phone"/>
                    <h2>Sinta a experiência de fazer parte do nosso universo!</h2>
                </div>

                <div className="container images">
                    <img src={Antifragil} alt="Capa Antifragil" />
                    <img src={Comece} alt="Capa Comece" />
                    <img src={Contagio} alt="Capa Contagio" />
                    <img src={Opoder} alt="Capa Opoder" />
                    <img src={Ossegredos} alt="Capa Ossegredos" />
                    <img src={Outlander} alt="Capa Outlander" />
                    <img src={Quemevoce} alt="Capa Quemevoce" />
                    <img src={Stevejobs} alt="Capa Stevejobs" />

                </div>

                <div className="card-container">
                    <div className="card-player">
                        <Player/>
                    </div>
                </div>
            </Destribution>

            <Footer />
        </Container>
    );
};