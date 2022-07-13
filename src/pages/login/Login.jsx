import { useState } from "react";

function Login() {
    const [loginDatas, setLoginDatas]=useState({
        username:"",
        password:"",
    });

    const handleSubmit=(e) =>{
        e.preventDefault();
        // const{username,password}=loginDatas;
    };

    const handleLoginDatas =(e)=>{
        setLoginDatas({...loginDatas,[e.target.name]: e.target.value});
    };
  return (
    <div className='Loginpage'>
        <h1>Welcome to Karucverse</h1>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <label htmlFor="username">
                <p>Username</p>
                <input type="text" name="username" className="controlPanel" id="username" placeholder="Enter Your Username" value={loginDatas.username} onChange={handleLoginDatas}/>
            </label>
            <label htmlFor="password">
                <p>Password</p>
                <input type="password" name="password" className="controlPanel" id="password" placeholder="Enter Your Password" value={loginDatas.password} onChange={handleLoginDatas}/>
            </label>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login