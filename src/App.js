import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Customer from './Component/Customer';
// import { useSelector } from 'react-redux';
import Profile from './FarmerComp/Profile/Profile';
import Root from './Root';
import AddItem from './FarmerComp/AddProduct/AddItem';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAvailableProducts } from './store/products-action';
// import { uiActions } from './store/ui-slice';

const router=createBrowserRouter([
  {path:'/',
element:<Root />,
children:[
  {index:true,element:<Customer />},
  {path:'/farmer',element:<Profile />},
  {path:'/profile',element:<Profile />},
  {path:'/farmer/addItem',element:<AddItem />}
]}
]);
function App() {
// const dispatch=useDispatch();

  // useEffect(()=>{
  //   dispatch(uiActions.loginAsFarmer());
  // },[])
//   const isFarmer=useSelector(state=>state.ui.isFarmer);
const dispatch=useDispatch();
useEffect(()=>{
    dispatch(fetchAvailableProducts());
  },[dispatch]);
return <RouterProvider router={router} />;
}

export default App;
