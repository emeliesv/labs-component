import React from 'react'
import { Tooltip } from './Tooltip/Tooltip'

export const App = () => {
  return (
      <Tooltip 
      /* title='Tree' */ /* The title will appear automatically when hovering an element */
      url='./tree.png' /* The images need to be in the public folder because it's a static file, which is what is visible to the user */
      alt='image of tree'
      message='Tree'
      />
  )
}
