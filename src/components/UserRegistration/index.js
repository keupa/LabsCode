import React, { useCallback, useContext, useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../Auth/Auth";
import { auth } from "../Firebase/firebase";
import M from "materialize-css";
import Header from './Header'

import "../../assets/styles/userRegistration.css";

const UserRegistration = ({ history }) => {

  useEffect(() => {
    console.log("mounted component");
    M.AutoInit();
  }, []);

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { username, email, password } = event.target.elements;
      try {
        await auth
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((snap) => {
            snap.user.updateProfile({
              displayName: username.value,
            });
          })
          .then((result) => {
            console.log(result);
            history.push("/user-home");
          });
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/user-home" />;
  }

  return (
    <div className="user-registration-container">
      <div className="input-form">
        <Header /> 

        <form onSubmit={handleSignUp} className="form-container">
          <div className="row">
            <div className="input-field col s6">
              <input
                name="first_name"
                id="first_name"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="first_name">
                NOMBRE
              </label>
            </div>

            <div className="input-field col s6">
              <input
                name="last_name"
                id="last_name"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="last_name">
                APELLIDO
              </label>
            </div>
          </div>

          <div className="input-field col s12">
            <input name="adress" id="adress" type="text" className="validate" />
            <label className="active" htmlFor="adress">
              DIRECCIÓN
            </label>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <select>
                <option value="1">Mujer</option>
                <option value="2">Hombre</option>
                <option value="3">No Binario</option>
              </select>
              <label>GÉNERO</label>
            </div>
            <label className="date">FECHA</label>
            <input type="text" className="datepicker col s6" />
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input
                id="phone-number"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="phone-number">
                TELÉFONO
              </label>
            </div>

            <div className="input-field col s6">
              <input id="postal-code" type="text" className="validate" />
              <label className="active" htmlFor="postal-code">
                C.P.
              </label>
            </div>
          </div>

          <div className="input-field col s6">
            <input
              name="ine-number"
              id="adress"
              type="text"
              className="validate"
            />
            <label className="active" htmlFor="ine-number">
              NÚMERO DE INE
            </label>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="car-model" type="text" className="validate" />
              <label className="active" htmlFor="car-model">
                MODELO DE AUTO
              </label>
            </div>

            <div className="input-field col s6">
              <input id="postal-code" type="text" className="validate" />
              <label className="active" htmlFor="postal-code">
                NÚMERO DE PLACA
              </label>
            </div>
          </div>

          <div className="row">
            <button
              className="light-blue waves-effect waves-light btn"
              type="submit"
            >
              SIGUIENTE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(UserRegistration);
