import React, { useContext, useState } from "react";
import MyContext from "../MyContext";

const Register = () => {
  const { Registers, setscreen, loading } = useContext(MyContext);

  // all state

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <center>
        <h1>Welcome to register page</h1>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => {
            setname(e.currentTarget.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setemail(e.currentTarget.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setpassword(e.currentTarget.value);
          }}
        />
        <br /> <br />
        <p
          onClick={() => {
            setscreen(0);
          }}
        >
          if already you have account{" "}
          <span className="text-success">go to login</span>
        </p>
        {loading ? (
          <button disabled="true" className="btn btn-success">
            Please wait...
          </button>
        ) : (
          <button className="btn btn-primary"
          onClick={()=>{Registers(name,email,password)}}>Register</button>
        )}
      </center>
    </>
  );
};

export default Register;
