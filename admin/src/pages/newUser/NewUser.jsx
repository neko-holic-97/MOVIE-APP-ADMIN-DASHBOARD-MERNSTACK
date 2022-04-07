import React from "react";
import "./newUser.scss";

export const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Thành viên mới</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Tên tên khoản</label>
          <input type="text" placeholder="Nhập vào đây..." />
        </div>
        <div className="newUserItem">
          <label>Họ và tên</label>
          <input type="text" placeholder="Nhập vào đây..." />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Nhập vào đây..." />
        </div>
        <div className="newUserItem">
          <label>Mật khẩu</label>
          <input type="password" placeholder="Nhập vào đây..." />
        </div>
        <div className="newUserItem">
          <label>Điện thoại</label>
          <input type="text" placeholder="Nhập vào đây..." />
        </div>
        <div className="newUserItem">
          <label>Địa chỉ</label>
          <input type="text" placeholder="Nhập vào đây..." />
        </div>
        <div className="newUserItem">
          <label>Giới tính</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Nam</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="male">Nữ</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="male">Khác</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Hoạt động</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Có</option>
            <option value="no">Không</option>
          </select>
        </div>
      </form>
      <button className="newUserButton">Tạo</button>
    </div>
  );
};
