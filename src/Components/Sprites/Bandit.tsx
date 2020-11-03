import React from 'react';

import image from '../../assets/sprites/thief.png'
import {Animation, Image} from '../../styles'

const config = {
  width: 12,
  height: 13,
  image
}

export const Static   = () => <Image {...config}/>

export const Idle   = () => <Animation {...config} looped frames={[21,21,21,22,21,21,21,21,22]} fps={1} />
export const Run    = () => <Animation {...config} looped frames={[21,21,23,24,24,25]} fps={15}/>
export const Die    = () => <Animation {...config} frames={[25,27,28,29,30]} fps={10} />
export const Attack = () => <Animation {...config} frames={[31,32,33]} fps={12}  />
