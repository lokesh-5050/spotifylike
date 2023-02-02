import React from 'react'
import module from './PlayBtn.module.css'
import { GrPlayFill } from 'react-icons/gr'
const PlayBtn = () => {
  return (
    <>
        <div className={`${module.playBtn}`}>
            <GrPlayFill/>
        </div>
    </>
  )
}

export default PlayBtn