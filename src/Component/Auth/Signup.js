import { Form, useActionData, useNavigation } from 'react-router-dom';
import classes from './Signup.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png';


function Signup() {
   const data=useActionData();
   const navigation=useNavigation();
   const isSubmitting=navigation.state==='submitting';
  return (
    <div className={classes.main}>
     <div className={classes.brand}>
     <img src={logo} alt='Logo'></img>
      <h3>AgroConnect</h3>
     </div>
     <Form method="post" className={classes.form}>
        <h3>Create a new user</h3>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map(err=><li key={err}>{err}</li>)}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="name">Name</label>
          <input id="name" type="name" name="name" placeholder='Enter your name' required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder='Enter your email' required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" placeholder='Enter your password' required />
        </p>
        <div className={classes.actions}>
          <button disabled={isSubmitting}>{isSubmitting ? 'Signing up..':'Signup'}</button>
        </div>
        <div className={classes.redi}>Already have an account? 
        <Link to='?mode=login'> Login</Link>
        </div>
      </Form>
    </div>
  );
}

export default Signup;

