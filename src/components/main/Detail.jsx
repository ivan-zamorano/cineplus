import "../../assets/css/main-css/Detail.css";
import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DummyImg from "../../assets/img/dummy-poster.png";

const Detail = () => {
  const { detail } = useContext(Context);

  let imgUrl = `https://image.tmdb.org/t/p/w440_and_h660_face${detail.poster_path}`;
  if (imgUrl === "https://image.tmdb.org/t/p/w440_and_h660_facenull") {
    imgUrl = DummyImg;
  }
  return (
    <>
      <section id="detail">
        <div className="container detail">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-img-wrapper">
                <img src={imgUrl} alt="" className="detail-img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-description-wrapper">
                <h1>{detail.title}</h1>
                <p className="detail-description">{detail.overview}</p>
              </div>
              <Link to="/">
                <button className="detail-btn">
                  <ArrowBackIcon />
                  Volver
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
