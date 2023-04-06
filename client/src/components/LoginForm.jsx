import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AuthActions from "../redux/auth/authOperations";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(AuthActions.login({ email, password }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(AuthActions.register({ email, password }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          width: "100%",
          maxWidth: "400px",

          backgroundColor: "#ffebee",
          border: "1px solid red",
          borderRadius: "1rem",
        }}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          style={{ padding: "0.5rem", margin: 0 }}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="text"
          placeholder="Пароль"
          style={{ padding: "0.5rem", margin: 0 }}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default LoginForm;
