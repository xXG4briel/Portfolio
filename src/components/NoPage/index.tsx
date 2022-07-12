import React from 'react';

import { NoPageContainer } from './styles';

interface Props {};


const NoPage: React.FC<Props> = () => {
  return (
    <NoPageContainer>
      <div className="imgs">
        <img className="astrounat" src="/assets/images/astrounat.svg" alt="astrounat" />
        <img className="moon" src="/assets/images/moon.svg" alt="moon" />
      </div>
      <h3>Sem conteúdo disponível</h3>
    </NoPageContainer>
  );
};


export default NoPage;
