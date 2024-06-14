import React from 'react'
import classes from './Login.module.scss'
import { authEndpoint, clientId, redirectUri, scopes } from "../../utils/config";
export default function index() {
  return (
    <div className={classes.wrapper}>
      <h1>Welcome to Mini Spotify Player</h1>
      <a
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
          "%20"
        )}&response_type=token&show_dialog=true`}
      >
        <button>Login</button>
      </a>

    </div>
  )
}
