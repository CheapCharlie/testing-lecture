import React, { Component } from 'react'

const starterItems = [{ id: 1, name: 'longsword', enhancement: 4 },
{ id: 2, name: 'gauntlet', enhancement: 9 },
{ id: 3, name: 'wizard\'s staff', enhancement: 14 }];


export default class Items extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: starterItems
    }
  }
  handleScoreChange(passedItem) {
    console.log(passedItem)
    const newScore = passedItem.enhancement + 1;
    console.log(newScore)
    const items = this.state.items.slice();
    items.forEach((item) => {
      if (item.id === passedItem.id) {
        return item.enhancement = newScore
      }});
    this.setState(items);
    console.log(items)
  };
  render() {
    return (
      <div>
        <h3 data-testid="title">Items</h3>
        {
          this.state.items.map(item => {
            const onClick = this.handleScoreChange.bind(this,item) 
            /* this line above binds the item with the onClick Function */
            return (
              <div key={item.id}>
                <div data-testid="item">{item.name}</div>
                <div data-testid="enhancement">{item.enhancement}</div>
                <button onClick={onClick}>Enhance</button>
              </div>
            )}
          )
        };
      </div>

    );
  };
}
