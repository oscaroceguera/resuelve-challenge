import React from 'react'
import PropTypes from 'prop-types'
import Search from './search.svg'
import styles from './styles.module.css'

const SearchBtn = ({ onClick }) => (
  <div className={styles.root} onClick={onClick} >
    <img width='25px' src={Search} />
  </div>
)

SearchBtn.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SearchBtn