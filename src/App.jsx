import "./App.css";
import { useDispatch } from "react-redux";
import { setLang } from "./Store/store";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
function App() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setLang({ lang: "en" }));
  }
  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
