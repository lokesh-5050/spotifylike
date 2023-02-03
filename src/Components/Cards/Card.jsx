import React from 'react'
import { Link } from 'react-router-dom'
import module from './Card.module.css'
import PlaylistCard from './PlaylistCard'
const Card = ({ showsToTry, topMixes, recentlyPlayed, playlist, data }) => {
  return (
    <>
      {playlist ? '' : (<div className={`${module.showAll}`}>
        <h4>{showsToTry || topMixes || recentlyPlayed}</h4>
        <h6>Show all</h6>
      </div>)}

      <div className={`${module.cards} ${playlist ? module.cards_flex : ''}}`}>
        {playlist ? <PlaylistCard /> : ''}
        {data?.map((e, i) => (
          <Link to={`/playlist/${e.id}`}>

            <div className={`${module.card}`}>
              <div className={`${module.cover}`}>
                <img src={e.images[0].url} alt="" />
              </div>
              <h6>{e.name}</h6>
              <p>About the author</p>
            </div>
          </Link>
        ))}



        {/* <div className={`${module.card}`}>
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
        </div> */}



      </div>
    </>
  )
}

export default Card