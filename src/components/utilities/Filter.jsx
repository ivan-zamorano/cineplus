import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import "../../assets/css/utilities-css/Filter.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Filter = () => {
  const { stars, handleStars } = useContext(Context);

  return (
    <>
      <div className="filter">
        <p>Filtrar por clasificación:</p>
        <div className="rating">
          <ul>
            <li
              onClick={() => {
                handleStars(1);
              }}
            >
              {stars.star1 ? (
                <StarIcon sx={{ color: "#bebebe" }} />
              ) : (
                <StarBorderIcon sx={{ color: "#bebebe" }} />
              )}
            </li>
            <li
              onClick={() => {
                handleStars(2);
              }}
            >
              {stars.star2 ? (
                <StarIcon sx={{ color: "#bebebe" }} />
              ) : (
                <StarBorderIcon sx={{ color: "#bebebe" }} />
              )}
            </li>
            <li
              onClick={() => {
                handleStars(3);
              }}
            >
              {stars.star3 ? (
                <StarIcon sx={{ color: "#bebebe" }} />
              ) : (
                <StarBorderIcon sx={{ color: "#bebebe" }} />
              )}
            </li>
            <li
              onClick={() => {
                handleStars(4);
              }}
            >
              {stars.star4 ? (
                <StarIcon sx={{ color: "#bebebe" }} />
              ) : (
                <StarBorderIcon sx={{ color: "#bebebe" }} />
              )}
            </li>
            <li
              onClick={() => {
                handleStars(5);
              }}
            >
              {stars.star5 ? (
                <StarIcon sx={{ color: "#bebebe" }} />
              ) : (
                <StarBorderIcon sx={{ color: "#bebebe" }} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
