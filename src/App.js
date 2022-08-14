import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import CreateTask from "./components/CreateTask";
import Update from "./components/Update";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";

//------------------------------ URL of API from where we will fetch the data -------------------------------------
const URL = "https://jsonplaceholder.typicode.com/todos";
//---------------------- storing data via react hook and managing the state--------------------
function App() {
  //initial state of data is empty aaray and when we fetched the data suceesfully we update it using state updating function
  const [data, setData] = useState([]);

  useEffect(() => {
    //---------------- used AXIOS to fetch URL -----------------------------
    Axios.get(URL).then((res) => setData(res.data)); //res.data Response stored and the updating the state of data
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/*-------------To rout over the childs used React Routers ------------------------*/}
        <Route exact path="/React-Todo-App" element={<Read data={data} />} />
        <Route exact path="/create-task" element={<CreateTask />} />
        <Route exact path="/update/:id" element={<Update data={data} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
