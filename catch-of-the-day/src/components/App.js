import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }
  addFish = (fish) => {
    // 1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
    // this.setState({
    //   fishes: fishes
    // })
  }
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
    console.log(this.state.fishes);
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"></Header>
        </div>
        <Order></Order>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}></Inventory>
      </div>
    )
  }
}

export default App;
