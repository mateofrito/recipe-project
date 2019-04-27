import React from "react";
//the props, allows us to receive the incoming props from the App.js file
const Recipes = props => (
  //props.recipes receives the this.state.recipes information
  //recipe is the name of the array that we are pulling data from
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div
            key={recipe.recipe_id}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <img
                className="recipe__box-img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <div className="recipe__text">
                {/* below is an if statement in the JS brackets, if the title of the receipe is less that 20 characters, display it, if it's longer than 20, truncated it to 25 */}
                <h5 className="recipes__title">
                  {recipe.title.length < 20
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 25)}...`}
                </h5>
                <p className="recipes__subtitle">{recipe.publisher}</p>
              </div>
              <button className="recipe_buttons">View Recipe</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
