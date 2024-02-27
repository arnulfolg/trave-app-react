import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import AppHeader from "./components/Header/Header";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Place from "./components/Place/Place";
import Categories from "./components/Categories/Categories";
import Category from "./components/Category/Category";
import MyPlaces from "./components/MyPlaces/MyPlaces";
function App() {

  return (
    <>
       <div className="App">
          <Router>
              <AppHeader />
              <section className="content">
                <Routes>
                  <Route path="/" element={ <Home />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/myplaces" element={<MyPlaces />} />
                  <Route path="/categories/:categoryId" element={<Category name={""} image={""} />} />
                  <Route path="/place/:placeId" element={<Place />} />
                </Routes>
              </section>
          </Router>
          
        </div>
    </>
  )
}

export default App
