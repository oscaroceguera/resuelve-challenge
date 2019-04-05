import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import Autocomplete from '../components/Autocomplete'
import Card from '../components/Card'
import SearchBtn from '../components/SearchBtn'


import styles from './styles.module.css'

const initialState = {
  loading: false,
  error: null,
  films: [],
}
class App extends Component {
  state = initialState

  async componentDidMount () {
    this.setState({
      loading: true,
      error: null
    })

    try {

      const response = await fetch('https://ghibliapi.herokuapp.com/films')
      const films = await response.json()

      this.setState({
        loading: false,
        films
      })
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    }
  }


  render () {
    const {loading, error, films} = this.state

    return (
      <div>
        <header className={styles.header}>
          <h1>Ghubli films</h1>
        </header>
        <div className={styles.searchBar}>
          <Autocomplete
            placeholder='Film'
            width='Large'
          />
          <SearchBtn />
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
