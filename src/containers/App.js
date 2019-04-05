import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import Autocomplete from '../components/Autocomplete'
import Card from '../components/Card'
import SearchBtn from '../components/SearchBtn'


import styles from './styles.module.css'

const URL = 'https://ghibliapi.herokuapp.com/films'

const initialState = {
  loading: false,
  error: null,
  films: [],
  filmsTitles: [],
  filmToSearch: {}
}
class App extends Component {
  state = initialState

  async componentDidMount () {
    this.load()
  }

  async load () {
    this.setState({
      loading: true,
      error: null
    })

    try {
      const response = await fetch(URL)
      const films = await response.json()

      const filmsTitles = films.map(item => ({ id: item.id, desc: item.title }))

      this.setState({
        loading: false,
        filmsTitles,
        films
      })
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    }
  }

  handleItemSelected = filmToSearch => {
    this.setState({
      filmToSearch
    })
  }

  handleKeypress = e => {
    if (e.key === 'Enter') {
      this.handleSearchFilm(e)
    }
  }
 
  handleSearchFilm = async (e) => {
    e && e.preventDefault()

    this.setState({
      loading: true,
      error: null
    })

    try {
      const { id } = this.state.filmToSearch
  
      if (!id) {
        return this.load()
      }

      const response = await fetch(`${URL}/${id}`)
      const films = await response.json()

      this.setState({
        loading: false,
        films: [films],
        filmToSearch: {}
      })
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    }
  }

  componentWillUnmount () {
    this.setState(initialState)
  }

  render () {
    const { loading, error, films, filmsTitles } = this.state

    return (
      <div>
        <header className={styles.header}>
          <h1>Ghubli films</h1>
        </header>
        <div className={styles.searchBar}>
          <Autocomplete
            data={filmsTitles}
            placeholder='Film'
            width='Large'
            required={false}
            handleItemSelected={this.handleItemSelected}
            onKeyPress={this.handleKeypress}
          />
          <SearchBtn onClick={this.handleSearchFilm} />
        </div>
        <div className={styles.films}>
          {loading && (
            <ReactLoading
              type='bubbles'
              color='#2C3B73'
              height='10%'
              width='10%'
            />)}
          {!!error && <p>ERROR!</p>}
          {!error && films.map(item => {
            return <Card key={item.id} data={item} />
          })}
        </div>
      </div>
    )
  }
}

export default App
