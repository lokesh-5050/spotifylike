import React from 'react'
import { Link } from 'react-router-dom'
import module from './Card.module.css'
const Card = ({ showsToTry, topMixes, recentlyPlayed, artists, data }) => {
  return (
    <>
      <div className={`${module.showAll}`}>
        <h4>{showsToTry || topMixes || recentlyPlayed || artists}</h4>
        <h6>Show all</h6>
      </div>
      <div className={`${module.cards}`}>
        {data?.map((e, i) => (
          <Link to={`/artist/${e.id}`}>
            <div className={`${module.card}`}>
              <div className={`${module.cover} ${module.artist}`}>
                <img src={e.images[0].url} alt="" />
              </div>
              <h6>{e.name}</h6>
              <p></p>
            </div>
          </Link>
        ))}

      </div>
    </>
  )
}

export default Card