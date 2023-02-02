import React from 'react'
import { Link } from 'react-router-dom'
import module from './Card.module.css'
import PlaylistCard from './PlaylistCard'
const Card = ({ showsToTry, topMixes, recentlyPlayed, playlist }) => {
  return (
    <>
      {playlist ? '' : (<div className={`${module.showAll}`}>
        <h4>{showsToTry || topMixes || recentlyPlayed}</h4>
        <h6>Show all</h6>
      </div>)}

      <div className={`${module.cards} ${playlist ? module.cards_flex : ''}}`}>
        {playlist ? <PlaylistCard /> : ''}

        <Link to='/playlist/64862347'>

          <div className={`${module.card}`}>
            <div className={`${module.cover}`}>
              <img src="https://i.scdn.co/image/ab67706f00000002b7d25e59b0f3847ac0a66412" alt="" />
            </div>
            <h6>The Chainsmoker Mix</h6>
            <p>About the author</p>
          </div>
        </Link>

        <div className={`${module.card}`}>
          <div className={`${module.cover}`}>
            <img src="https://i.scdn.co/image/ab67706f00000002b7d25e59b0f3847ac0a66412" alt="" />
          </div>
          <h6>The Chainsmoker Mix</h6>
          <p>About the author</p>
        </div>

        <div className={`${module.card}`}>
          <div className={`${module.cover}`}>
            <img src="https://i.scdn.co/image/ab67706f00000002b7d25e59b0f3847ac0a66412" alt="" />
          </div>
          <h6>The Chainsmoker Mix</h6>
          <p>About the author</p>
        </div>

        <div className={`${module.card}`}>
          <div className={`${module.cover}`}>
            <img src="https://i.scdn.co/image/ab67706f00000002b7d25e59b0f3847ac0a66412" alt="" />
          </div>
          <h6>The Chainsmoker Mix</h6>
          <p>About the author</p>
        </div>

        <div className={`${module.card}`}>
          <div className={`${module.cover}`}>
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