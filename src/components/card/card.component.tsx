import React from 'react'

import './card.styles.css'

export interface Monster {
  id: string
  name: string
  email: string
}

interface Props {
  monster: Monster
}

export const Card: React.FC<Props> = ({ monster }) => (
  <div className='card-container'>
    <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt='monster'/>
    <h2>{ monster.name }</h2>
    <p>{ monster.email }</p>
  </div>
)
