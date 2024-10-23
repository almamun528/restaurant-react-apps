import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurFood from "./Components/OurFood";




function App() {



  return (
    <>


    <main className="w-10/12 mx-auto">
      {/* Header Component */}
        <Header />
        {/* Banner Component  */}
        <Banner />

        {/* Our Food Component */}
        <OurFood />
      
    </main>

      
    </>
  );
}

export default App;
