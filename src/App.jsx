import "./App.css";
import { useDispatch } from "react-redux";
import { setLang } from "./Store/store";
import Header from "./Components/Header";
function App() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setLang({ lang: "en" }));
  }
  return (
    <>
      <button onClick={handleClick}>changeLang</button>
      <Header />
    </>
  );
}

export default App;
