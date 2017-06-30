import React from 'react'

import FruitBasket from './FruitBasket'

class App extends React.Component {
  state = {
    fruit: [],
    filters: [],
    currentFilter: null
  }

  componentWillMount() {
    this.fetchFruits()
    this.fetchFilters()
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }))
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }))
  }

  handleFilterChange  (event) {
    this.setState({
      currentFilter: event.target.value
    })
  }

  render () {
    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} updateFilterCallback={this.handleFilterChange.bind(this)}/>
    )
  }
}

export default App
