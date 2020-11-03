import React from 'react';

import image from '../../assets/sprites/thief.png'
import {Animation, Image} from '../../styles'

const config = {
  width: 12,
  height: 13,
  image
}

export const Static   = () => <Image {...config}/>

export const Idle   = () => <Animation {...config} looped frames={[0,0,0,1,0,0,0,1]} fps={1} />
export const Run    = () => <Animation {...config} looped frames={[0,0,2,3,3,4]} fps={15}/>
export const Die    = () => <Animation {...config} frames={[5,6,7,8,9]} fps={10} />
export const Attack = () => <Animation {...config} frames={[10,11,12,0]} fps={12}  />
