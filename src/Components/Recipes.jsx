import React, { useEffect, useState } from "react";

const Recipes = ({ addRecipeToQueue }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./items.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="lg:w-2/3">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="card card-compact bg-base-100 my-4 shadow-xl"
          >
            <figure className="p-4">
              <img
                className="h-72 w-full rounded-lg shadow-md"
                src={recipe.recipe_image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-xl">
                {" "}
                {recipe.recipe_name}{" "}
              </h2>
              <p className="text-gray-500  text-md">
                {" "}
                {recipe.short_description}{" "}
              </p>
              <hr />

              <h1 className="text-lg text-gray-500">
                {" "}
                Ingredients : {recipe.ingredients.length}{" "}
              </h1>

              <ul className="text-md text-gray-500 space-y-2 list-disc ml-6 my-2">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}> {item} </li>
                ))}
              </ul>

              {/*  */}
              <hr />

              <div className="flex gap-3">
                <span>
                  <i className="fa-regular fa-clock mr-2"></i>
                  {recipe.preparing_time} Minutes
                </span>
                <span>
                  <i className="fa-solid fa-fire-flame-curved mr-2"></i>
                  {recipe.calories} calories
                </span>
              </div>

              <div className="card-actions">
                <button
                  onClick={() => addRecipeToQueue(recipe)}
                  className="btn my-4 bg-green-500 rounded-full font-bold"
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recipes;
