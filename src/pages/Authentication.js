import { useSearchParams } from "react-router-dom";
import Signup from "../Component/Auth/Signup";
import Login from "../Component/Auth/Login";

function AuthenticationPage() {
    const [searchParams]=useSearchParams();
    const isSignup=searchParams.get('mode')==='signup';
  return <>
  {!isSignup && <Login />}
  {isSignup && <Signup/>}
  </>;
}

export default AuthenticationPage;