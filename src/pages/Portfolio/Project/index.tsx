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
            slidesPerView={2}
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
        </div>
    </Container>
  );
};

export default Project;
