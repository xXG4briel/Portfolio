import React from "react";

import Typewriter from 'typewriter-effect';

import { Container } from "./styles";

const About: React.FC = () => {
  const imgs: any[] = [
    {
      name: "Facebook",
      icon: "logo-facebook.svg",
      link: "https://www.facebook.com/gabriel.george.7965/",
    },
    {
      name: "Instagram",
      icon: "logo-instagram.svg",
      link: "https://www.instagram.com/geeorg3___/",
    },
    {
      name: "Linkedin",
      icon: "logo-linkedin.svg",
      link: "https://www.linkedin.com/in/gabriel-george-alves-nicodemus-8aa13b192/",
    },
  ];

  return (
    <Container className="about">
      <main>
        <section className="main-welcome">
          <aside>
            <div>
              <span className="font-small">Bem vindo ao meu mundo.</span>
              {/* <p>Olá, me chamo <span>Gabriel</span>  sou um estudante e Desenvolvedor Front end</p> */}
              <p id="app">
                            <Typewriter
                                onInit={(typewriter: any) => {
                                    typewriter.typeString('Olá, me chamo <span class="my-name">Gabriel</span>  sou um estudante e Desenvolvedor Front end')
                                    .pauseFor(2500)
                                    .deleteChars(9)
                                    typewriter.typeString('Full Stack?')
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
          {/* <div>
                    </div> */}
        </section>
      </main>
      {/* <div className="home-page-container">
            <main>
            </main>
        </div> */}
    </Container>
  );
};

export default About;