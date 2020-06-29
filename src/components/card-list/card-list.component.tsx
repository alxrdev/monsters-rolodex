import React from 'react'

import { Card, Monster } from '../card/card.component'

import './card-list.styles.css'

interface Props {
  monsters: Array<Monster>
}

export const CardList: React.FC<Props> = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
)
