import React, { Component } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

interface ShoppingItemType {
  id: number;
  name: string;
}

interface ShoppingListState {
  items: ShoppingItemType[];
}

class ShoppingList extends Component<object, ShoppingListState> {
  state: ShoppingListState = {
    items: [
      {
        id: 1,
        name: "Apple",
      },
      {
        id: 2,
        name: "Milk",
      },
      {
        id: 3,
        name: "Bread",
      },
      {
        id: 4,
        name: "Eggs",
      },
    ],
  };

  handleDelete = (id: number) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        <ul>
          {this.state.items.map((item) => (
            <ShoppingItem
              key={item.id}
              name={item.name}
              onDelete={() => this.handleDelete(item.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
