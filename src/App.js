import React, { Component } from 'react'
import Layout from './container/Layout'
import './App.css'
import hash from './utils/hash'
import {
  SpotifyService
} from './_services'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: null,
      data: [],
      activeSongUrl: null,
      activeSongIndex: 0
    }
  }

  componentDidMount() {
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token
      }, () => {
        this.getSongsData(_token);
      });

    }

  }

  getSongsData = () => {
    SpotifyService.getPlaylistData(this.state.token)
      .then(reponse => {
        console.log(reponse);
        let data = reponse.tracks.items
        let activeSongUrl = reponse.tracks.items[0]['track']['preview_url']
        console.log(activeSongUrl);
        this.setState({ data, activeSongUrl })
      })
  }

  selectSong = (index) => {
    let SongUrl = this.state.data[index]['track']['preview_url']
    this.setState({ activeSongUrl: SongUrl, activeSongIndex: index })
  }

  prevSong = () => {
    if (this.state.activeSongIndex === 0) {
      let lastItem = this.state.data.length
      let SongUrl = this.state.data[lastItem]['track']['preview_url']
      this.setState({ activeSongUrl: SongUrl, activeSongIndex: lastItem })
    } else {
      let SongUrl = this.state.data[this.state.activeSongIndex - 1]['track']['preview_url']
      this.setState({ activeSongUrl: SongUrl, activeSongIndex: this.state.activeSongIndex - 1 })
    }
  }

  nextSong = () => {
    if (this.state.activeSongIndex === this.state.data.length) {
      let SongUrl = this.state.data[0]['track']['preview_url']
      this.setState({ activeSongUrl: SongUrl, activeSongIndex: 0 })
    } else {
      let SongUrl = this.state.data[this.state.activeSongIndex + 1]['track']['preview_url']
      this.setState({ activeSongUrl: SongUrl, activeSongIndex: this.state.activeSongIndex + 1 })
    }
  }

  setToken = (token) => {
    this.setState({ token: token })
  }

  render() {
    return (
      <Layout
        token={this.state.token}
        setToken={this.setToken}
        albumData={this.state.data}
        nextSong={this.nextSong}
        prevSong={this.prevSong}
        selectSong={this.selectSong}
        activeSongUrl={this.state.activeSongUrl} />
    )
  }
}
