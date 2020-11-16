import React from 'react';

import image from '../../assets/sprites/rat.png'
import {Animation, Image} from '../../styles'

const config = {
  width: 16,
  height: 15,
  size: 256,
  image
}

export const Static   = () => <Image {...config}/>

// TODO: replace parameters with original
export const Idle   = () => <Animation {...config} frames={[1]} fps={1}  />
export const Run    = () => <Animation {...config} frames={[1]} fps={1}  />
export const Attack = () => <Animation {...config} frames={[1]} fps={1}  />
export const Die    = () => <Animation {...config} frames={[1]} fps={1}  />
