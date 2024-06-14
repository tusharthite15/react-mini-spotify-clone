import React from 'react'
import classes from './AlbumCard.module.scss'
export default function index(props) {
  return (
    <div className={classes.wrapper}>
      <img src={props.data.track.album.images[0]['url']} />
      <h2>{props.data.track.name}</h2>
      <p>{
        props.data.track.artists.map((item, index) => {
          return `${item.name}, `
        })
      }</p>
      <button onClick={() => props.selectSong(props.sondId)} className={classes.playBtn} />
    </div>
  )
}
