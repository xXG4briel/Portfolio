import React from 'react';

import { Btn } from '../baseComponentes';

interface Props {
  text: string,
  color?: string,
  method?: Function
}

const Button: React.FC<Props> = ({text, method }) => {
  return (
    <Btn onClick={() => method}>{ text }</Btn>
  );
};

export default Button;
