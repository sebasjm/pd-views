import styled, {keyframes} from 'styled-components';

interface ImageProps {
  width: number; 
  height: number; 
  image: string;
}

export const Image = styled.div<ImageProps>`
  background-image: ${({image}) => `url(${image})`};
  width: ${({width}) => width+"px"};
  height: ${({height}) => height+"px"};
  image-rendering: pixelated;

`;

interface AnimationProps extends ImageProps {
  looped?: boolean;
  fps: number;
  frames: number[];
}

const animate = ({frames,width}:AnimationProps) => keyframes`
  ${frames.map((f,i)=> {
    return (100/(frames.length-1)*(i))+`% {background-position-x: ${-width*f}px;}`
  })}
`;

export const Animation = styled(Image)<AnimationProps>`
  animation-timing-function: steps(1,start);
  animation-duration: ${({fps,frames}) => frames.length/fps}s;
  animation-iteration-count: ${({looped}) => looped ? 'infinite' : '1'};
  animation-name: ${props => animate(props)};
  animation-fill-mode: forwards;
`;
