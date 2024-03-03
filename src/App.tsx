import "./App.css";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title={"New Header"} />
      <Body titleForBody={"New Body"} />
      <Footer titleForFooter={"New Footer"} />
    </div>
  );
}

export default App;
