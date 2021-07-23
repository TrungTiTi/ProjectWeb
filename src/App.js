import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Trangchu from './pages/Trangchu';
// import Detail from './pages/Detail';
// import Home from './pages/Home';
import Dongho from './pages/Dongho' ;
import Dienthoai from './pages/Dienthoai' ;
import Detail from './pages/Detail';
import WatchBrand from './pages/WatchBrand';
import ScrollToTop from './commons/ScrollToTop';


function App() {
  
   
  return (
 
    <Router>
      <ScrollToTop>
      <Header />
     <Switch> 
        
        <Route exact path ='/' component = {Trangchu}></Route>
        <Route exact path ='/dongho' component = {Dongho}></Route>
        <Route  path ='/dienthoai' component = {Dienthoai}></Route>
        <Route 

         path ='/detail'
         render={(props) => (
          <Detail {...props} />
          )}>

         </Route>
        <Route 
          path= '/dongho/watch'
          render={ (props) => (<WatchBrand {...props} />)}
        >
        </Route>
        </Switch>
        <Footer />
        </ScrollToTop>
    </Router>
    
  );
 
}

export default App;