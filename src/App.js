import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form";
import Recipes from "./Components/Recipes";

const API_KEY = "8814d772479e0036a4030c9853266776";

class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };

  componentDidMount = () => {
    //grabs the information in the localStorage.setItem below
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes: recipes });
  };

  //this makes the search results still appear when the user clicks to return home from the single recipe page
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {/* the this.state.recipes, passes a prop to Recipes.js*/}
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
