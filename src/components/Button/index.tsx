import React from 'react';

import { Btn } from './styles';

interface Props {
  text: string
  method?: Function
}

const Button: React.FC<Props> = ({text, method }) => {
  return (
    <Btn onClick={() => method}>{ text }</Btn>
  );
};

export default Button;
