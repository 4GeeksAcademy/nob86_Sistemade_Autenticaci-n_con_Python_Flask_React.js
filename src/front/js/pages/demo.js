import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  
  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    
   
  if (!token) {
      alert("No estás autenticado. Por favor, inicia sesión primero.");
    }
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="py-5">Lista de Usuarios</h1>
      
      <div className="border border-1 p-4" style={{ width: "50%" }}>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label pt-5">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your email address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">
            Login
          </button>
          
        </form>
      </div>

      <Link to="/">
        <button className="btn btn-primary mt-4">Back home</button>
      </Link>
    </div>
  );
};
