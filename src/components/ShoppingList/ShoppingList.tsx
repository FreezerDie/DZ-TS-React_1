import React, { Component } from "react";
import { ShoppingItem } from "../ShoppingItem/ShoppingItem";

export class ShoppingList extends Component {
  state = {
    productName: "",
    productPrice: 0,
  };

  setProductName = (text: string) => {
    this.setState({ productName: text });
  };

  setProductPrice = (num: number) => {
    this.setState({ productPrice: num });
  };
}
