import React from "react";
import "./movie.scss";
import { Link, useLocation } from "react-router-dom";
import { Publish } from "@material-ui/icons";

export const Movie = () => {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="movie">
      <div className="movieTitleContainer">
        <h1 className="movieTitle">Phim</h1>
        <Link to="/newmovie">
          <button className="movieAddButton">Tạo</button>
        </Link>
      </div>
      <div className="movieTop">
        <div className="movieTopRight">
          <div className="movieInfoTop">
            <img src={movie.img} alt="" className="movieInfoImg" />
            <span className="movieName">{movie.title}</span>
          </div>
          <div className="movieInfoBottom">
            <div className="movieInfoItem">
              <span className="movieInfoKey">ID</span>
              <span className="movieInfoValue">{movie._id}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">Thể loại</span>
              <span className="movieInfoValue">{movie.genre}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">Năm sản xuất</span>
              <span className="movieInfoValue">{movie.year}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">Độ tuổi phù hợp</span>
              <span className="movieInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="movieBottom">
        <form className="movieForm">
          <div className="movieFormLeft">
            <label>Tên phim</label>
            <input type="text" placeholder={movie.title} />
            <label>Năm</label>
            <input type="text" placeholder={movie.year} />
            <label>Thể loại</label>
            <input type="text" placeholder={movie.genre} />
            <label>Độ tuổi phù hợp</label>
            <input type="text" placeholder={movie.limit} />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className="movieFormRight">
            <div className="movieUpload">
              <img src={movie.img} alt="" className="movieUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="movieButton">Cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  );
};
