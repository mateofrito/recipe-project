import React from "react";

import { Link } from "react-router-dom";

const API_KEY = "8814d772479e0036a4030c9853266776";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;

    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );

    const res = await req.json();
    //this will display the first recipe in the array of recipes
    this.setState({ activeRecipe: res.recipes[0] });
  };
  render() {
    //this const will save us from having to type "this.state.activeRecipe" a million times
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {//this if statement only displays information until the page is fully loaded
        this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">{recipe.publisher} </h4>
            <p className="active-recipe__website">
              <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
            </p>
            <button className="active-recipe__button">
              <Link to="/"> Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
