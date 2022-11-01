import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Home/Navbar";
import ContextFile from "./helpers/contextApi/ContextFile";
import Loading from "./pages/Loading";
import AppRouter from "./routers/AppRouter";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  return (
    <ContextFile>
      <div className="App">{loading ? <AppRouter /> : <Loading />}</div>
      {/* <div className="App">{loading ? <AppRouter /> : null}</div> */}
    </ContextFile>
  );
}

export default App;
