
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails'


import './App.css';
import CategoryNavigation from './components/Categories/CategoryNavigation/CategoryNavigation';


function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route path="/" component={Categories} />
        <Route path="/categories/:category" render={props => <Categories {...props} />} />
        <Route path="/pets/details/:petId" exact render={props => <PetDetails {...props} />} />
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;
