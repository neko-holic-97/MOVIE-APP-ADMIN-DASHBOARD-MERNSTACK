import React from "react";
import "./widget.scss";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

export const Widget = () => {
  const [newUser, setNewUser] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDljYTk4ZWZjOWFmN2Y1OTk3NDJkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTA2MzQzNSwiZXhwIjoxNjgwNTk5NDM1fQ.BCn5jgGhxw1ZlG5DZ-StrMkpqBSIpwFZfU6vo_M4HX0",
          },
        });
        setNewUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="widget">
      <span className="widgetTitle">Thành viên mới</span>
      <ul className="widgetList">
        {newUser.map((user) => (
          <li className="widgetListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetImg"
            />
            <div className="widgetUser">
              <span className="widgetUsername">{user.username}</span>
            </div>
            <button className="widgetButton">
              <Visibility className="widgetIcon" />
              Xem
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
