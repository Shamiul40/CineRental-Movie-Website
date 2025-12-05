import { useState } from "react";
import "./App.css";
import MovieList from "./Cine/MovieList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { MovieContext } from "./Constext/Context";

function App() {

  const [cartData, setCartData] = useState([])

  return (
    <>
    <MovieContext.Provider value={{cartData, setCartData}}>
      <Header></Header>
      <main className=" grid lg:grid-cols-[218px_1fr] gap-14">
        <div>
          <SideBar />
        </div>
        <MovieList></MovieList>
      </main>
      <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
