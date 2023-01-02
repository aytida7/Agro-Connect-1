
import './App.css';
import Nav from './Component/Navbar/nav';
import Customer from './Component/Customer';
import { useState } from 'react';
import Profile from './FarmerComp/Profile/Profile';

function App() {
  const [showCart,setShowCart]=useState(false);
  const [isFarmer,setIsFarmer]=useState(false);
  const showCartHandler=()=>{
    setShowCart(true);
  };
  const hideCartHandler=()=>{
    setShowCart(false);
};
const showFarmerHandler=()=>{
  setIsFarmer(true);
};
const orderItemHandler=(orderedItems)=>{
  console.log(orderedItems );
};
  return (
    <div className="App">
    <Nav showCart={showCartHandler} showFarmer={showFarmerHandler} ></Nav>
    {!isFarmer && <Customer showCart={showCart} hideCart={hideCartHandler} onOrderItems={orderItemHandler}></Customer>}
    {isFarmer && <Profile />}

    </div>
  );
}

export default App;
