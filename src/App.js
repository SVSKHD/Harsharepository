import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



// pages
import Home from "./pages/Home";


function App() {
  return (
   <>
   <Router>
     <Switch>
     <Route exact path="/" component={Home}/>
     </Switch>
   </Router>
   </>
  );
}

export default App;
