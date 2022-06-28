import "../../assets/css/main-css/MovieCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import DummyImg from "../../assets/img/dummy-poster.png";

const MovieCard = (props) => {
  const { title, poster_path, id } = props;
  const { handleDetail } = useContext(Context);

  let imgUrl = `https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`;
  if (imgUrl === "https://image.tmdb.org/t/p/w440_and_h660_facenull") {
    imgUrl = DummyImg;
  }
  return (
    <>
      <div className="movie-card">
        <Link to="/detail" onClick={() => handleDetail(id)}>
          <img src={imgUrl} alt="" />
          <div className="title-wrapper">
            <p className="title">{title}</p>
          </div>
          <div className="rating"></div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
