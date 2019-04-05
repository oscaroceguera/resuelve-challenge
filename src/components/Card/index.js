import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const Card = ({ 
  data: { title, description, director, producer, release_date }
}) => (
  <div className={styles.container}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.info}>
      <div className={styles.infoItem}>
        <p className={styles.infoItemTitle}>description</p>
        <p className={styles.infoItemDesc}>{description}</p>
      </div>
      <div className={styles.infoItemFlex}>
        <p className={styles.infoItemTitle}>director</p>
        <p className={styles.infoItemDescFlex}>{director}</p>
      </div>
      <div className={styles.infoItemFlex}>
        <p className={styles.infoItemTitle}>producer</p>
        <p className={styles.infoItemDescFlex}>{producer}</p>
      </div>
      <div className={styles.infoItemFlex}>
        <p className={styles.infoItemTitle}>release</p>
        <p className={styles.infoItemDescFlex}>{release_date}</p>
      </div>
    </div>
  </div>
)

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card