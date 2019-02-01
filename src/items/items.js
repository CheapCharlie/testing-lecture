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
  enhanceItem(passedItem) {
    const newScore = passedItem.enhancement + 1;
    const items = this.state.items.slice(); /* creates a copy of state that we can change */
    items.forEach((item) => {
      if (item.id === passedItem.id) {
        return item.enhancement = newScore
      }
    });
    this.setState(items);
  };
  render() {
    return (
      <div>
        <h3 data-testid="title">Items</h3>
        {
          this.state.items.map(item => {
            const onClick = this.enhanceItem.bind(this, item)
            /* this line above binds the item with the onClick Function */
            /* notice below, I had to put a return since I added the above code */
            return (
              <div key={item.id}>
                <div data-testid="item">{item.name}</div>
                <div data-testid="enhancement">{item.enhancement}</div>
                {/* We can use the "data=testid" as a way to grab an item, since it won't impact the html any */}
                <button onClick={onClick}>Enhance</button>
              </div>
            )
          })};
        </div>

    );
  };
}
