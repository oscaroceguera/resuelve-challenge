import React, { Component } from 'react'
import Proptypes from 'prop-types'
import { deburr } from 'lodash/string'

import styles from './styles.module.css'
import cx from 'classnames'

const searchData = (data, value) => {
  if (value.length === 0) {
    return []
  }
  const lowerValue = value.toLowerCase()
  return data.filter(x => deburr(x.desc.toLowerCase()).includes(lowerValue))
}

const baseState = {
  valueSelected: {
    id: '',
    value: undefined
  },
  dataSource: [],
}

class AutoComplete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      dataSource: baseState.dataSource,
      valueSelected: baseState.valueSelected
    }
  }

  onChange = (e) => {
    e && e.preventDefault()
    const { data } = this.state
    const { value } = e.target
    const dataSource = searchData(data, value)
    this.setState({
      dataSource,
      valueSelected: baseState.valueSelected
    })
  }

  onSelectedItem = (e) => {
    e && e.preventDefault()
    const { itemId, itemValue } = e.target.dataset
    this.setState({
      valueSelected: {
        id: itemId,
        value: itemValue
      },
      dataSource: baseState.dataSource
    })
  }

  componentWillUnmount() {
    this.setState({
      data: null,
      dataSource: baseState.dataSource,
      valueSelected: baseState.valueSelected
    })
  }

  render() {
    const { dataSource, valueSelected } = this.state
    const { width, placeholder, required } = this.props

    const TxtFieldClass = cx(styles.AutoCompleteField, {
      [styles.borderBottom]: !required || !!valueSelected.value,
      [styles.borderBottomRequired]: required && !valueSelected.value
    })

    return (
      <div className={styles[width]}>
        <input
          className={TxtFieldClass}
          placeholder={placeholder}
          type='text'
          value={valueSelected.value}
          onChange={this.onChange}
        />
        {dataSource.length > 0 && (
          <ul className={styles.AutoCompleteListContainer}>
            {dataSource.map(i => (
              <li
                className={styles.AutoCompleteListItem}
                onClick={this.onSelectedItem}
                data-item-id={i.id}
                data-item-value={i.desc}
                key={i.id}
              >
                {i.desc}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

AutoComplete.defaultProps = {
  width: 'Medium',
  placeholder: 'placeholder',
  required: false
}

AutoComplete.propTypes = {
  data: Proptypes.array.isRequired,
  width: Proptypes.string,
  placeholder: Proptypes.string,
}

export default AutoComplete