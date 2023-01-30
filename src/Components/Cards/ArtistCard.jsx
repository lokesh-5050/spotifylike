import React from 'react'
import module from './Card.module.css'
const Card = ({ showsToTry, topMixes, recentlyPlayed }) => {
  return (
    <>
      <div className={`${module.showAll}`}>
        <h4>{showsToTry || topMixes || recentlyPlayed}</h4>
        <h6>Show all</h6>
      </div>
      <div className={`${module.cards}`}>

        <div className={`${module.card}`}>
          <div className={`${module.cover} ${module.artist}`}>
            <img src="https://i.scdn.co/image/ab67706f00000002b7d25e59b0f3847ac0a66412" alt="" />
          </div>
          <h6>The Chainsmoker Mix</h6>
          <p>About the author</p>
        </div>

        <div className={`${module.card}`}>
          <div className={`${module.cover} ${module.artist}`}>
            <img src="https://i.scdn.co/image/ab67706f00000002b7d25e59b0f3847ac0a66412" alt="" />
          </div>
          <h6>The Chainsmoker Mix</h6>
          <p>About the author</p>
        </div>


        <div className={`${module.card}`}>
          <div className={`${module.cover} ${module.artist}`}>
            <img src="https://i.scdn.co/image/ab67706f00000002b7d25e59b0f3847ac0a66412" alt="" />
          </div>
          <h6>The Chainsmoker Mix</h6>
          <p>About the author</p>
        </div>


        <div className={`${module.card}`}>
          <div className={`${module.cover} ${module.artist}`}>
            <img src="https://i.scdn.co/image/ab67706f00000002b7d25e59b0f3847ac0a66412" alt="" />
          </div>
          <h6>The Chainsmoker Mix</h6>
          <p>About the author</p>
        </div>







      </div>
    </>
  )
}

export default Card