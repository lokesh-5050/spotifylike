import React from 'react'
import { Link } from 'react-router-dom'
import module from './Card.module.css'
import PlaylistCard from './PlaylistCard'
const Card = ({ feaPlyts, newRelse, tracktrue, Recommanded,playlist, data }) => {
  return (
    <>
      {playlist ? '' : (<div className={`${module.showAll}`}>
        <h4>{feaPlyts || newRelse || tracktrue || Recommanded}</h4>
        <h6>Show all</h6>
      </div>)}

      {playlist ? <PlaylistCard /> : ''}
      {feaPlyts ? (<div className={`${module.cards} ${playlist ? module.cards_flex : ''}}`}>
        {data?.map((e, i) => (
          <Link to={`/playlist/${e.id}`}>

            <div className={`${module.card}`}>
              <div className={`${module.cover}`}>
                <img src={e.images[0].url} alt="" />
              </div>
              <h6>{e.name}</h6>
              <p>{e.description.slice(0, 20)}...</p>
            </div>
          </Link>
        ))}

      </div>):newRelse ? (<div className={`${module.cards} ${playlist ? module.cards_flex : ''}}`}>
        {data?.map((e, i) => (
          <Link to={`/playlist/${e.id}`}>

            <div className={`${module.card}`}>
              <div className={`${module.cover}`}>
                <img src={e.images[0].url} alt="" />
              </div>
              <h6>{e.name}</h6>
              <p>{e.artists[0].name}</p>
            </div>
          </Link>
        ))}

      </div>):tracktrue ? (<div className={`${module.cards} ${playlist ? module.cards_flex : ''}}`}>
        {data?.map((e, i) => (
          <Link to={`/playlist/${e.id}`}>

            <div className={`${module.card}`}>
              <div className={`${module.cover}`}>
                <img src={e.album.images[0].url} alt="" />
              </div>
              <h6>{e.album.name}</h6>
              <p>{e.artists[0].name}...</p>
            </div>
          </Link>
        ))}

      </div>):Recommanded ? ((<div className={`${module.cards} ${playlist ? module.cards_flex : ''}}`}>
        {data?.map((e, i) => (
          <Link to={`/playlist/${e.id}`}>

            <div className={`${module.card}`}>
              <div className={`${module.cover}`}>
                <img src={e.album.images[0].url} alt="" />
              </div>
              <h6>{e.album.name.slice(0,19)}...</h6>
              <p>{e.artists[0].name}...</p>
            </div>
          </Link>
        ))}

      </div>)):""}
      
    </>
  )
}

export default Card