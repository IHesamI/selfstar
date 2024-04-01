import { useEffect } from "react";
import "./App.css";
function App() {
  useEffect(() => {
    console.error(window.location);
  }, [window.location]);
  return <></>;
}

export default App;
