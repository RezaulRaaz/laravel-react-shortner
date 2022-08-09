import React, { useState } from 'react'
import AuthUser from './AuthUser'

function Login() {
  const {http,setToken,getIp}=AuthUser();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const submitForm=()=>{
    //api call
    http.post('/login',{email:email,password:password}).then((res)=>{
      setToken(res.data.user,res.data.access_token);
      getIp();
    })
}
  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-5 m-auto'>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" onChange={e=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" onChange={e=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" onClick={submitForm} className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login