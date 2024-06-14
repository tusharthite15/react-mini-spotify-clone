import axios from 'axios'

const getPlaylistData = (token) => {
  return axios.get("https://api.spotify.com/v1/playlists/37i9dQZF1DX0ieekvzt1Ic", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err);
    })
}

export const SpotifyService = {
  getPlaylistData
}