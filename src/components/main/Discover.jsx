import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/ContextProvider";
import "../../assets/css/main-css/Discover.css";
import MovieCard from "./MovieCard";
import Filter from "../utilities/Filter";
import LoadingSpinner from "../utilities/LoadingSpinner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Discover = () => {
  const { getMovies, movies, loading } = useContext(Context);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <section id="discover">
        <div className="container discover">
          <h1>Cartelera</h1>
          <Filter />
          {loading ? (
            <LoadingSpinner />
          ) : movies.length === 0 ? (
            <div className="not-found-wrapper">
              <p className="not-found">
                Oops! Parece que no hay películas que coincidan con tu busqueda
              </p>
              <button onClick={getMovies}>
                <ArrowBackIcon />
                Volver
              </button>
            </div>
          ) : (
            <div className="row">
              {movies.map((item, index) => (
                <div className="col-6 col-md-4 col-lg-3" key={index}>
                  <MovieCard {...item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Discover;
