import React from "react";

import Typewriter from "typewriter-effect";
import Button from "../../../components/Button";
import ButtonDownload from "../../../components/ButtonDownload";

import { Container } from "./styles";

const About: React.FC = () => {
  const imgs: any[] = [
    {
      name: "Instagram",
      icon: "logo-instagram.svg",
      link: "https://www.instagram.com/geeorg3___/",
    },
    {
      name: "Whatsapp",
      icon: "logo-whatsapp.svg",
      link: "https://api.whatsapp.com/send?phone=5511940878419",
    },
    {
      name: "Linkedin",
      icon: "logo-linkedin.svg",
      link: "https://www.linkedin.com/in/gabriel-george-alves-nicodemus-8aa13b192/",
    },
  ];

  return (
    <Container className="about">
      <main className="about-desktop">
        {/* <section>
          <aside>
            <h1>Gabriel<br/>George</h1>
            <p>Freelancer, Desenvolvedor web e estudante</p>
            <div className="about-midias">
              <div>
                <span>Check out my</span>
                <div className="about-social-midias">
                {imgs.map(({ icon, name, link }) => (
                  <img
                    draggable="false"
                    key={name}
                    src={"/assets/icon/" + icon}
                    alt={name}
                    onClick={() => {
                      window.open(link);
                    }}
                  />
                ))}
                </div>
              </div>
              <div>
                <Button text={"Let's Talk"}></Button>
                <ButtonDownload src="/assets/icon/logo-facebook.svg" color="#0e1e25" text={"Download CV"}></ButtonDownload>
              </div>
            </div>
          </aside>
          <aside></aside>
        </section> */}
        <section className="main-welcome">
          <aside>
            <div>
              <span className="font-small">Bem vindo ao meu mundo.</span>
              <p id="app">
                <Typewriter
                  onInit={(typewriter: any) => {
                    typewriter
                      .typeString(
                        'Olá, me chamo <span class="my-name">Gabriel</span>  sou um estudante e Desenvolvedor Front end'
                      )
                      .start();
                  }}
                />
              </p>
            </div>
            <div className="main-midias-sociais">
              <span className="font-small">Minhas midias sociais</span>
              <div className="main-midias-icons">
                {imgs.map(({ icon, name, link }) => (
                  <img
                    draggable="false"
                    key={name}
                    src={"/assets/icon/" + icon}
                    alt={name}
                    onClick={() => {
                      window.open(link);
                    }}
                  />
                ))}
              </div>
            </div>
          </aside>
        </section>
        <section className="main-img">
          <img
            src="https://avatars.githubusercontent.com/u/62632117?v=4"
            alt="Me"
          />
        </section>
      </main>
      <main className="about-mobile">
        <section className="main-img">
          <aside className="main-media">
            {imgs.map(({ icon, name, link }) => (
              <img
                draggable="false"
                key={name}
                src={String("/assets/icon/" + icon).replace(".svg", "-blue.svg") }
                alt={name}
                onClick={() => {
                  window.open(link);
                }}
              />
            ))}
          </aside>
          <aside className="main-profile">
            <img
              src="https://avatars.githubusercontent.com/u/62632117?v=4"
              alt="Me"
            />
          </aside>
        </section>
        <section className="main-description">
          <div className="description-text">
            <h1>Olá, Eu sou o Gabriel</h1>
            <h2>Desenvolvedor Frontend</h2>
            {/* <p>Sou um programador júnior e tenho contato com tecnologias como Angular, React, Photoshop e Figma.</p> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae. Tristique et egestas quis ipsum suspendisse</p>
          </div>
          <div className="description-btn">
            <Button text="Contrate-me"/>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default About;
