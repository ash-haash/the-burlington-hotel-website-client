import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import LiveWell from './Pages/LiveWell/LiveWell';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Pregnancy from './Pages/Pregnancy/Pregnancy';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/livewell">
              <LiveWell></LiveWell>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/pregnancy">
              <Pregnancy></Pregnancy>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;









// banner images link {
//   https://ibb.co/8DDJmRQ
//   https://ibb.co/DrQ63Lz
//   https://ibb.co/0q1s1x5
//   https://ibb.co/26XwZ2n
//   https://ibb.co/vHCdh0J
// }

// service images link {
//   https://ibb.co/0ZBHCWp
//   https://ibb.co/C99k2kr
//   https://ibb.co/7XTQmC8
//   https://ibb.co/52bn4zH
//   https://ibb.co/Zhr6d42
//   https://ibb.co/zP8qcJx
// }