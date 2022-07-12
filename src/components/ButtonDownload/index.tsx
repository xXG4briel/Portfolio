import React from 'react';
import { BtnDownload } from '../baseComponentes';


interface Props {
  text: string;
  src: string;
  color?: string;
  background?: string;
  backgroundHover?: string;
}

const ButtonDownload: React.FC<Props> = ({ text, src, color, background, backgroundHover }) => {
  return (
    <BtnDownload download href={src} color={color} background={ background } backgroundHover={backgroundHover}>{ text }</BtnDownload>
  );
}

export default ButtonDownload;
