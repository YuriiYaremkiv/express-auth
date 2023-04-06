import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm";
import UserService from "./services/UserServices";
import AuthActions from "./redux/auth/authOperations";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      setError(e.message);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLogged) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <LoginForm />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1>{isLogged ? `User ${user.email} is authenticated` : "AUTHORIZE"}</h1>
      <h1>
        {user.isActivated
          ? "Account verified by email."
          : "VERIFY YOUR ACCOUNT!"}
      </h1>
      <button onClick={() => dispatch(AuthActions.logout())}>Logout</button>
      <div>
        <button onClick={() => getUsers()}>Get users</button>
      </div>
      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
