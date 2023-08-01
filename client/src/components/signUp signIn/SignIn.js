import React,{useState} from 'react'
import './signup.css'
import {NavLink} from "react-router-dom"

const SignIn = () => {

  // so using useState logdata is our current data and setdata is the  data to set to get that in our database
  const [logdata,setdata] = useState({
    email:"",
    password:""
  });
// change the input field with onChange{random naem} to get the vallues

const adddata =(e)=>{
  // e.target means the input field which is target with onChange attribute
  const{name,value}=e.target;

  setdata(()=>{
    return {
      // ... means spread opreator
      ...logdata,
      [name]:value
    }
  })
}
  // console.log(logdata);

  return (
    <>
      <section>
        <div className='sign_container'>
          <div className='sign_header'>

            <img src='./blacklogoamazon.png' alt='logo' />
          </div>
        <div className='sign_form'>
          <form>
            <h1>Sign-In</h1>
            <div className='form_data'>
              <label htmlFor='email'>Email</label>
              {/* on change use adddata function */}
              <input type="text"
               onChange={adddata}
               value={logdata.email}
               name='email' id='email' />
            </div>
            <div className='form_data'>
              <label htmlFor='password'>password</label>
              <input type="password" 
               onChange={adddata}
               value={logdata.password}
              name='password' id='password' placeholder='At least 6 character' />
            </div>
            <button className="signin_btn" >Continue</button>
          </form>
        </div>
         <div className='create_accountinfo'>
            <p>New to Amazon</p>
           <NavLink to="/register"> <button>Create Your Amazon account</button></NavLink>
         </div>
        </div>
      </section>
    </>
  )
}

export default SignIn