import React, { useContext } from "react";
import MyContext from "../MyContext";

const Home = () => {
 const {Logout,user} = useContext(MyContext)
  return (
    <>
      <h1>hello and welcome Dear <span style={{color:'red'}}>{user}</span></h1>
      <br />
      <button onClick={()=>{Logout()}}>Logout</button>
    </>
  );
};

export default Home;
