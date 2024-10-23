import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurFood from "./Components/OurFood";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";




function App() {

  const [recipeQueue, setRecipeQueue] = useState ([])
  const addRecipeToQueue = (recipe) =>{
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(isExist){
      alert("Item is already Exist")
      
    }else{
      setRecipeQueue([...recipeQueue,recipe])
    }
  }
 

  return (
    <>


    <main className=" w-10/12 mx-auto">
      {/* Header Component */}
        <Header />
        {/* Banner Component  */}
        <Banner />

        {/* Our Food Component */}
        <OurFood />
      {/* card section */}
      <section className="flex gap-4 flex-col lg:flex-row mt-10">

        <Recipes addRecipeToQueue ={addRecipeToQueue}  />
          {/* SideBar */}
        <Sidebar recipeQueue = {recipeQueue} />
      </section>
    </main>

      
    </>
  );
}

export default App;
