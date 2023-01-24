import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Custumer from './Component/Custumer';
// import { useSelector } from 'react-redux';
import Profile from './FarmerComp/Profile/Profile';
import Root from './Root';
import AddItem from './FarmerComp/AddProduct/AddItem';
import ErrorPage from './pages/Error';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthenticationPage from './pages/Authentication';
import { fetchAvailableProducts } from './store/products-action';
import CustumerProfile from './Component/Layout/Custumer-Profile';

// import { uiActions } from './store/ui-slice';

const router=createBrowserRouter([
  {path:'/',
element:<Root />,
errorElement:<ErrorPage/>,
children:[
  {index:true,element:<Custumer />},
  {path:'farmer',element:<Profile />},
  {path:'profile',element:<CustumerProfile />},
  {path:'farmer/addItem',element:<AddItem />},
]},
{path:'auth',element:<AuthenticationPage/>}
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
