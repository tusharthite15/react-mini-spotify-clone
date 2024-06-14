import React from 'react'
import classes from './Player.module.scss'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css'
export default function Player(props) {
  return (
    <div className={classes.wrapper}>
      <AudioPlayer
        autoPlay
        src={props.activeSongUrl}
        onPlay={e => console.log("onPlay")}
        showLoopControl={false}
        onClickNext={props.nextSong}
        onClickPrevious={props.prevSong}
        showJumpControls={false}
        showSkipControls={true}
      // other props here
      />
    </div>
  )
}
