import React, { useContext, useState } from "react";
import "./newMovie.scss";
import storage from "../../firebase";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export const NewMovie = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Đang tải lên " + progress + "% hoàn tất");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
  };

  return (
    <div className="newMovie">
      <h1 className="addMovieTitle">Phim mới</h1>
      <form className="addMovieForm">
        <div className="addMovieItem">
          <label>Hình ảnh</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addMovieItem">
          <label>Tên phim</label>
          <input
            type="text"
            placeholder="Nhập vào đây..."
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Giới thiệu</label>
          <input
            type="text"
            placeholder="Nhập vào đây..."
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Năm sản xuất</label>
          <input
            type="text"
            placeholder="Nhập vào đây..."
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Thể loại</label>
          <input
            type="text"
            placeholder="Nhập vào đây..."
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Thời lượng</label>
          <input
            type="text"
            placeholder="Nhập vào đây..."
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addMovieItem">
          <label>Độ tuổi phù hợp</label>
          <input
            type="text"
            placeholder="Nhập vào đây..."
            name="limit"
            onChange={handleChange}
          />
        </div>

        <div className="addMovieItem">
          <label>Phim dài tập?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">Sai</option>
            <option value="true">Đúng</option>
          </select>
        </div>

        <div className="addMovieItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addMovieItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 3 ? (
          <button className="addMovieButton" onClick={handleSubmit}>
            Tạo
          </button>
        ) : (
          <button className="addMovieButton" onClick={handleUpload}>
            Tải lên
          </button>
        )}
      </form>
    </div>
  );
};
