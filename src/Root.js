import Nav from "./Component/Navbar/nav";
import { Outlet } from "react-router-dom";

const Root=()=>{
      return <>
       <Nav></Nav>
        <main><Outlet /></main>
      </>;
};

export default Root;