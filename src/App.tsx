import React, { ChangeEvent } from 'react'
import './App.css'

import { CardList } from './components/card-list/card-list.component'
import { Monster } from './components/card/card.component'
import { SearchBox } from './components/search-box/search-box.component'

interface Props {}

interface States {
  monsters: Array<Monster>
  searchField: string
}

class App extends React.Component<Props, States> {
  constructor (props: Props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchField: e.target.value })
  }

  render () {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    )
  }
}

export default App
