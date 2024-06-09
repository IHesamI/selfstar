import { useEffect } from "react";
import { sendPageEvent } from "./Utils/eventHandler";
function App() {
  useEffect(() => {
    sendPageEvent(window.location.pathname);
  }, [window.location]);
  return <></>;
}

export default App;
