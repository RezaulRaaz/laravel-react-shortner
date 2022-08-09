import React, { useState } from 'react'
import AuthUser from './AuthUser'
import { useNavigate} from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
  const {http}=AuthUser();
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const submitForm=()=>{
    http.post('/register',{name,email,password}).then((res)=>{
      navigate('/login');
    })
}
  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-5 m-auto'>
            <div className="form-group">
              <label>Name</label>
              <input onChange={e=>setName(e.target.value)} type="text" className="form-control" id="name" placeholder='Name' />
            </div>
            <div className="form-group">
              <label>E mail</label>
              <input onChange={e=>setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder='Email' />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input onChange={e=>setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder='Password' />
            </div>
            <button type="button" onClick={submitForm} className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register