import "./App.css";
import Header from "./components/Header";
import MenuListing from "./components/MenuListing";
import { data } from "./data/data";
function App() {
  return (
    <>
      <Header />
      <MenuListing data={data} />
    </>
  );
}

export default App;
