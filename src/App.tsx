import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import AppHeader from "./components/Header/Header";
import AuthDialog from "./components/AuthDialog/AuthDialog";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Place from "./components/Place/Place";
import Categories from "./components/Categories/Categories";
import Category from "./components/Category/Category";
import MyPlaces from "./components/MyPlaces/MyPlaces";
function App({signInDialog}: {signInDialog: boolean}) {

  return (
    <>
       <div className="App">
          <Router>
              <AppHeader email={"example@example.com"} loggedInState={false} />
              <section className={`auth ${signInDialog ? "auth__open" : "auth__close"}`}>
                    <AuthDialog />
              </section>
              <section className="content">
                <Routes>
                  <Route path="/" element={ <Home />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/myplaces" element={<MyPlaces />} />
                  <Route path="/categories/:category" element={<Category name={""} image={""} />} />
                  <Route path="/place/:place" element={<Place />} />
                </Routes>
              </section>
          </Router>
          
        </div>
    </>
  )
}

export default App
