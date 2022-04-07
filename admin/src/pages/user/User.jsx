import React from "react";
import "./user.scss";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Chỉnh sửa thông tin người dùng</h1>
        <Link to="/newUser">
          <button className="userAddButton">Tạo</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/2156316/pexels-photo-2156316.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <div className="userShowUser">Nguyễn Thị Thùy Linh</div>
              <div className="userShowUserTitle">Phát triển ứng dụng Web</div>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Thông tin cá nhân</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">nekoholic97</span>
            </div>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">05.03.1997</span>
            </div>
            <span className="userShowTitle">Thông tin liên lạc</span>

            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">0329 4305 849</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">nekoholic97@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Hà Nội</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Chỉnh sửa</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Tên tài khoản</label>
                <input
                  type="text"
                  placeholder="nekoholic97"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Họ và tên</label>
                <input
                  type="text"
                  placeholder="Nguyễn Thị Thùy Linh"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="nekoholic97@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  placeholder="0329 4305 849"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  placeholder="Hà Nội"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/2156316/pexels-photo-2156316.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Cập nhật</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
