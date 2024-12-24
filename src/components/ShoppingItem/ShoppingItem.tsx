import React, { Component } from "react";

interface ShoppingItemProps {
  name: string;
  onDelete: () => void;
}

class ShoppingItem extends Component<ShoppingItemProps> {
  render() {
    return (
      <li>
        {this.props.name}
        <button onClick={this.props.onDelete}>Delete</button>
      </li>
    );
  }
}

export default ShoppingItem;
