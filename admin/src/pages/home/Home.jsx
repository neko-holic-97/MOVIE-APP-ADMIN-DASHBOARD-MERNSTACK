import axios from "axios";
import React from "react";
import { Chart } from "../../chart/Chart";
import "./home.scss";
import { Widget } from "../../components/widget/Widget";
import { useMemo, useState, useEffect } from "react";

export const Home = () => {
  const MONTHS = useMemo(
    () => [
      "T1",
      "T2",
      "T3",
      "T4",
      "T5",
      "T6",
      "T7",
      "T8",
      "T9",
      "T10",
      "T11",
      "T12",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDljYTk4ZWZjOWFmN2Y1OTk3NDJkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTA2MzQzNSwiZXhwIjoxNjgwNTk5NDM1fQ.BCn5jgGhxw1ZlG5DZ-StrMkpqBSIpwFZfU6vo_M4HX0",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Thành viên mới": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <Chart
        data={userStats}
        title="Thống kê người dùng"
        grid
        dataKey="Thành viên mới"
      />
      <div className="homeWidgets">
        <Widget />
      </div>
    </div>
  );
};
