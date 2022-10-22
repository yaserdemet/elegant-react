import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Loading from "./pages/Loading";
import AppRouter from "./routers/AppRouter";

function App() {
  const [loading , setLoading] = useState(false)
  useEffect(() => {
     setTimeout(() => {
      setLoading(true)
     }, 2000);
  } , [])
  return (
    <div className="App">
           {
            loading ? <AppRouter /> : <Loading />
           }
    </div>
  );
}

export default App;
