import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Modal, Proposal, How, Plans, Doubts, Avaliation } from "./styles";

// import { Books } from "@styled-icons/icomoon/Books";
// import { HeadphonesSoundWave } from "@styled-icons/fluentui-system-filled/HeadphonesSoundWave";
// import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
// import { RateReview } from "@styled-icons/material-sharp/RateReview";

import Audiobook from "./assets/Audiobook-amico.png";
import Course from "./assets/Course.png";
import Ebook from "./assets/Ebook.png";
import Imagination from "./assets/Imagination.png";

import VectorYouGo from "./assets/yougo-vector.png";
import PlaylistAmico from "./assets/playlist.png";

import star_icon from "../../assets/star_icon.png";
import client from "../../assets/novacliente.png";
import clientSecond from "../../assets/novacliente1.png";
import CardDropdownComp from "../../components/CardDropdown/CardDropdown";
import { Check } from "@styled-icons/boxicons-regular/Check";

export default function Home() {
    return(
        <Container>
            <Header/>
            <Modal>
                <div className="text">
                    {/*<img src={VectorYouGo} alt="Vetor YouGO"/>*/}
                    <h1>DESFRUTE CONHECIMENTO ILIMITADO</h1>
                    <p>na palma da sua mão!</p>
                    <button><a href="/contact">EU QUERO!</a></button>
                </div>
                {/* <div className="imgs"> */}
                    <img src={PlaylistAmico} alt="Imagem Playlist"/>
                {/* </div> */}
            </Modal>

            <Proposal>                                
                <p><i>Bem vindo a YouGo!</i></p>                                    
                <h1>Tenha uma <span style={{color: "#9300A0"}}>experiência literária</span> com o nosso APP!</h1>
                
                <div className="icons">
                    <div className="card-text">
                        {/* <Books className="icon" /> */}
                        <img src={Ebook} alt="Ebook" className="icon"/>
                        <h3>+3500<br></br> E-BOOKS</h3>
                        {/*<p>Descubra a facilidade de mergulhar em um oceano de conhecimento com o nosso app. Com ebooks cativantes ler e aprender nunca foi tão envolvente e acessível!</p>*/}
                    </div>
                    <div className="card-text">
                        {/* <HeadphonesSoundWave className="icon" /> */}
                        <img src={Audiobook} alt="Audiobook" className="icon"/>
                        <h3>+ 1000<br></br>AUDIOLIVROS</h3>
                        {/*<p>Perceba as vantagens de ouvir ebooks e resenhas críticas, enquanto aproveita a conveniência e a liberdade de desfrutar do conhecimento onde quer que esteja. </p>*/}
                    </div>
                    <div className="card-text">
                        {/* <LearningApp className="icon" /> */}
                        <img src={Course} alt="Cursos" className="icon" />
                        <h3>+350<br></br>CURSOS</h3>
                        {/*<p>Abra portas para novas oportunidades e expanda seu repertório de habilidades com nossa seleção de cursos capacitantes. Tudo isso ao alcance de suas mãos com o nosso aplicativo.</p>*/}
                    </div>
                    <div className="card-text">
                        {/* <RateReview className="icon" /> */}
                        <img src={Imagination} alt="Imaginação" className="icon" />
                        <h3>+1100<br></br>RESENHAS</h3>
                        {/*<p>Satisfaça sua curiosidade literária e embarque em leituras extraordinárias com agilidade e praticidade do nosso aplicativo. Resenhas para você ler e ouvir e eleve sua experiência literária.</p>*/}
                    </div>
                </div>
            </Proposal>

            <How>
                <h1>Como funciona ?</h1>
                <div className="texts">
                    <div className="text">
                        <h1>1.</h1>
                        <h3>Assine o nossos plano</h3>
                        <p>Escolha o plano visitando um dos nossos pontos de venda</p>
                    </div>
                    <div className="text">
                        <h1>2.</h1>
                        <h3>Baixe nosso aplicativo</h3>
                        <p>Acesse a loja de aplicativos do seu celular e baixe o nosso APP</p>
                    </div>
                </div>
                <div className="texts">
                    <div className="text">
                        <h1>3.</h1>
                        <h3>Faça o login</h3>
                        <p>Entre com o seu usuário e senha</p>
                    </div>
                    <div className="text">
                        <h1>4.</h1>
                        <h3>Acesse o melhor conteúdo</h3>
                        <p>Ouça e leia resenhas, aprenda uma nova habilidade com os nossos cursos e ebooks</p>
                    </div>
                </div>
            </How>

            <Plans>
                <h1 className="title">Conhecimento digital para o mundo real!</h1>
                <div className="container">
                {/*<div className="card second-card">
                        <h3>Plano Semestral</h3>
                        <h2>6x</h2>
                        <h1>R$ 129,90</h1>
                        <p><Check width="30px" style={{color:"#CA60C6"}}/>Acesso ao conteúdo por 6 meses.</p>
                        <p><Check width="30px" style={{color:"#CA60C6"}}/>Suporte especializado.</p>
                        
    </div>*/}
                    <div className="card">
                        <h3>POR APENAS</h3>
                        <div class='left'>
                        <span class='currency'>R$:</span>
                        <h1 class='center'>98,90</h1>
                        <span class='right'>/Mês</span>
                        </div>
                        
                        <p><Check width="30px" style={{color:"#fff"}}/>Acesso a todo o conteúdo por 1 ano.</p>
                        <p><Check width="30px" style={{color:"#fff"}}/>Suporte especializado.</p>
                        <button><a href="/contact">EU QUERO!</a></button> 
                    </div>
                    
                </div>
            </Plans>

            <Doubts>
                <h1>Dúvidas</h1>
                <CardDropdownComp title={"O que é a You Go?"} description={"Somos um super aplicativo para te impulsionar a ir mais longe. Nosso objetivo é ver você aprimorando as suas habilidades. Para isso reunimos vários cursos na nossa plataforma, resenhas dos livros mais aclamados do mundo, para você ler e ouvir de onde estiver, e um compilado de e-books incríveis ao alcance da sua mão."}/>
                <CardDropdownComp title={"Como tenho acesso a You Go?"} description={"Assine o plano visitando uma de nossas lojas. Entre com seu usuário utilizando a opção You Go como parceiro. Acesse a loja de aplicativos do seu celular e baixe os APPs. Leia livros, revistas, quadrinhos e pratique os melhores treinos."}/>
                <CardDropdownComp title={"Por que eu devo assinar a You Go?"} description={"Porque nós vamos te ajudar a chegar no seu objetivo: Ser produtivo e ser independente para aprender novas habilidades de qualquer lugar do mundo. Tempo é vida! E é isso que queremos que você tenha."}/>
                <CardDropdownComp title={"Como funciona nossos planos?"} description={"Por apenas R$: 98,90 mensais você tem acesso a todo o conteúdo por 1 ano e suporte especializado."}/>
            </Doubts>

            <Avaliation>
                <h1>Avaliações de Clientes</h1>
                <div className="container-card">
                    <div className="card">
                        <img src={client} alt="Cliente" />
                        <h2>Julia</h2>
                        <h3>Assinante a 6 meses.</h3>
                        <img className="stars" src={star_icon} alt="Estrelas" />
                        <p> Impressionante como a plataforma é dinâmica e fácil de usar. Consigo consumir muito conteúdo em pouquissímo tempo. Já aprendi várias habilidades com os cursos e estou amando! </p>
                    </div>
                    <div className="card">
                        <img src={clientSecond} alt="Cliente" />
                        <h2>Isabella</h2>
                        <h3>Assinante a 1 ano.</h3>
                        <img className="stars" src={star_icon} alt="Estrelas" />
                        <p> Eu sou apaixonada pelas resenhas críticas, a facilidade de ouvir de qualquer lugar me encantou! Encontro resenha de vários best sellers que estavam na minha lista de livros, porém não conseguia ler por falta de tempo!</p>
                    </div>
                </div>


            </Avaliation>

            <Footer/>
        </Container>
    );
};