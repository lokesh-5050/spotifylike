import React from 'react'
import module from './Categories.module.css'
import PlaylistCard from './PlaylistCard'
import { generate } from 'random-hex'
import { useSelector } from 'react-redux'
const Categories = () => {

  //categories data from redux
  const data = useSelector((store) => store.moreData.categories)
  // console.log(data);

  // console.log(generate());
  return (
    <>
      <div className={`${module.categories}`}>

        {data?.map((e, i) => (
          <div className={`${module.categorie}`} key={i} style={{ backgroundColor: generate() }}>
            <h4>{e.name}</h4>
            <div className={`${module.cover}`}>
              <img src={e.icons[0].url} alt="" />
            </div>
          </div>
        ))}


      </div>
    </>
  )
}

export default Categories