
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Home";
import Create from "./Create";
import ArticleDetails from "./ArticleDetails";
import InvalidPage from "./InvalidPage";

function App() {

  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/create" element={<Create/>} />
              <Route path="/articles/:id" element={<ArticleDetails/>} />
              <Route path="*" element={<InvalidPage/>}/>

              
            </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
