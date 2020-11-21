import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'; 
import CartScreen from './screens/CartScreen'; 
import LoginScreen from './screens/LoginScreen'; 
import RegisterScreen from './screens/RegisterScreen'; 
import ProfileScreen from './screens/ProfileScreen'; 
import ShippingScreen from './screens/ShippingScreen'; 
import PaymentScreen from './screens/PaymentScreen'; 
import PlaceOrderScreen from './screens/PlaceOrderScreen'; 

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/shipping' component={ShippingScreen} /> 
          <Route path='/payment' component={PaymentScreen} /> 
          <Route path='/placeorder' component={PlaceOrderScreen} /> 
          <Route path='/login' component={LoginScreen}  /> 
          <Route path='/register' component={RegisterScreen}  /> 
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen}  /> 
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/' component={HomeScreen} exact /> 
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

// The recommended method of rendering something with a <Route> is to use children elements, as shown above. There are, however, a few other methods you can use to render something with a <Route>. These are provided mostly for supporting apps that were built with earlier versions of the router before hooks were introduced.
//     <Route component>
// All three render methods will be passed the same three route props
//     match
//     location
//     history
