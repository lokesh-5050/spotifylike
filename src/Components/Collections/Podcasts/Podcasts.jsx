import React from 'react'
import Card from '../../Cards/Card'
import Button from '../../Ui/Buttons/Button'
import module from './Podcasts.module.css'
const Podcasts = ({ albums }) => {
  return (
    <>
      <div className={`${module.wrap} `} >
        <div className={`${module.showInMiddle} `}>
          {albums ? (<svg role="img" height="60" fill='white' width="60" aria-hidden="true" data-testid="album" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path><path d="M12 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"></path></svg>) : (<svg role="img" height="60" width="60" fill='white' aria-hidden="true" data-testid="show" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M12 3a9 9 0 00-7.046 14.6L3.42 18.886A10.954 10.954 0 011 12C1 5.925 5.925 1 12 1s11 4.925 11 11a10.96 10.96 0 01-2.421 6.886L19.046 17.6A9 9 0 0012 3z"></path><path d="M12 7a4 4 0 00-4 4v3a4.002 4.002 0 003 3.874v1.965l-2.715 2.278a.5.5 0 00.322.883h6.786a.5.5 0 00.322-.883L13 19.839v-1.965c1.725-.444 3-2.01 3-3.874v-3a4 4 0 00-4-4zm2 7a2 2 0 01-4 0v-3a2 2 0 114 0v3z"></path></svg>)}

          <h2>Follow Your First Podcasts</h2>
          <h6>Follow podcasts you like by tapping the follow button.</h6>
          <Button />
        </div>
        {albums ? (<div className={`${module.albums}`}>h</div>) : (<div className={`${module.pcasts}`}>
          <h4>Top podcasts</h4>
          <Card />
        </div>)}


      </div>
    </>
  )
}

export default Podcasts