import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store } = useContext(Context);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="py-5">Lista de Usuarios</h1>
      
      <ul className="list-group">
        {store.users.map((user, index) => (
          <li key={index} className="list-group-item">
            <strong>Email:</strong> {user.email} <br />
            <strong>Password:</strong> {user.password}
          </li>
        ))}
      </ul>

      <Link to="/">
        <button className="btn btn-primary mt-4">Back home</button>
      </Link>
    </div>
  );
};
