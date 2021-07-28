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
import GioHang from './pages/Giohang';


function App() {
  
   
  return (
 
    <Router>
      <ScrollToTop>
        <Header />
        <Switch> 
          
            <Route exact path ='/' component = {Trangchu}></Route>
            {/* <Route  path ='/dongho' component = {Dongho}></Route> */}
            <Route exact
              path= '/dongho'
              render={ (props) => (<Dongho {...props} />)}
            >
            </Route>
            <Route  path ='/dienthoai' render={(props) => (
              <Dienthoai {...props} />
              )}>

            </Route>
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

            <Route 
              path= '/giohang'
              render={ (props) => (<GioHang {...props} />)}
            >
            </Route>

          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    
  );
 
}

export default App;