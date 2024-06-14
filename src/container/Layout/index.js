import React from 'react'
import classes from './Layout.module.scss'

import Login from '../../component/Login'
import AlbumContainer from '../../component/AlbumContainer'
import Player from '../../component/Player'
export default function Layout(props) {
  return (
    <div className={classes.wrapper}>
      {
        !props.token
          ?
          <Login />
          :
          <React.Fragment>
            <AlbumContainer
              albumData={props.albumData}
              selectSong={props.selectSong}
            />

            <Player
              nextSong={props.nextSong}
              prevSong={props.prevSong}
              activeSongUrl={props.activeSongUrl} />
          </React.Fragment>
      }
    </div>
  )
}
