import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import AppHeader from "./components/Header/Header";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Category from "./components/Category/Category";
import Place from "./components/Place/Place";
import MyPlaces from "./components/MyPlaces/MyPlaces";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div className="App">
      <Router>
          <AppHeader />
        <section className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/myplaces" exact component={MyPlaces} />
            <Route path="/categories/:category" component={Category} />
            <Route path="/place/:place" component={Place}>
            </Route>
          </Switch>
        </section>
      </Router>
      
    </div>
  );
}

export default App;
