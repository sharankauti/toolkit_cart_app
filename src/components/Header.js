import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useNavigate } from "react-router-dom";
const Header = () => {

  const authState = useSelector((state)=> state.auth.isLoggedIn)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLog = ()=>{
    if (authState) {
      alert('You are Logging Out!!!')
    }
    dispatch(authActions.logout())
    navigate('/')
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <button onClick={handleLog}>Logout</button>
          </li>
          <li>
              <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
