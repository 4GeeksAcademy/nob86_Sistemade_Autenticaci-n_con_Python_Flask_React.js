import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div class="input-group input-group-lg pt-5">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          E-mail
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        ></input>
      </div>

      <div class="input-group input-group-lg pt-5">
        <span class="input-group-text" id="inputGroup-sizing-lg">
          Password
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        ></input>
      </div>
    </div>
  );
};
