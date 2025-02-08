import React from 'react'
import {StartCards} from './StartCards'

export const Grid = () => {
  return<div 
  className='px-4 gap-3 grid-cols-12 '
  >
    <StartCards />
  </div>;
}