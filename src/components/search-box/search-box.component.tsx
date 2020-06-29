import React, { ChangeEventHandler } from 'react'

import './search-box.styles.css'

interface Props {
  placeholder: string
  handleChange: ChangeEventHandler
}

export const SearchBox: React.FC<Props> = ({ placeholder, handleChange }) => (
  <input
    type='search'
    className='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
)
