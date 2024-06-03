import { useEffect } from "react";
import { sendLog } from "./api/apis";
function App() {
  useEffect(() => {
    sendLog(window.location.pathname);
  }, [window.location]);
  return <></>;
}

export default App;
