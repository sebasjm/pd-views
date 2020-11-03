import React from 'react';

import image from '../../assets/sprites/rat.png'
import {Animation, Image} from '../../styles'

const config = {
  width: 16,
  height: 15,
  image
}

export const Static   = () => <Image {...config}/>

export const Idle   = () => <Animation {...config} looped frames={[0,0,0,1]} fps={2} />
export const Run    = () => <Animation {...config} looped frames={[6,7,8,9,10]} fps={10}/>
export const Attack = () => <Animation {...config} frames={[2,3,4,5,0]} fps={15}  />
export const Die    = () => <Animation {...config} frames={[11,12,13,14]} fps={10} />
