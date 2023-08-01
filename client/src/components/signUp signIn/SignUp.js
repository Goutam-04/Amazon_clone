import React,{useState} from 'react'
import "./signup.css"
import {NavLink} from "react-router-dom"

const SignUp = () => {

  const [udata,setData]=useState({
    fname:"",
    mobile:'',
    email:'',
    password:''
  });

    const adddata = (e) =>{
      const {name,value} = e.target;

      setData(()=>{

        return{
          ...udata,
          [name]:value
        }
      })
    }
    console.log(udata);

  return (
    <div>
       <>
      <section>
        <div className='sign_container'>
          <div className='sign_header'>

            <img src='./blacklogoamazon.png' alt='logo' />
          </div>
        <div className='sign_form'>
          <form>
            <h1>Sign-Up</h1>
            <div className='form_data'>
              <label htmlFor='fname'>Your Name</label>
              <input type="text"
              onChange={adddata}
              value={udata.fname}
               name='fname' id='fname' />
            </div>
            <div className='form_data'>
              <label htmlFor='email'>Email</label>
              <input type="text"
              onChange={adddata}
              value={udata.email}
               name='email' id='email' />
            </div>
            <div className='form_data'>
              <label htmlFor='number'>Mobile</label>
              <input type="number"
              onChange={adddata}
              value={udata.number}
               name='mobile' id='mobile' />
            </div>
            <div className='form_data'>
              <label htmlFor='password'>password</label>
              <input type="password"
              onChange={adddata}
              value={udata.password}
               name='password' id='password' placeholder='At least 6 character' />
            </div>
            <button className="signin_btn" >Continue</button>
            <div className='signin_info'>
                <p>Already have an account</p>
                <NavLink to="/login">sign in</NavLink>
            </div>
          </form>
        </div>
        
        </div>
      </section>
    </>
    </div>
  )
}

export default SignUp