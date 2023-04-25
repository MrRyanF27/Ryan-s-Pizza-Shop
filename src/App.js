
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import MesDetail from "./pages/MesDetail";
import Messages from "./pages/Messages";
import Navbar from "./pages/Navbar";
import Menu from "./pages/Menu";

import Aos from "aos";
import 'aos/dist/aos.css';


function App() {


  return (
    
    <Router>
      <div className="content w-100 " id="appId">
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/Menu'>
          <Menu/>
        </Route>
        <Route path='/About'>
          <About/>
        </Route>
        <Route path='/Contact'>
          <Contact/>
        </Route>
        <Route path='/Messages'>
          <Messages/>
        </Route>
        <Route path={'/message/:id'}>
         <MesDetail/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
