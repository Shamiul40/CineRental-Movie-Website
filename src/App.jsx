import "./App.css";
import MovieList from "./Cine/MovieList";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      <Header></Header>
      <main className=" grid lg:grid-cols-[218px_1fr] gap-14">
        <div>
          <SideBar />
        </div>
        <MovieList></MovieList>
      </main>
    </>
  );
}

export default App;
