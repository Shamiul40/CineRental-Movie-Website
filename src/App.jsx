import "./App.css";
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
      </main>
    </>
  );
}

export default App;
