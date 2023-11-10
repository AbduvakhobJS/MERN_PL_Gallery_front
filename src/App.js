import Navbar from "./components/Navbar";
import AddBook from "./pages/AddBook";
import Main from "./pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UpdateBook from "./pages/UpdateBook";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <div className="raw">
        <div className="col-lg-8 offset-lg-2">
          <Routes>
            <Route path="/" exact element={<Main/>}>
            </Route>
            <Route path="/add" element={<AddBook/>}>
            </Route>
            <Route path="/update/:id" element={<UpdateBook/>}>
            </Route>
          </Routes>
        </div> 
      </div>
    </div>
<Footer/>
    </BrowserRouter>
  );
}

export default App;
