import { useEffect } from "react";
function App() {
  useEffect(() => {
    console.error();
  }, [window.location]);
  return <></>;
}

export default App;
