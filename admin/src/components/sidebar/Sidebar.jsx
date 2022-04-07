import {
  LineStyle,
  PermIdentity,
  MovieOutlined,
  PlayCircleOutlineOutlined,
} from "@material-ui/icons";
import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quản lý</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Trang chủ
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Thành viên
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <MovieOutlined className="sidebarIcon" />
                Danh sách phim
              </li>
            </Link>
            <Link to="/lists" className="link">
              <li className="sidebarListItem">
                <PlayCircleOutlineOutlined className="sidebarIcon" />
                Danh mục phim
              </li>
            </Link>
            <Link to="/newMovie" className="link">
              <li className="sidebarListItem">
                <MovieOutlined className="sidebarIcon" />
                Phim mới
              </li>
            </Link>
            <Link to="/newlist" className="link">
              <li className="sidebarListItem">
                <PlayCircleOutlineOutlined className="sidebarIcon" />
                Phân loại phim
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
