import React, { useContext } from "react";
import "./topbar.scss";
import { ArrowDropDown } from "@material-ui/icons";
import avatar from "../../img/avatar.jpg";
import { logout } from "../../context/authContext/AuthActions";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";

export const Topbar = () => {
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Quản lý</span>
        </div>
        <div className="topRight">
          <img src={avatar} alt="" className="topAvatar" />
          <div className="logOut">
            <ArrowDropDown className="icon" />
            <div className="options">
              <Link to="/login">
                <span onClick={() => dispatch(logout())}>Đăng xuất</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
