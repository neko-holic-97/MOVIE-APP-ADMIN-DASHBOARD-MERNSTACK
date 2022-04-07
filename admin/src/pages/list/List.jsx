import React from "react";
import "./list.scss";
import { Link, useLocation } from "react-router-dom";

export const List = () => {
  const location = useLocation();
  const list = location.list;

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Tạo</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Thể loại</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Phân loại</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Tên phim</label>
            <input type="text" placeholder={list.title} />
            <label>Phân loại</label>
            <input type="text" placeholder={list.type} />
            <label>Thể loại</label>
            <input type="text" placeholder={list.genre} />
          </div>
          <div className="productFormRight">
            <button className="productButton">Cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  );
};
