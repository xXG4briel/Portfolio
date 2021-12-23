import React from 'react';
import Button from '../Button';

import { Cabecalho } from './styles';

const Header: React.FC = () => {

  const headerComponents: Array<object> =[ 
    { class: '.about' ,text: 'Sobre'}, 
    { class: '.experience' ,text: 'Experiências'}, 
    { class: '.project' ,text: 'Projetos'}, 
    { class: '.contact' ,text: 'Contato'}
  ];

  function goToSection(className: string) {
    let doc: any = document.querySelector(className);
    let height = doc.offsetTop - 70;
    window.scroll({
      top: height,
      behavior:  "smooth"
    });
    window.scrollY = height;
    console.log(height, window.scrollY);
    // if ( (window.scrollY != 0) || ((window.scrollY - 70 ) != height) ) {
    // }
  }
  function toggleMenu() {
    document.querySelector(".header-list")?.classList.toggle("active")
    document.querySelector("#btn-menu")?.classList.toggle("active")
  }

  return (
    <Cabecalho>
      <a href="#">xXG4briel</a>
      
      <div className="header-nav-btn">
        <nav>
          <ul className="header-list">
            { 
              headerComponents.map( ( item: any ) => 
              <li onClick={() => goToSection( item?.class )}>
                <a href={ String(item?.class).replace(".", "#") }>{ item?.text }</a>
              </li>  )
            }
          </ul>
          <button id="btn-menu" onClick={toggleMenu }></button>
        </nav>
        <Button text="Contrate-me"></Button>
      </div>

    </Cabecalho>
  );
};

export default Header;
