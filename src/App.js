
import './App.css';
import Nav from './Component/Navbar/nav';
import Customer from './Component/Customer';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import Profile from './FarmerComp/Profile/Profile';

function App() {
  const showCart=useSelector(state=>state.ui.showCart);
  const isFarmer=useSelector(state=>state.ui.isFarmer);
const orderItemHandler=(orderedItems)=>{
  console.log(orderedItems );
};
  return (
    <div className="App">
    <Nav></Nav>
    {!isFarmer && <Customer showCart={showCart} onOrderItems={orderItemHandler}></Customer>}
    {isFarmer && <Profile />}

    </div>
  );
}

export default App;
