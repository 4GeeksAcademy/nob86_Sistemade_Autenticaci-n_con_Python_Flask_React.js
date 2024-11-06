import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addUser(email, password); // Agrega el usuario al store
    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <h1 className="py-5">SIGN UP</h1>
      <div className="border border-1 p-4" style={{ width: "50%" }}>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/demo" className="btn btn-secondary ms-2">
            Go to Users
          </Link>
        </form>
      </div>
    </div>
  );
};

