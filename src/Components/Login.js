import React, { useContext, useState } from "react";
import MyContext from "../MyContext";

const Login = () => {
// all state

const [email,setemail] = useState('');
const [password,setpassword] = useState('')
//use context
  const {Loginfunc,setscreen,loading} = useContext(MyContext);

 const Login=()=>{


  
}
 
  return (
    <>
      <center>
        <h3>Welcome to login page</h3>
        <br />
        <input type="text" placeholder="Email" 
          onChange={(e)=>{setemail(e.currentTarget.value)}}
        />
        <br />
        <br />
        <input type="text" placeholder="password" 
          onChange={(e)=>{setpassword(e.currentTarget.value)}}
        />
        <br />
        <p
          className="pt-2"
          onClick={() => {
            setscreen(1);
          }}
        >
          if you have'nt account{" "}
          <span className="text-success">go to register</span>
        </p>
{
  loading ? (
    <button disabled='true'  className="btn btn-success">Please wait</button>
  ) :         <button className="btn btn-primary" onClick={()=>{Loginfunc(email,password)
        }}>Login</button>

}

<br />
      </center>
    </>
  );
};

export default Login;
