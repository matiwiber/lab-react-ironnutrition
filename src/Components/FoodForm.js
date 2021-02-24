import React, { Component } from 'react';

class FoodForm extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
    quantity: 1,
  };

  handleInput = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newFood = this.state;
    this.props.addNewFood(newFood);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <h2> Add food </h2>

          <label> Name </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />

          <label> Calories </label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInput}
          />

          <label> image </label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FoodForm;
