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
import OrderScreen from './screens/OrderScreen'; 
import OrderListScreen from './screens/OrderListScreen'; 
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} /> 
          <Route path='/shipping' component={ShippingScreen} /> 
          <Route path='/payment' component={PaymentScreen} /> 
          <Route path='/placeorder' component={PlaceOrderScreen} /> 
          <Route path='/login' component={LoginScreen}  /> 
          <Route path='/register' component={RegisterScreen}  /> 
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen}  /> 
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userList' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route 
            path='/admin/productlist' 
            component={ProductListScreen} 
            exact
          />
          <Route 
            path='/admin/productlist/:pageNumber' 
            component={ProductListScreen} 
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} /> 
          <Route path='/search/:keyword' component={HomeScreen} exact /> 
          <Route path='/page/:pageNumber' component={HomeScreen} exact /> 
          <Route 
            path='/search/:keyword/page/:pageNumber' 
            component={HomeScreen} 
            exact 
          /> 
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
