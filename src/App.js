import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';
import Search from './Components/Search';

class App extends React.Component {
  state = {
    myFoods: foods,
    isAdding: false,
    searchString: '',
  };

  addFood = (newFood) => {
    const updateFood = [newFood, ...this.state.myFoods];

    this.setState({ myFoods: updateFood });
  };

  search = (event) => {
    const { value } = event.target;
    const filteredFoods = foods.filter((oneFood) =>oneFood.name.includes(value));

   

    this.setState({
      myFoods: filteredFoods,
      searchString: value,
    });
  };

  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <Search searchString={this.state.searchString} search={this.search} />
        {this.state.myFoods.map((food) => {
          return (
            <FoodBox
              name={food.name}
              image={food.image}
              calories={food.calories}
              quantity={food.quantity}
            />
          );
        })}
        <FoodForm addNewFood={this.addFood} />
      </div>
    );
  }
}

export default App;
