import React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

import { Container } from './styles';

const Project: React.FC = () => {
  const projects: any = [
    { 
        name: 'Projeto', 
        image: './assets/images/undraw_void.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
    },
    { 
        name: 'Projeto', 
        image: './assets/images/undraw_void.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
    },
    { 
        name: 'Projeto', 
        image: './assets/images/undraw_void.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
    },
    { 
        name: 'Projeto', 
        image: './assets/images/undraw_void.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
    },
    { 
        name: 'Projeto', 
        image: './assets/images/undraw_void.svg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis dignissim lectus mauris etiam. Pellentesque parttitor sit ultrices...' 
    }
]
  return (
    <Container className="project">
      <h1>Projetos</h1>
        <div className="project-container">
            <a href="https://ignitelab-dfd35.web.app/" target="_blank" className="project-card" title='Clique para ver o projeto'>
                <h3>Ignite Lab</h3>
                <img src="./assets/images/IgniteLab.jpeg" alt="logo"/>
                <div className="project-text-project">
                    <p>O Ignite Lab, projeto Ignite Lab foi iniciado um iniactiva da empresa <a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a> de fazer de que desenvolvedores tenham acesso a novas tecnologias</p>
                </div>
            </a>
            { projects.map( (project: any) => 
            <aside className="project-card" title='Clique para ver o projeto'>
                <h3>{project?.name}</h3>
                <img src={project?.image} alt="logo"/>
                <div className="project-text-project">
                    <p>{project?.text}</p>
                </div>
            </aside>
            ) }
        </div>
        <div className="project-swiper-container">
            <Swiper
            spaceBetween={50}
            slidesPerView={1.6}
            >
                { projects.map( (r: any  ) => 
                <SwiperSlide>
                    <div className="project-card-swiper">
                        <img src={ r?.image } />
                        <div className="project-card-description">
                            <span>{ r?.text }</span>
                        </div>
                    </div>
                </SwiperSlide>
                ) }
            </Swiper>
            <div className="project-swiper-text">
                <p>Esses são alguns dos meus projetos desenvolvidos ❤</p>
            </div>
        </div>
    </Container>
  );
};

export default Project;
