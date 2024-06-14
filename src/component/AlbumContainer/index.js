import React from 'react'
import classes from './AlbumContainer.module.scss'

// Import  Components
import AlbumCard from '../AlbumCard'

export default function index(props) {
  return (
    <div className={classes.wrapper}>
      {
        props.albumData.map((item, index) => (
          <AlbumCard
            key={index}
            data={item}
            sondId={index}
            selectSong={props.selectSong}
          />
        ))
      }
      {/* {
        Array(12).fill().map((_, i) => (
          <AlbumCard />
        ))
      } */}
    </div>
  )
}
