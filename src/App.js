import "./App.css";
import axios from "axios";
import { useState } from "react";
import Welcome from "./Welcome";
// import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
// import Welcome from "./Welcome";

function App() {
  const [showPage, setShowPage] = useState(true);
  // <Routes>
  //   <Route path="/" element={<App />} />
  //   <Route path="welcome" element={<Welcome />} />
  // </Routes>;

  // const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    let request = {
      email: document.getElementById("exampleInputEmail1").value,
      password: document.getElementById("exampleInputPassword1").value,
    };
    axios
      .post("http://localhost:3000/login", request)
      .then((res) => {
        if (res.status === 200) {
          setShowPage(false);
          console.log("Inside 200");
        }
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.message);
      });
  };

  return (
    <>
      {showPage ? (
        <div style={{ padding: "200px" }}>
          <h3>Login</h3>
          <form onSubmit={(e) => login(e)}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <Welcome />
      )}

      {/* <Outlet /> */}
    </>
  );
}

export default App;
