import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './Cards/Cards'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./HomePage/Home";
import GlobalStyle from './globalStyles';
import ScrollToTop from './ScrollToTop';
import  Navbar from './Navbar/Navbar';
import Footer from "./Footer/Footer";
import Iframe from './Iframe/Iframe';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
    <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
    
      <Route path='/' exact component={Home} />
      <Route path='/iframe/:id' exact component={Iframe} />
      
    
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
