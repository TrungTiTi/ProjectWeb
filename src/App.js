import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';

import Trangchu from './pages/Trangchu';
import Dongho from './pages/Dongho' ;
import Dienthoai from './pages/Dienthoai' ;
import Detail from './pages/Detail';
import WatchBrand from './pages/WatchBrand';
import ScrollToTop from './commons/ScrollToTop';
import GioHang from './pages/Giohang';
import Thanhtoan from './pages/Thanhtoan';
import SignIn from './components/SignIn/index';
import SignUp from './components/SignUp';

import Kienthuc1 from './pages/Khampha/Kienthuc1';
import Kienthuc2 from './pages/Khampha/Kienthuc2';
import Kienthuc3 from './pages/Khampha/Kienthuc3';
import Tintuc from './pages/Dichvu/Tintuc';
import Kienthuc from './pages/Khampha/Kienthuc';
import Tintuc1 from './pages/Dichvu/Tintuc1';
import Tintuc2 from './pages/Dichvu/Tintuc2';
import Tintuc3 from './pages/Dichvu/Tintuc3';
import {history} from './heper/history'
import SignOut from './components/SignOut';

function App() {

    return (
   
      <Router history={history}>
        <ScrollToTop>
          <Switch> 
            <Route path="/sign-up" component = {SignUp}></Route>

            <Route path="/sign-in" component = {SignIn}></Route>

            <Route path="/sign-out" component = {SignOut}></Route>

            <Route exact path ='/' component = {Trangchu}></Route>

            <Route exact
                path= '/dongho'
                render={ (props) => (<Dongho {...props} />)}
              >
            </Route>

            <Route 
              path ='/dienthoai' render={(props) => (
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

            <Route
              path= '/thanhtoan'
              render={ (props) => (<Thanhtoan {...props} />)}
            >
            </Route>

            <Route path= '/kapa'>  <Kienthuc/> </Route>

            <Route path= '/khampha/kienthuc1'> <Kienthuc1/>  </Route>

            <Route path= '/khampha/kienthuc2'>  <Kienthuc2/>  </Route>
            <Route path= '/khampha/kienthuc3'>  <Kienthuc3/>  </Route>
            <Route path= '/dv'>  <Tintuc/> </Route>
            <Route path= '/dichvu/tintuc1'> <Tintuc1/>  </Route>
            <Route path= '/dichvu/tintuc2'>  <Tintuc2/>  </Route>
            <Route path= '/dichvu/tintuc3'>  <Tintuc3/> </Route>
           
          </Switch>
          </ScrollToTop>
        </Router>
      
    );
   
}

export default App;