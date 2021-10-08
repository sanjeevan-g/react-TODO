import './App.scss';
import NavBar from "./components/navbar/NavBar"
import { Route , Switch} from "react-router-dom";
import Home from './pages/Home';
import Newtodo from './pages/Newtodo';
import Newnotes from './pages/Newnotes';
import About from './pages/About';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/add-todo">
        <Newtodo />
      </Route>
      <Route path="/add-note">
       <Newnotes />
      </Route>
      <Route path="/about">
       <About />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
