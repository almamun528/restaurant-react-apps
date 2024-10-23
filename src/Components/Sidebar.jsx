import React from "react";

const Sidebar = ({ recipeQueue }) => {
  return (
    <div className="lg:1/3 border-2 rounded-md mt-8  p-2 bg-base-100">
      <h1 className="text-2xl font-bold mb-1 text-center">
        Want to cook: {recipeQueue.length}
      </h1>
      <hr />

      {/* Want to cook */}

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


        {recipeQueue.map((recipe, index)=>     
             <tr className="hover" key={index}>
        <th>{index + 1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time} Minutes</td>
        <td>{recipe.calories}</td> 


        <td>  <button 
        className="btn rounded-full bg-green-500">Preparing</button> </td>
      </tr>)} 

    </tbody>
  </table>
</div>






      {/*  Currently cooking table*/}
    </div>
  );
};

export default Sidebar;
