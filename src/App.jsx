import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurFood from "./Components/OurFood";
import Recipes from "./Components/Recipes";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [prepareRecipe, setPrepareRecipe] = useState([]);
  const [totalTime, settotalTime] = useState(0);
  const [totalcalories, setTotalCalories] = useState(0);

  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (isExist) {
      alert("Item is already Exist");
    } else {
      setRecipeQueue([...recipeQueue, recipe]);
    }
  };
  //  ! Function for remove and add into new table
  const handleRemover = (id) => {
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);
    //!remove from want to cook table
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setPrepareRecipe([...prepareRecipe, deletedRecipe]);
  };
  const calculateTimeAndCalories = (time, calories) => {
    settotalTime(totalTime + time);
    setTotalCalories(totalcalories + calories);
  };
  return (
    <>
      <main className=" w-10/12 mx-auto mt-8">
        {/* Header Component */}
        <Header />
        {/* Banner Component  */}
        <Banner />

        {/* Our Food Component */}
        <OurFood />
        {/* card section */}
        <section className="flex gap-4 flex-col lg:flex-row mt-10">
          <Recipes addRecipeToQueue={addRecipeToQueue} />
          {/* SideBar */}
          <Sidebar
            totalTime={totalTime}
            totalcalories={totalcalories}
            calculateTimeAndCalories={calculateTimeAndCalories}
            prepareRecipe={prepareRecipe}
            recipeQueue={recipeQueue}
            handleRemover={handleRemover}
          />
        </section>
      </main>
        <Footer />
    </>
  );
}

export default App;
