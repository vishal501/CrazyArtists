import logo from './logo.svg';
import './App.css';
import Page from './Page';
import Web from './Workshops/Web';
import Mobile from './Workshops/Mobile';
import Brand from './Workshops/Brand';
import Social from './Workshops/Social';
import Seo from './Workshops/Seo';
import Ui from './Workshops/Ui';


import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
        <Route path="/" component={Page} exact/>
        
        
        <Route path="/web" component={Web} exact/>
        <Route path="/mobile" component={Mobile} exact/>       
        <Route path="/brand" component={Brand} exact/> 
        <Route path="/social" component={Social} exact/> 
        <Route path="/seo" component={Seo} exact/> 
        <Route path="/uiux" component={Ui} exact/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
