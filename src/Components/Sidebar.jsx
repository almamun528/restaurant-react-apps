import React from "react";

const Sidebar = ({
  prepareRecipe,
  recipeQueue,
  handleRemover,
  calculateTimeAndCalories,
  totalTime,
  totalcalories,
}) => {
  return (
    <div className="lg:w-1/3 border-2 rounded-md md:mt-4 mb-8  p-2 bg-base-100">
      <h1 className="text-2xl font-bold mb-1 text-center">
        Want to cook: {recipeQueue.length}
      </h1>
      <hr />

      {/* Want to cook */}

      <div className="overflow-x-auto mb-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {recipeQueue.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} Minutes</td>
                <td>{recipe.calories}</td>

                <td>
                  {" "}
                  <button
                    onClick={() => {
                      handleRemover(recipe.recipe_id);
                      calculateTimeAndCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="btn rounded-full bg-green-500"
                  >
                    Preparing
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  Currently cooking table*/}
      <h2 className="text-2xl font-bold mb-1 text-center ">
        {" "}
        Preparing item {prepareRecipe.length}{" "}
      </h2>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {prepareRecipe.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time} Minutes</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr className="border-none mt-4">
              <th></th>
              <td></td>
              <td>Total Time : {totalTime} </td>
              <td>Total Calories = {totalcalories} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
